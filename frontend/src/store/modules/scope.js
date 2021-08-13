import itemSchema from '@/store/modules/schemas/scope.schema';
import ModuleBase from "@/store/modules/ModuleBase";

const resourceName = 'scopes'
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
    ...base.actions
  }
}
