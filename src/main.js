// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import common from './assets/css/common.scss'
import store from './components/vuex/store'
import Jquery from 'jquery'
import Toast from 'vue-easy-toast'

Vue.config.productionTip = false
Vue.use(common)
Vue.use(VueResource)
Vue.use(Jquery)
Vue.use(Toast)

Vue.directive('my-enter', function (el) {
  console.log('enter ---', Jquery(el), window, Jquery(document))
  let e = Jquery(el)
  let doc = Jquery(document)
  doc.bind('keydown keypress', function (event) {
    if (event.which === 13) {
      console.log('1313', event, e)
      e.focus()
    }
  })
  e.on('destory', cleanUp)
  function cleanUp () {
    doc.off('keydown keypress')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

