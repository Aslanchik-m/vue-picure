import Vue from "vue";
import Vuex from "vuex";

import Restaurants from "./module/restaurants";
import Chefs from "./module/chefs";
import Dishes from "./module/dishes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Restaurants,
    Chefs,
    Dishes
  }
});
