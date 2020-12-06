import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eee92346 = () => interopDefault(import('../pages/addproduct/index.vue' /* webpackChunkName: "pages/addproduct/index" */))
const _944f546a = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _a56ab362 = () => interopDefault(import('../pages/clothes/index.vue' /* webpackChunkName: "pages/clothes/index" */))
const _622b119d = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _4cc09a79 = () => interopDefault(import('../pages/furniture/index.vue' /* webpackChunkName: "pages/furniture/index" */))
const _51a92f9b = () => interopDefault(import('../pages/misc/index.vue' /* webpackChunkName: "pages/misc/index" */))
const _4859d344 = () => interopDefault(import('../pages/myprofile/index.vue' /* webpackChunkName: "pages/myprofile/index" */))
const _265187da = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _2b676057 = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _60fc8c5e = () => interopDefault(import('../pages/signin/index.vue' /* webpackChunkName: "pages/signin/index" */))
const _559edfc7 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _122645d4 = () => interopDefault(import('../pages/support/index.vue' /* webpackChunkName: "pages/support/index" */))
const _362aa8bb = () => interopDefault(import('../pages/technology/index.vue' /* webpackChunkName: "pages/technology/index" */))
const _3415044e = () => interopDefault(import('../pages/myprofile/UpdateDetails/index.vue' /* webpackChunkName: "pages/myprofile/UpdateDetails/index" */))
const _481cc0fa = () => interopDefault(import('../pages/products/search/index.vue' /* webpackChunkName: "pages/products/search/index" */))
const _0da9e4ec = () => interopDefault(import('../pages/users/indes.vue' /* webpackChunkName: "pages/users/indes" */))
const _0290689c = () => interopDefault(import('../pages/products/search/_search/index.vue' /* webpackChunkName: "pages/products/search/_search/index" */))
const _bb3577f0 = () => interopDefault(import('../pages/myprofile/_UpdateProduct/index.vue' /* webpackChunkName: "pages/myprofile/_UpdateProduct/index" */))
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
    path: "/addproduct",
    component: _eee92346,
    name: "addproduct"
  }, {
    path: "/categories",
    component: _944f546a,
    name: "categories"
  }, {
    path: "/clothes",
    component: _a56ab362,
    name: "clothes"
  }, {
    path: "/faq",
    component: _622b119d,
    name: "faq"
  }, {
    path: "/furniture",
    component: _4cc09a79,
    name: "furniture"
  }, {
    path: "/misc",
    component: _51a92f9b,
    name: "misc"
  }, {
    path: "/myprofile",
    component: _4859d344,
    name: "myprofile"
  }, {
    path: "/products",
    component: _265187da,
    name: "products"
  }, {
    path: "/search",
    component: _2b676057,
    name: "search"
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
    path: "/technology",
    component: _362aa8bb,
    name: "technology"
  }, {
    path: "/myprofile/UpdateDetails",
    component: _3415044e,
    name: "myprofile-UpdateDetails"
  }, {
    path: "/products/search",
    component: _481cc0fa,
    name: "products-search"
  }, {
    path: "/users/indes",
    component: _0da9e4ec,
    name: "users-indes"
  }, {
    path: "/products/search/:search",
    component: _0290689c,
    name: "products-search-search"
  }, {
    path: "/myprofile/:UpdateProduct",
    component: _bb3577f0,
    name: "myprofile-UpdateProduct"
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
