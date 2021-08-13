import inspector from 'schema-inspector';
import axios from 'axios';
import cloneDeep from 'clone-deep';

const buildQuery = (params) => {
  let options = params.options
  let query = {
    limit: options.itemsPerPage,
    page: options.page,
    silent: params.querySilent ? params.querySilent : false
  }
  if (options.sortBy && options.sortBy.length && options.sortDesc && options.sortDesc.length) {
    query.orderBy = options.sortBy.join(';');
    query.sortedBy = options.sortDesc.join(';').replace(/false/ig, 'asc').replace(/true/ig, 'desc');
  }

  if (params.searchWith) query.with = params.searchWith

  let search = params.searchFields ? params.searchFields : {}
  let searchValues = [];
  let searchTypes = [];
  Object.keys(search).forEach(key => {
    if (search[key].value && search[key].type) {
      searchValues.push(key + ':' + search[key].value)
      searchTypes.push(key + ':' + search[key].type)
    }
  })
  if (searchValues.length && searchTypes.length) {
    query.search = searchValues.join(';');
    query.searchFields = searchTypes.join(';');
    query.searchJoin = options.searchJoin ? options.searchJoin : 'AND';
  }
  return query
}

export default (itemSchema, resourceName) => {
  return {
    namespaced: true,
    state: {
      all: [],
      searchParams: {},
      selectedId: null,
      pagination: {
        current_page: 0,
        per_page: 0,
        last_page: 0,
        from: 0,
        to: 0,
        total: 0,
        first_page_url: '',
        last_page_url: '',
        next_page_url: '',
        prev_page_url: '',
        path: '',
      }
    },

    getters: {
      all: state => state.all,
      getById: state => id => {
        return state.all.filter(i => i.id === id);
      },
      getByFields: state => fields => {
        return state.all.filter(i => {
          let matched = true;
          Object.keys(fields).forEach(fieldName => {
            if (i[fieldName] !== fields[fieldName]) {
              matched = false;
              return false; //to break forEach
            }
          });
          return matched
        })
      },
      selected: state => {
        let item = state.all.filter(i => i.id === state.selectedId);
        if (item.length) return item[0];
        return null;
      },
      pagination: state => state.pagination,
    },

    mutations: {
      INIT_STATE(state, items) {
        state = items;
      },
      ALL(state, items) {
        state.all = items;
      },
      PAGINATION(state, pagination) {
        state.pagination = pagination
      },
      ADD(state, item) {
        item = inspector.sanitize(itemSchema.sanitize, item).data;
        let existedItem = state.all.filter(i => i.id === item.id);
        if (!existedItem.length) {
          let all = cloneDeep(state.all)
          all.push(item);
          state.all = all;
        } else console.log('add_duplicate_item.user', item)
      },
      UPDATE(state, item) {
        item = inspector.sanitize(itemSchema.sanitize, item).data;
        let existedItem = state.all.filter(i => i.id === item.id);
        if (existedItem.length) {
          let itemIndex = state.all.indexOf(existedItem[0]);
          let all = cloneDeep(state.all)
          all[itemIndex] = item;
          state.all = all;
        } else console.log('item_not_found.user', item)
      },
      DELETE(state, id) {
        let existedItem = state.all.filter(i => i.id === id);
        if (existedItem.length) {
          let itemIndex = state.all.indexOf(existedItem[0]);
          let all = cloneDeep(state.all)
          delete all[itemIndex];
          state.all = all
        }
      },
      SELECT(state, id) {
        state.selectedId = id
      },
      CLEAR(state) {
        state.all = []
        state.selectedId = null
        state.searchParams = {}
      }
    },

    actions: {
      get: async ({commit}, searchParams) => {
        let params = buildQuery(searchParams);
        let res = await axios.get('/' + resourceName, {params: params});
        let listItems = res.status === 200 && res.data && res.data.data ? res.data.data : [];
        if (parseInt(params.limit) === -1) listItems = res.status === 200 && res.data ? res.data : [];
        await commit('ALL', listItems);
        let pagination = {
          current_page: 1,
          per_page: listItems.length,
          last_page: 1,
          from: 0,
          to: listItems.length - 1,
          total: listItems.length,
          first_page_url: '',
          last_page_url: '',
          next_page_url: '',
          prev_page_url: '',
          path: '',
        }
        if (params.limit !== -1) {
          pagination = cloneDeep(res.data)
          delete pagination.data;
        }
        await commit('PAGINATION', pagination);
        return res
      },
      all: async ({commit}) => {
        let res = await axios.get('/' + resourceName, {params: {limit: -1}});
        let listItems = res.status === 200 && res.data ? res.data : [];
        await commit('ALL', listItems);
        await commit('PAGINATION', {
          current_page: 1,
          per_page: listItems.length,
          last_page: 1,
          from: 0,
          to: listItems.length - 1,
          total: listItems.length,
          first_page_url: '',
          last_page_url: '',
          next_page_url: '',
          prev_page_url: '',
          path: '',
        });
        return res
      },
      create: async ({commit}, item) => {
        let res = await axios.post('/' + resourceName, item);
        if (res.status === 200 && res.data && res.data.data) await commit('ADD', res.data.data);
        return res
      },
      update: async ({commit}, item) => {
        let res = await axios.put('/' + resourceName + '/' + item.id, item);
        if (res.status === 200) await commit('UPDATE', item);
        return res
      },
      delete: async ({commit}, itemId) => {
        if (Array.isArray(itemId)) itemId = itemId.join(',');
        let res = await axios.delete(resourceName + '/' + itemId);
        await commit('DELETE', itemId);
        return res
      },
      setSelected: async ({commit}, id) => {
        return await commit('SELECT', id);
      },
      clear: async ({commit}) => {
        return await commit('CLEAR');
      },
      validateInsert: async ({state}, obj) => {
        return await state ? inspector.validate(itemSchema.validate.update, obj) : {}
      },
      validateUpdate: async ({state}, obj) => {
        return await state ? inspector.validate(itemSchema.validate.insert, obj) : {}
      },
      // eslint-disable-next-line
      import: async ({}, data) => {
        return await axios.post('/' + resourceName + '/import', data);
      },
      // eslint-disable-next-line
      export: async ({}, searchParams) => {
        let params = buildQuery(searchParams);
        return await axios.get('/' + resourceName + '/export', {params: params, responseType: 'blob'});
      },
    }
  }
};
