import itemSchema from '@/store/modules/schemas/role.schema';
import ModuleBase from "@/store/modules/ModuleBase";
import axios from 'axios';

const resourceName = 'roles'
const base = new ModuleBase(itemSchema, resourceName);
export default {
  namespaced: base.namespaced,
  state: {
    ...base.state,
  },
  getters: {
    ...base.getters,
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
    setScope: async ({commit}, data) => {
      let res = await axios.post('/roles/set-scopes', data);
      commit('UPDATE', res.data.data);
      return res;
    }
  }
}
