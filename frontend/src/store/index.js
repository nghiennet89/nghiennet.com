import Vue from 'vue';
import Vuex from 'vuex';
import syncStorage from '@/store/plugins/syncStorage';
import axios from 'axios';

Vue.use(Vuex);

const listExcludeModules = ['ModuleBase']
const requireModules = require.context('@/store/modules', true, /\.js$/)
let listModules = {};
for (const file of requireModules.keys()) {
  const moduleConfig = requireModules(file)
  const moduleName = file
    .replace(/.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
  if (listExcludeModules.indexOf(moduleName) < 0) listModules[moduleName] = moduleConfig.default || moduleConfig;
}

export default new Vuex.Store({
  modules: {
    ...listModules
  },

  plugins: [
    syncStorage({}),
  ],

  state: {
    ServerTime: null,
    serverNotifications: [],
  },
  mutations: {
    SERVER_TIME(state, payload) {
      state.ServerTime = payload
    },
    ADD_SERVER_NOTIFICATION(state, payload) {
      state.serverNotifications.push(payload)
    }
  },
  actions: {
    getServerTime: async ({commit}) => {
      let res = await axios.get('/server-time');
      await commit('SERVER_TIME', res.data)
      return res
    },
    //load data for all
    loadMasterData: async ({dispatch}) => {
      let res = await Promise.all([
        dispatch('getServerTime')
      ])
      res.forEach((r, i) => r && r.data ? (r.data.data ? res[i] = r.data.data : res[i] = r.data) : {});
      return res
    },
    //load data for loged-in user
    loadUserMasterData: async ({dispatch}) => {
      let res = await Promise.all([
        dispatch('role/all'),
        dispatch('scope/all'),
      ]);
      res.forEach((r, i) => r && r.data ? (r.data.data ? res[i] = r.data.data : res[i] = r.data) : {});
      return res
    },
    gotServerNotification: async ({commit}, payload) => {
      commit('ADD_SERVER_NOTIFICATION', payload)
    },
  },
  getters: {
    serverNotifications: state => state.serverNotifications,
  },
});
