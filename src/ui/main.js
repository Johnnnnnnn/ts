import Vue from 'vue'
import App from './App.vue'


console.error('$ =>1 ' + (typeof window.$))

new Vue({
  el: '#app',
  render: h => h(App)
})
