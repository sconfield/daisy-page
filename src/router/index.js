import Vue from 'vue'
import Router from 'vue-router'
import CustomerForm from '@/components/CustomerForm.vue'
import CustomerList from '@/components/CustomerList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/customerForm',
      component: CustomerForm
    },
    {
      path: '/customerList',
      component: CustomerList
    }
  ]
})
