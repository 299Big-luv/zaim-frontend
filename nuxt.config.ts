// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/eslint',
    'nuxt-sanctum-auth',
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  nuxtSanctumAuth: {
    token: false, // token認証ならここをTrueにするが、今回はクッキー認証なのでfalse
    baseUrl: process.env.API_BASE_URL, // Laravel側のローカルサーバー
    endpoints: {
      csrf: '/sanctum/csrf-cookie', // csrf-tokenをサーバーからGETするURL。Laravelの設定がデフォルトならこれ
      login: '/api/login',
      logout: '/api/logout',
      user: '/api/user',
    },
    csrf: {
      headerKey: 'X-XSRF-TOKEN',
      cookieKey: 'XSRF-TOKEN',
      tokenCookieKey: 'nuxt-sanctum-auth-token', // デフォルトならこのままでOK
    },
    redirects: {
      home: '/',
      login: '/login',
      logout: '/',
    },
  },
})
