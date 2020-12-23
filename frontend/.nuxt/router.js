import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ea38904 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _458c31e0 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _6c8d45e2 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _2e087874 = () => interopDefault(import('../pages/support/index.vue' /* webpackChunkName: "pages/support/index" */))
const _d8f7b7a0 = () => interopDefault(import('../pages/products/addproduct/index.vue' /* webpackChunkName: "pages/products/addproduct/index" */))
const _7e5de8c4 = () => interopDefault(import('../pages/products/categories/index.vue' /* webpackChunkName: "pages/products/categories/index" */))
const _eaec5106 = () => interopDefault(import('../pages/support/forgotpassword/index.vue' /* webpackChunkName: "pages/support/forgotpassword/index" */))
const _3c627e6d = () => interopDefault(import('../pages/users/myprofile/index.vue' /* webpackChunkName: "pages/users/myprofile/index" */))
const _00c0e9c2 = () => interopDefault(import('../pages/products/categories/_categorie/index.vue' /* webpackChunkName: "pages/products/categories/_categorie/index" */))
const _ef8c5cdc = () => interopDefault(import('../pages/products/editproduct/_update/index.vue' /* webpackChunkName: "pages/products/editproduct/_update/index" */))
const _27035262 = () => interopDefault(import('../pages/products/search/_search/index.vue' /* webpackChunkName: "pages/products/search/_search/index" */))
const _69cd7df2 = () => interopDefault(import('../pages/products/_product/index.vue' /* webpackChunkName: "pages/products/_product/index" */))
const _3b22636a = () => interopDefault(import('../pages/support/_resetpassword/index.vue' /* webpackChunkName: "pages/support/_resetpassword/index" */))
const _72f8deda = () => interopDefault(import('../pages/users/_user/index.vue' /* webpackChunkName: "pages/users/_user/index" */))
const _20c9b6c3 = () => interopDefault(import('../pages/products/_product/contact/index.vue' /* webpackChunkName: "pages/products/_product/contact/index" */))
const _6e9f1206 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3ea38904,
    name: "about"
  }, {
    path: "/login",
    component: _458c31e0,
    name: "login"
  }, {
    path: "/register",
    component: _6c8d45e2,
    name: "register"
  }, {
    path: "/support",
    component: _2e087874,
    name: "support"
  }, {
    path: "/products/addproduct",
    component: _d8f7b7a0,
    name: "products-addproduct"
  }, {
    path: "/products/categories",
    component: _7e5de8c4,
    name: "products-categories"
  }, {
    path: "/support/forgotpassword",
    component: _eaec5106,
    name: "support-forgotpassword"
  }, {
    path: "/users/myprofile",
    component: _3c627e6d,
    name: "users-myprofile"
  }, {
    path: "/products/categories/:categorie",
    component: _00c0e9c2,
    name: "products-categories-categorie"
  }, {
    path: "/products/editproduct/:update",
    component: _ef8c5cdc,
    name: "products-editproduct-update"
  }, {
    path: "/products/search/:search",
    component: _27035262,
    name: "products-search-search"
  }, {
    path: "/products/:product",
    component: _69cd7df2,
    name: "products-product"
  }, {
    path: "/support/:resetpassword",
    component: _3b22636a,
    name: "support-resetpassword"
  }, {
    path: "/users/:user",
    component: _72f8deda,
    name: "users-user"
  }, {
    path: "/products/:product?/contact",
    component: _20c9b6c3,
    name: "products-product-contact"
  }, {
    path: "/",
    component: _6e9f1206,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
