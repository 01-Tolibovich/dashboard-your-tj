let baseUrl = 'http://api.your.colibri.tj/api/'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dashboard-your-tj",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios.js', ],
  baseURL: `${baseUrl}`,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Manrope: [200, 300, 400, 500, 600, 700, 800],
    },
  },

  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],


//   Этот скрипт устанавливает конфигурацию для модулей Axios, auth и router в приложении Nuxt.js. Ниже приводится подробное объяснение скрипта:

// 1. axios: { ... }: Этот объект устанавливает конфигурацию для модуля Axios в приложении. Он устанавливает baseUrl на конечную точку API, а заголовок "Content-Type" на "application/json".

// 2. auth: { ... }: Этот объект устанавливает конфигурацию для модуля auth в приложении. Он устанавливает свойство watchLoggedIn в true, что означает, что свойство loggedIn будет отслеживаться и обновляться автоматически. Он также устанавливает свойство resetOnError в true, что означает, что модуль auth будет очищать состояние аутентификации, если во время запроса произойдет ошибка.

// 3. стратегии: { ... }: Этот объект определяет стратегии аутентификации, которые могут быть использованы модулем auth. В данном случае существует только одна стратегия под названием "local", которая используется для аутентификации с локальным API.

// 4. endpoints: { ... }: Этот объект определяет конечные точки API для стратегии "local". Он устанавливает свойство url для конечных точек login, logout и user в соответствующие конечные точки API.

// 5. router: { ... }: Этот объект задает конфигурацию модуля маршрутизатора в приложении. Он устанавливает свойство middleware в ["auth"], что означает, что auth middleware будет использоваться для всех маршрутов в приложении.

// 6. В целом, этот сценарий устанавливает конфигурацию для модулей Axios, auth и router в приложении Nuxt.js. Он устанавливает конечную точку API и заголовки для Axios, а также определяет стратегию аутентификации и конечные точки для модуля auth. Наконец, он устанавливает промежуточное ПО auth для всех маршрутов в приложении с помощью модуля router.
auth: {
  axios: {
    // credentials: true,
    baseUrl: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  },

    watchLoggedIn: true,
    resetOnError: true,
    strategies: {
      local: {
        url: baseUrl,
        token: {
          property: "data.token",
          maxAge: false,
          global: true,
        },
        user: {
          property: "user",
          autoFetch: true
        },
        endpoints: {
          login: {
            url: `${baseUrl}auth/login`,
          },
          logout: {
            url: `${baseUrl}auth/logout`,
          },
          user: {
            url: `${baseUrl}user`,
          },
        },
        autoFetchUser: true
      },
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/",
    },
  },
  router: {
    middleware: ["auth"],
  },

  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
