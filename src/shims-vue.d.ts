import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter // 这表示this下有这个东西
    $route: Route
    $post: any
    $get: any
    $del: any
    $put: any
    $mmessage: any
    $mconfirm: any
    $mdropDownMenu: any
    $mloading: any
  }
}

