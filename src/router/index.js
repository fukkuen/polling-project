import Vue from 'vue'
import Router from 'vue-router'
import ListView from '@/views/poll-list-view'
import DetailView from '@/views/poll-detail-view'
import WildView from '@/views/wild-view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poll-list',
      component: ListView
    },
    {
      path: '/:id',
      name: 'poll-detail',
      component: DetailView
    },
    {
      path: '*',
      name: 'poll-list',
      component: WildView
    }
  ]
})
