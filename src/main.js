// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import './assets/modules/bootstrap/css/bootstrap.min.css';
// import './assets/modules/fontawesome/css/all.min.css';
// import './assets/css/style.css'
// import './assets/css/components.css'
// import './assets/js/stisla.js'
// import 'bulma/bulma.sass'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
