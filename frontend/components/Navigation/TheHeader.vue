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
        <h1 class="header__logo">Logo</h1>
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
            <nuxt-link to="/myprofile">My Profile</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/addproduct">Add Product</nuxt-link>
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
          <li class="header__item">
            <nuxt-link to="/categories">Categories</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/technology">Technology</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/furniture">Furniture</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/clothes">Clothes</nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/misc">Misc.</nuxt-link>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Search"
          class="header__input"
          @keyup.enter="search"
          v-model="searchBy"
        />
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__row-2 {
    height: 2.5rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: var(--main-color);
  }

  &__list {
    display: flex;

    &--col-3 {
      justify-self: flex-end;
    }
  }

  &__item {
    margin-right: 1rem;
    cursor: pointer;
  }

  &__input {
    width: 12rem;
    height: 1.6rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }
}
</style>
