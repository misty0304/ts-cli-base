/*
 * @Description:
 * @version:
 * @Author: huhuan
 * @Date: 2020-09-04 16:40:57
 * @LastEditors: huhuan
 * @LastEditTime: 2020-10-28 11:03:58
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MUI from 'md-ui-pc'
import axios from '@/axios'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(MUI)

Vue.use(axios, {
  errorCallback: async (err: any, { isShowError = true, errMsg = '操作失败', isCover = false } = {}): Promise<void> => {
    Vue.prototype.$mloading(false)
    if (isShowError) {
      const _errMsg = isCover || !err.message ? errMsg : err.message
      await Vue.prototype.$mmessage.error(_errMsg)
    }
    if (err.result === 'error_http_login_expired') {
      // 登录失效时 重新跳转到登录页
      store.commit('removeToken')
      window.location.hash = '#/workspace'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
