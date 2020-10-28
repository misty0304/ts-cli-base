/*
 * @Description:
 * @version:
 * @Author: huhuan
 * @Date: 2020-09-04 16:40:57
 * @LastEditors: huhuan
 * @LastEditTime: 2020-09-17 16:42:52
 */
import Vue from 'vue'
import * as Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import state, { State } from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store<State>({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin]
})
