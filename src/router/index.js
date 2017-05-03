import Vue from 'vue'
import Router from 'vue-router'
import CustomerForm from '@/components/CustomerForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/customer',
      component: CustomerForm
    }
  ]
})
