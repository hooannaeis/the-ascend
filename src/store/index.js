import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const firebaseConfig = {
  apiKey: "AIzaSyChuCjqT6vgC2swI_uM0B8UDypKDO0mj3A",
  authDomain: "graf-zahl.firebaseapp.com",
  databaseURL: "https://graf-zahl.firebaseio.com",
  projectId: "graf-zahl",
  storageBucket: "graf-zahl.appspot.com",
  messagingSenderId: "432534811805",
  appId: "1:432534811805:web:3f22508d359cf61e651074",
  measurementId: "G-ZR0PY1WYMW"
};

firebase.initializeApp(firebaseConfig);

Vue.use(Vuex);

const state = {
  db: firebase.firestore(),
  analytics: firebase.analytics(),
  gameConfigs: {
    minDigit: 1,
    maxDigit: 9,
    digitCount: 9,
    maxLives: 3,
    maxTime: 15 * 1000 // seconds
  },
  gameStats: {
    failCount: 0,
    startTime: null,
    now: null,
    timePunishments: 0
  },
  orderedArray: [1],
  shuffledArray: [],
  nextDigit: -1,
  currentDigit: 1,
  gameRunning: true,
  gameWon: false,
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
