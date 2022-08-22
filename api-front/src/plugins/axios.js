import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:1337/api/supermercados'

Vue.use({
  install(Vue){
    Vue.prototype.$http = axios
  }
})