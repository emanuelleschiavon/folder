import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'

Vue.use(VueRouter);

axios.defaults.baseURL='https://folder-api.herokuapp.com/api/v1/documents'

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
