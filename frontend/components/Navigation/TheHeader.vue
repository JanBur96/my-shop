<template>
  <header class="header">
    <div class="header__row-1">
      <base-container mode="base-container" class="header__container">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link to="/faq">FAQ</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link to="/support">Support</nuxt-link>
            </li>
          </ul>
        </nav>
        <nuxt-link to="/" class="header__link"
          ><img class="header__logo" src="~/assets/images/logo.svg" alt=""
        /></nuxt-link>
        <ul v-if="!$auth.loggedIn" class="header__list header__list--col-3">
          <li class="header__item">
            <nuxt-link to="/signin">Sign In</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </li>
        </ul>
        <ul v-if="$auth.loggedIn" class="header__list header__list--col-3">
          <li class="header__item">
            <nuxt-link to="/users/myprofile">My Profile</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/products/addproduct">Add Product</nuxt-link>
          </li>
          <li class="header__item" @click="$auth.logout()">
            Logout
          </li>
        </ul>
      </base-container>
    </div>
    <div class="header__row-2">
      <base-container mode="base-container-flex">
        <ul class="header__list">
          <li class="header__item header__item--alt">
            <nuxt-link to="/products/categories">Categories</nuxt-link>
          </li>
          <li class="header__item header__item--alt">
            <nuxt-link to="/products/categories/technology"
              >Technology</nuxt-link
            >
          </li>
          <li class="header__item header__item--alt">
            <nuxt-link to="/products/categories/furniture">Furniture</nuxt-link>
          </li>
          <li class="header__item header__item--alt">
            <nuxt-link to="/products/categories/clothes">Clothes</nuxt-link>
          </li>
          <li class="header__item header__item--alt">
            <nuxt-link to="/products/categories/misc">Misc.</nuxt-link>
          </li>
        </ul>
        <div class="header__search">
          <input
            type="text"
            placeholder="Search"
            class="header__input"
            @keyup.enter="search"
            v-model="searchBy"
          />
          <fa
            class="header__search-icon"
            :icon="['fas', 'search']"
            @click="search"
          />
        </div>
      </base-container>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isAuth: false,
      searchBy: ""
    };
  },
  methods: {
    search() {
      this.$router.push(`/products/search/${this.searchBy}`);
      this.searchBy = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  &__row-1 {
    height: 3.5rem;
    padding: 0 2rem;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__link {
    height: 3.5rem;
  }

  &__row-2 {
    height: 2.5rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: var(--main-color);
  }

  &__list {
    display: flex;

    &--col-3 {
      justify-self: flex-end;
    }
  }

  &__item {
    padding-top: 2px;
    margin-right: 1rem;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: rgba($color: #000000, $alpha: 0.2);
      transition: width 0.35s;
    }

    &:hover::after {
      width: 100%;
      transition: width 0.35s;
    }

    &:last-child {
      margin-right: 0;
    }

    &--alt {
      &::after {
        background: rgba($color: white, $alpha: 0.8);
      }
    }
  }

  &__logo {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }

  &__search {
    position: relative;
  }

  &__input {
    width: 12rem;
    height: 1.6rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }

  &__search-icon {
    position: absolute;
    right: 10px;
    top: 5px;
    color: var(--main-color);
    cursor: pointer;
  }
}
</style>
