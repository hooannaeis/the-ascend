import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Game.vue')
  },
  {
    path: '/highscores',
    name: 'Highscores',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/HighScores.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
