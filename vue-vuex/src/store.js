import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    depth: 3
  },
  mutations: {
    updateDepth: (state, value) => (state.depth = value)
  }
});
