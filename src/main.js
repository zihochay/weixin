// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

import VForm from 'vform-builds' // 引入VForm库
import 'vform-builds/dist/VFormDesigner.css' // 引入VForm样式

Vue.use(FormMaking)
Vue.use(VForm)

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
