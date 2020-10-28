/*
 * @Description:
 * @version:
 * @Author: huhuan
 * @Date: 2020-09-08 12:00:35
 * @LastEditors: huhuan
 * @LastEditTime: 2020-09-22 15:40:11
 */
import { State, UserInfo } from './state'

export default {
  setToken(state: State, token: string) {
    state.token = token
  },
  setUser(state: State, user: UserInfo) {
    state.userInfo = user
  },
  removeToken(state: State) {
    state.token = ''
  }
}
