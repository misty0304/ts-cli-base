/*
 * @Description:
 * @version:
 * @Author: huhuan
 * @Date: 2020-09-07 11:41:20
 * @LastEditors: huhuan
 * @LastEditTime: 2020-09-24 20:05:08
 */
import HTTP from './http'
import API from '@/api'

/**
 * http请求插件
 * @param {Object} Vue
 * @param {Object} [opts={}]
 */
const install: any = function(Vue: any, { errorCallback } = {} as any) {
  /* istanbul ignore if */
  if (install.installed) return

  Vue.prototype.$get = (apiName: string, data: object, options = {} as any) => {
    return new Promise((resolve, reject) => {
      const _api = API[apiName]
      HTTP[_api.method.toLowerCase()](`${_api.host}${_api.path}`, data, options)
        .then((res: any) => {
          if (res.result === '0') {
            resolve(res)
          } else {
            Vue.prototype.$mmessage.error(res.message)
            Vue.prototype.$mloading(false)
          }
        })
        .catch(
          async (err: any): Promise<void> => {
            if (errorCallback) {
              await errorCallback(err, options)
            }
            reject(err)
          }
        )
    })
  }

  Vue.prototype.$post = (apiName: string, data: object, params: object, options = {} as any) => {
    return new Promise((resolve, reject) => {
      const _api = API[apiName]
      HTTP[_api.method.toLowerCase()](`${_api.host}${_api.path}`, data, params, options)
        .then((res: any) => {
          if (res.result === '0') {
            resolve(res)
          } else {
            Vue.prototype.$mmessage.error(res.message)
            Vue.prototype.$mloading(false)
          }
        })
        .catch(
          async (err: any): Promise<void> => {
            if (errorCallback) {
              await errorCallback(err, options)
            }
            reject(err)
          }
        )
    })
  }

  Vue.prototype.$put = (apiName: string, data: object, params: object, options = {} as any) => {
    return new Promise((resolve, reject) => {
      const _api = API[apiName]
      HTTP[_api.method.toLowerCase()](`${_api.host}${_api.path}`, data, params, options)
        .then((res: any) => {
          if (res.result === '0') {
            resolve(res)
          } else {
            Vue.prototype.$mmessage.error(res.message)
            Vue.prototype.$mloading(false)
          }
        })
        .catch(
          async (err: any): Promise<void> => {
            if (errorCallback) {
              await errorCallback(err, options)
            }
            reject(err)
          }
        )
    })
  }

  Vue.prototype.$del = (apiName: string, data: object, options = {} as any) => {
    return new Promise((resolve, reject) => {
      const _api = API[apiName]
      HTTP[_api.method.toLowerCase()](`${_api.host}${_api.path}`, data, options)
        .then((res: any) => {
          if (res.result === '0') {
            resolve(res)
          } else {
            Vue.prototype.$mmessage.error(res.message)
            Vue.prototype.$mloading(false)
          }
        })
        .catch(
          async (err: any): Promise<void> => {
            if (errorCallback) {
              await errorCallback(err, options)
            }
            reject(err)
          }
        )
    })
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
