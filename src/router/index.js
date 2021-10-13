import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import SelectTagsView from '../views/SelectTagsView.vue';
import ContentFeedView from '../views/ContentFeedView.vue';
import SavedContentView from '../views/SavedContentView.vue';
import SearchView from '../views/SearchView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
    children: [
      {
        path: 'select-tags',
        name: 'select-tags',
        component: SelectTagsView,
      },
      {
        path: 'feed',
        name: 'feed',
        component: ContentFeedView,
      },
      {
        path: 'saves',
        name: 'saves',
        component: SavedContentView,
      },
      {
        path: 'search',
        name: 'search',
        component: SearchView,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
