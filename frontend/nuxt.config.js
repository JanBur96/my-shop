export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    [
      "nuxt-fontawesome",
      {
        component: "fa", //customize component name
        imports: [
          { set: "@fortawesome/free-brands-svg-icons", icons: ["faFacebook"] },
          { set: "@fortawesome/free-brands-svg-icons", icons: ["faTwitter"] },
          { set: "@fortawesome/free-brands-svg-icons", icons: ["faInstagram"] },
          { set: "@fortawesome/free-brands-svg-icons", icons: ["faGoogle"] },
          { set: "@fortawesome/free-regular-svg-icons", icons: ["faUser"] },
          { set: "@fortawesome/free-regular-svg-icons", icons: ["faEnvelope"] },
          { set: "@fortawesome/free-regular-svg-icons", icons: ["faCompass"] },
          { set: "@fortawesome/free-regular-svg-icons", icons: ["faEdit"] },
          { set: "@fortawesome/free-regular-svg-icons", icons: ["faTrashAlt"] },
          { set: "@fortawesome/free-solid-svg-icons", icons: ["faUserEdit"] },
          { set: "@fortawesome/free-solid-svg-icons", icons: ["faArrowRight"] },
          { set: "@fortawesome/free-solid-svg-icons", icons: ["faArrowLeft"] },
          { set: "@fortawesome/free-solid-svg-icons", icons: ["faSearch"] },
          { set: "@fortawesome/free-solid-svg-icons", icons: ["faGift"] },
          { set: "@fortawesome/free-solid-svg-icons", icons: ["faShare"] }
        ]
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "http://localhost:5000/api/v1"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth/login", method: "post", propertyName: "token" },
          logout: { url: "/auth/logout", method: "get" },
          user: { url: "/auth/me", method: "get", propertyName: false }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    }
  }
};
