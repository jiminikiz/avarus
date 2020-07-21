import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TitleScreen from '@/views/TitleScreen.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Title Screen',
    component: TitleScreen,
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "settings" */ '@/views/Settings.vue'),
  },
  {
    path: '/new-game',
    name: 'New Game',
    component: () =>
      import(/* webpackChunkName: "new-game" */ '@/views/NewGame.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
