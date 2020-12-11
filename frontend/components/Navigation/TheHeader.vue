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
        <nuxt-link to="/" class="header__logo"><h1>LocalShop</h1></nuxt-link>
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
            <nuxt-link to="/users/myprofile">Profile</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/products/addproduct">Add Product</nuxt-link>
          </li>
          <li class="header__item" @click="$auth.logout()">
            Logout
          </li>
        </ul>
        <TheSidenavToggle
          class="header__toggle"
          @toggle="$emit('sidenavToggle')"
        />
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
            required
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
      searchBy: undefined
    };
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
.header {
  &__row-1 {
    height: 3.5rem;
    padding: 0 2rem;
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

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__list {
    display: flex;

    &--col-3 {
      justify-self: flex-end;
    }
  }

  &__item {
    padding-top: 2px;
    margin-right: 0.75rem;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

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

  &__logo-link {
    height: 3.5rem;
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

@media (max-width: 768px) {
  .header {
    &__row-1 {
      border-bottom: 1px solid var(--main-color);
    }

    &__container {
      grid-template-columns: 1fr 1fr;
    }

    &__logo {
      justify-self: flex-start;
      text-align: left;
    }

    &__nav {
      display: none;
    }

    &__row-2 {
      display: none;
    }

    &__list {
      display: none;
    }
  }
}
</style>
