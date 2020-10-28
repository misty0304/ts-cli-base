/*
 * @Description:
 * @version:
 * @Author: huhuan
 * @Date: 2020-09-08 12:00:35
 * @LastEditors: huhuan
 * @LastEditTime: 2020-09-17 16:04:15
 */
import { GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  token(state) {
    return state.token
  },
  userInfo(state) {
    return state.userInfo
  }
}

export default getters
