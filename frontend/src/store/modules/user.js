import itemSchema from '@/store/modules/schemas/user.schema';
import ModuleBase from "@/store/modules/ModuleBase";

const resourceName = 'users'
const base = new ModuleBase(itemSchema, resourceName);
export default {
  namespaced: base.namespaced,
  state: {
    ...base.state,
    authenticatedUser: null
  },
  getters: {
    ...base.getters,
    authenticatedUser: state => state.authenticatedUser
  },
  mutations: {
    ...base.mutations,
    SET_AUTHENTICATED_USER(state, payload) {
      state.authenticatedUser = payload
    }
  },
  actions: {
    ...base.actions,
    setAuthenticatedUser: async ({commit}, payload) => {
      return commit('SET_AUTHENTICATED_USER', payload);
    }
  }
}
