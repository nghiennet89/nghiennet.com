import cloneDeep from 'clone-deep'
import {CONSTANTS} from '@/config'

const getRandId = () => {
  return new Date().getTime() + Math.random().toString(36).substring(2);
}
const system = {
  namespaced: true,
  state: {
    saveRequest: false,
    appLoading: false,
    BreadCrumb: [],
    Requests: {
      listConfig: [],
      listResponse: [],
      sent: 0,
      received: 0
    },
    notices: {}
  },

  getters: {
    breadcrumb: state => state.BreadCrumb,
    appLoading: state => state.appLoading,
    notices: state => Object.values(state.notices),
  },

  mutations: {
    TOGGLE_APP_LOADING: (state, payload) => {
      state.appLoading = payload;
    },
    SET_BREADCRUMB: (state, payload) => {
      state.BreadCrumb = payload;
    },
    FIRE_REQUEST: (state, payload) => {
      if (state.saveRequest) state.Requests.listConfig.push(payload);
      let silentRequest = payload && payload.params ? payload.params.silent : false;
      if (!silentRequest) state.Requests.sent += 1;
      if (state.Requests.sent === state.Requests.received) state.appLoading = false
      else state.appLoading = true
    },
    ADD_RESPONSE: (state, res) => {
      if (state.saveRequest) state.Requests.listResponse.push(res);
      let silentRequest = res && res.config && res.config.params ? res.config.params.silent : false;
      if (!silentRequest) state.Requests.received += 1;
      if (state.Requests.sent === state.Requests.received) state.appLoading = false
      else state.appLoading = true
    },
    ADD_NOTICE: (state, notice) => {
      let notices = cloneDeep(state.notices)
      notices[notice.id] = notice
      state.notices = notices
    },
    REMOVE_NOTICE: (state, notice) => {
      let notices = cloneDeep(state.notices)
      delete notices[notice.id]
      state.notices = notices
    },
  },

  actions: {
    setBreadcrumb: async ({commit}, payload) => {
      return await commit('SET_BREADCRUMB', payload)
    },
    fireRequest: async ({commit}, payload) => {
      return await commit('FIRE_REQUEST', payload)
    },
    addResponse: async ({dispatch, commit}, response) => {
      await commit('ADD_RESPONSE', response)
      let hideNotice = response && response.config && response.config.params ? response.config.params.hideNotice : false;
      if (hideNotice) return;
      let message = response && response.data ? response.data.message : null;
      if (!message) return;
      if (typeof message === 'object') message = Object.values(message).join("\n");
      if (response.status === 200) await dispatch('noticeSuccess', message);
      else await dispatch('noticeError', {message: message, errorCode: response.status});
    },
    toggleAppLoading: ({commit}, payload) => {
      return commit('TOGGLE_APP_LOADING', payload)
    },
    noticeInfo: async ({commit}, message) => {
      let randStr = getRandId()
      let notice = {
        id: randStr,
        type: CONSTANTS.NOTICE_TYPE.INFO,
        message: message
      }
      return await commit('ADD_NOTICE', notice)
    },
    noticeSuccess: async ({commit}, message) => {
      let randStr = getRandId()
      let notice = {
        id: randStr,
        type: CONSTANTS.NOTICE_TYPE.SUCCESS,
        message: message
      }
      return await commit('ADD_NOTICE', notice)
    },
    noticeWarning: async ({commit}, message) => {
      let randStr = getRandId()
      let notice = {
        id: randStr,
        type: CONSTANTS.NOTICE_TYPE.WARNING,
        message: message
      }
      return await commit('ADD_NOTICE', notice)
    },
    noticeError: async ({commit}, data) => {
      let randStr = getRandId()
      let message = data.message
      let errorCode = data.errorCode
      if (typeof data === 'string') {
        message = data;
        errorCode = 0;
      }
      let notice = {
        id: randStr,
        type: CONSTANTS.NOTICE_TYPE.ERROR,
        message: message,
        errorCode: errorCode,
      }
      return await commit('ADD_NOTICE', notice)
    },
    removeNotice: async ({commit}, notice) => {
      return await commit('REMOVE_NOTICE', notice)
    }
  },
};

export default system
