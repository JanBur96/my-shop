import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _622b119d = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _60fc8c5e = () => interopDefault(import('../pages/signin/index.vue' /* webpackChunkName: "pages/signin/index" */))
const _559edfc7 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _122645d4 = () => interopDefault(import('../pages/support/index.vue' /* webpackChunkName: "pages/support/index" */))
const _d6ec7500 = () => interopDefault(import('../pages/products/addproduct/index.vue' /* webpackChunkName: "pages/products/addproduct/index" */))
const _7c52a624 = () => interopDefault(import('../pages/products/categories/index.vue' /* webpackChunkName: "pages/products/categories/index" */))
const _64e57086 = () => interopDefault(import('../pages/users/myprofile/index.vue' /* webpackChunkName: "pages/users/myprofile/index" */))
const _8c021062 = () => interopDefault(import('../pages/products/categories/_categorie/index.vue' /* webpackChunkName: "pages/products/categories/_categorie/index" */))
const _63ecaa42 = () => interopDefault(import('../pages/products/editproduct/_update/index.vue' /* webpackChunkName: "pages/products/editproduct/_update/index" */))
const _0290689c = () => interopDefault(import('../pages/products/search/_search/index.vue' /* webpackChunkName: "pages/products/search/_search/index" */))
const _5b6b3342 = () => interopDefault(import('../pages/products/_product/index.vue' /* webpackChunkName: "pages/products/_product/index" */))
const _f5c65fac = () => interopDefault(import('../pages/users/_user/index.vue' /* webpackChunkName: "pages/users/_user/index" */))
const _0ca67b56 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/faq",
    component: _622b119d,
    name: "faq"
  }, {
    path: "/signin",
    component: _60fc8c5e,
    name: "signin"
  }, {
    path: "/signup",
    component: _559edfc7,
    name: "signup"
  }, {
    path: "/support",
    component: _122645d4,
    name: "support"
  }, {
    path: "/products/addproduct",
    component: _d6ec7500,
    name: "products-addproduct"
  }, {
    path: "/products/categories",
    component: _7c52a624,
    name: "products-categories"
  }, {
    path: "/users/myprofile",
    component: _64e57086,
    name: "users-myprofile"
  }, {
    path: "/products/categories/:categorie",
    component: _8c021062,
    name: "products-categories-categorie"
  }, {
    path: "/products/editproduct/:update",
    component: _63ecaa42,
    name: "products-editproduct-update"
  }, {
    path: "/products/search/:search",
    component: _0290689c,
    name: "products-search-search"
  }, {
    path: "/products/:product",
    component: _5b6b3342,
    name: "products-product"
  }, {
    path: "/users/:user",
    component: _f5c65fac,
    name: "users-user"
  }, {
    path: "/",
    component: _0ca67b56,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
