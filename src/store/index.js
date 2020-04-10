import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import config from "@/api/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async fetchDrillingRigList() {
      console.log("FETCh", config);

      try {
        const url = `${config.domain}/test-task?year=2019`;
        console.log("axios", axios);
        const response = await axios.get(url);
        console.log("response", response);
      } catch (error) {
        // TODO add error notification
        console.log("add error notification");
        throw error;
      }
    }
  },
  modules: {}
});
