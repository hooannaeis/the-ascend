import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  minDigit: 1,
  maxDigit: 9,
  digitCount: 9,
  orderedArray: [1],
  shuffledArray: [],
  nextDigit: -1,
  currentDigit: 1,
  gameRunning: true,
  gameWon: false,
  failCount: 0,
  maxLives: 3
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

if (module.hot) {
  module.hot.accept(['./getters', './actions', './mutations'], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    });
  });
}

export default store;
