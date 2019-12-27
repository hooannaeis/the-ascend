import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/game',
    name: 'Game',
    meta: {
      title: 'Game'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  },
  {
    path: '/highscores',
    name: 'Highscores',
    meta: {
      title: 'Highscores'
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HighScores.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '*',
    name: 'Redirect - Home',
    meta: {
      title: 'Home'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

const DEFAULT_TITLE = 'ascend - the game';
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  document.title = to.meta.title || DEFAULT_TITLE;
  store.state.analytics.logEvent('screen_view', { screen_name: to.meta.title });
  next();
});

export default router;
