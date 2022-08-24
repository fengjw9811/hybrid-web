import Vue from 'vue'
import axios from 'axios'

// 设置axios请求baseurl
axios.defaults.baseURL = 'http://localhost:3001'

// 设置拦截器
axios.interceptors.response.use((response) => {
  // 统一处理数据
  return response.data.data
}, (err) => {
  // 处理错误
  return Promise.reject(err)
})

// 绑定到Vue原型中: this.$http -> axios
Vue.prototype.$http = axios
