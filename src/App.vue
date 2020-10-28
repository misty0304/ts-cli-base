<template>
  <div id="app" class="app m-fb m-fb-col m-item-flex-1">
    <router-view />
  </div>
</template>

<script lang="ts">
require('md-ui-pc/lib/md-ui-pc.css')
require('@/assets/css/animate.scss')
require('@/assets/css/common.scss')
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1440px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
