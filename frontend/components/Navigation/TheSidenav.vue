<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-container__backdrop"
      @click="$emit('close')"
    ></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav-container__sidenav">
        <h1 class="sidenav-container__heading-1">LocalShop</h1>
        <div class="sidenav-container__search">
          <input
            type="text"
            placeholder="Search"
            class="sidenav-container__input"
            @keyup.enter="search"
            v-model="searchBy"
            required
          />
          <fa
            class="sidenav-container__search-icon"
            :icon="['fas', 'search']"
            @click="search"
          />
        </div>
        <ul
          v-if="!$auth.loggedIn"
          class="sidenav-container__list"
          @click="$emit('close')"
        >
          <li class="sidenav-container__item">
            <nuxt-link to="/signin">Sign In</nuxt-link>
          </li>
          <li class="sidenav-container__item">
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </li>
        </ul>
        <ul
          v-if="$auth.loggedIn"
          class="sidenav-container__list"
          @click="$emit('close')"
        >
          <li class="sidenav-container__item">
            <nuxt-link to="/users/myprofile">My Profile</nuxt-link>
          </li>
          <li class="sidenav-container__item">
            <nuxt-link to="/products/addproduct">Add Product</nuxt-link>
          </li>
          <li class="sidenav-container__item" @click="$auth.logout()">
            Logout
          </li>
        </ul>
        <div class="sidenav-container__row-2">
          <base-container mode="base-container-flex">
            <ul class="sidenav-container__list--alt">
              <li class="sidenav-container__item sidenav-container__item--alt">
                <nuxt-link to="/products/categories">Categories</nuxt-link>
              </li>
              <li class="sidenav-container__item sidenav-container__item--alt">
                <nuxt-link to="/products/categories/technology"
                  >Technology</nuxt-link
                >
              </li>
              <li class="sidenav-container__item sidenav-container__item--alt">
                <nuxt-link to="/products/categories/furniture"
                  >Furniture</nuxt-link
                >
              </li>
              <li class="sidenav-container__item sidenav-container__item--alt">
                <nuxt-link to="/products/categories/clothes">Clothes</nuxt-link>
              </li>
              <li class="sidenav-container__item sidenav-container__item--alt">
                <nuxt-link to="/products/categories/misc">Misc.</nuxt-link>
              </li>
            </ul>
          </base-container>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TheSidenav",
  data() {
    return {
      searchBy: undefined
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    search() {
      if (this.searchBy) {
        this.$router.push(`/products/search/${this.searchBy}`);
        this.searchBy = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;

  &__backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }

  &__sidenav {
    height: 100%;
    width: 20rem;
    background-color: var(--main-color);
    color: white;
    z-index: 10000;
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 5px 0 0 5px;
  }

  &__heading-1 {
    color: white;
    border-bottom: 1px solid white;
  }

  &__search {
    position: relative;
  }

  &__input {
    margin-top: 0.5rem;
    width: 100%;
    height: 1.6rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }

  &__search-icon {
    position: absolute;
    right: 1.2rem;
    top: 0.8rem;
    color: var(--main-color);
    cursor: pointer;
  }

  &__list {
    margin-top: 0.5rem;
  }

  &__item {
    margin-top: 0.2rem;
  }
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.35s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}
</style>
