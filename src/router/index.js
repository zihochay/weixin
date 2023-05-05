import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VForm from '@/views/vForm'
import ADD from '@/views/vForm/addPage.vue'
import Love from '@/views/love'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Love',
      component: Love
    },
    {
      path: '/vform',
      name: 'VForm',
      component: VForm
    },
    {
      path: '/add',
      name: 'ADD',
      component: ADD
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
