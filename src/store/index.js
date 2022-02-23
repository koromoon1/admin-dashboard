import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mini: false,
    drawer: true,
    notification: 5,
  },
  getters: {
    mini(state) {
      return state.mini;
    },
    drawer(state) {
      return state.drawer;
    },
    notification(state) {
      return state.notification;
    },
  },
  mutations: {
    toggleMini(state, newMini) {
      state.mini = newMini;
    },
    toggleDrawer(state, newDrawer) {
      state.drawer = newDrawer;
    },
    addNotification(state) {
      state.notification++;
    },
    decreaseNotification(state) {
      state.notification--;
    },
    clearNotification(state) {
      state.notification = 0;
    },
  },
  actions: {
    toggleMini({ commit }, newValue) {
      commit("toggleMini", newValue);
    },
    toggleDrawer({ commit }, newValue) {
      commit("toggleDrawer", newValue);
    },
    addNotification({ commit }) {
      commit("addNotification");
    },
    decreaseNotification({ commit }) {
      commit("decreaseNotification");
    },
    clearNotification({ commit }) {
      commit("clearNotification");
    },
  },
  modules: {},
});
