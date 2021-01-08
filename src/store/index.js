import { createStore } from 'vuex';
import userModule from './userModule';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: userModule,
  },
});
