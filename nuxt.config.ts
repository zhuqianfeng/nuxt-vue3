// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3001,
  },
  nitro: { // 配置代理
    devProxy: {
      "/proxy": {
        target: "http://localhost:3004", // 这里是接口地址
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  // 开启ssr服务，默认开启
  ssr: true,
  // 开启调试模式
  devtools: { enabled: true },
  // 应用模块
  modules: ['@vant/nuxt']
})
