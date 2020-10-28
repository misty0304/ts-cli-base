/*
 * @Description:
 * @version:
 * @Author: huhuan
 * @Date: 2020-09-07 11:16:23
 * @LastEditors: huhuan
 * @LastEditTime: 2020-09-24 20:13:43
 */
import axios, { AxiosResponse } from 'axios'
// type.ts定义的泛型接口
import { Get, Post, Put, Delete } from './type'
import store from '@/store/index'

export interface CustomSuccessData<T> {
  result: string;
  message?: string;
  data?: T;
  // eslint-disable-next-line
  [keys: string]: any
}

// 错误过滤
// eslint-disable-next-line
const responseHandler = (response: AxiosResponse): CustomSuccessData<any> => {
  if (response.status === 200) {
    if (response.data.result === '0') {
      return response.data
    } else if (response.data.result === '403') {
      // 登录失效时 重新跳转到登录页
      window.location.hash = '#/'
      return response.data
    }
  }
  return response.data
}

// 创建axios实例
const service = axios.create({
  timeout: 10000 // 10S超时
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = store.getters.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// GET 请求
const get: Get = async (url, params, config) => {
  const respone = await service.get(url, { params, ...config })
  return responseHandler(respone)
}

// POST 请求
const post: Post = async (url, data, params, config) => {
  const respone = await service.post(url, data, { params, ...config })
  return responseHandler(respone)
}

// PUT 请求
const put: Put = async (url, data, params, config) => {
  const respone = await service.put(url, data, { params, ...config })
  return responseHandler(respone)
}

// DELETE 请求
const del: Delete = async (url, params, config) => {
  const respone = await service.delete(url, { params, ...config })
  return responseHandler(respone)
}
// eslint-disable-next-line

export default { get, post, put, del } as any
