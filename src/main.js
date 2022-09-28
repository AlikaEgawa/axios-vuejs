import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router';
import store from './store';

Vue.config.productionTip = false

axios.defaults.baseURL = 
  "https://firestore.googleapis.com/v1/projects/vuejs-http-41e84/databases/(default)/documents";

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    console.log('interceptors request', config);
    return config
  },
  error => {
    return Promise.reject(error);
  }
);
const interceptorsResponse = axios.interceptors.response.use(
  config => {
    console.log('interceptors request', config);
    return config
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount('#app')
