import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    showLoading:false,
    showNav:false
}

export default new Vuex.Store({
    state
})
