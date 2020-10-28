const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const getConfigName = () => {
  let configFileName = 'local'
  switch (process.env.DEPLOY_ENV) {
    case 'production':
      configFileName = 'pro'
      console.log('生产环境')
      break
    case 'development':
      configFileName = 'dev'
      console.log('开发环境')
      break
    case 'test':
      configFileName = 'test'
      console.log('测试环境')
      break
    default:
      configFileName = 'local'
      console.log('本地环境')
  }
  configFileName = configFileName + '.conf.ts'
  return configFileName
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.alias.set('CONFIG', path.resolve(__dirname, 'config/' + getConfigName()))
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  configureWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 8000,
    proxy: {
      '/': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  pages: {
    //配置多页面入口
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html'
    }
  }
}
