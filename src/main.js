// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import Antd from 'ant-design-vue'
import Echarts from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Antd)
Vue.components('v-chart', Echarts)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})