import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  //   mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/canvas1',
      name: 'canvas1',
      component: () => import('./views/canvas.vue')
    },
    {
      path: '/canvas2',
      name: 'canvas2',
      component: () => import('./views/canvas2.vue')
    },
    {
      path: '/canvas3',
      name: 'canvas3',
      component: () => import('./views/canvas3.vue')
    },
    {
      path: '/canvasGame',
      name: 'canvasGame',
      component: () => import('./views/canvasGame/canvasGa.vue')
    },
    {
      path: '/com',
      name: 'com',
      component: () => import('./views/com')
    },
    {
      path: '/canvasChoose',
      name: 'canvasChoose',
      component: () => import('./views/canvasChoose')
    },
    {
      path: '/imgCanvas',
      name: 'imgCanvas',
      component: () => import('./views/imgCanvas')
    },
    {
      path: '/twoColor',
      name: 'twoColor',
      component: () => import('./views/twoColorBall')
    }
  ]
})
