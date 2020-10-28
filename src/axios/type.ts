import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { CustomSuccessData } from './http'

// 泛型接口
export interface Get {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>
}

// 泛型接口
export interface Post {
  <T>(url: string, data?: any, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>
}

// 泛型接口
export interface Put {
  <T>(url: string, data?: any, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>
}

// 泛型接口
export interface Delete {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>
}
