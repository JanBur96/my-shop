<template>
  <main class="main">
    <base-container>
      <BaseHeader image="signin-header.jpg" heading="Sign In" />
      <h3 class="main__heading">Welcome back</h3>
      <base-card class="main__card">
        <form action="" class="main__form" @submit.prevent="submitLogin">
          <base-form-control>
            <label for="" class="main__label">Email</label>
            <input class="main__input" type="text" v-model="email" />
          </base-form-control>
          <base-form-control>
            <label for="" class="main__label">Password</label>
            <input class="main__input" type="text" v-model="password" />
          </base-form-control>
          <base-button class="main__button">Login</base-button>
        </form>
        <div class="main__social-login">
          <p>or</p>
          <ul class="main__list">
            <li class="main__item">
              <fa class="main__icon" :icon="['fab', 'facebook']" />
            </li>
            <li class="main__item">
              <fa class="main__icon" :icon="['fab', 'google']" />
            </li>
          </ul>
        </div>
        <div class="main__support">
          <nuxt-link to="forgotpassword">Forgot Password?</nuxt-link>
          <nuxt-link to="faq">Need help?</nuxt-link>
        </div>
      </base-card>
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitLogin() {
      this.$auth.loginWith("local", {
        data: {
          email: this.email,
          password: this.password
        }
      });
      alert("Login!");
      console.log(this.$auth);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 43rem;

  &__heading {
    margin-top: 1rem;
    text-align: center;
  }

  &__card {
    width: 20rem;
    margin: 0 auto;
    margin-top: 1.5rem;
    padding: 1rem 2rem;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__input {
    width: 100%;
    margin-top: 0.2rem;
    height: 1.6rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }

  &__button {
    width: 100%;
    height: 1.6rem;
  }

  &__social-login {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__list {
    margin-top: 0.5rem;
    display: flex;
  }

  &__item {
    margin: 0 1rem;
  }

  &__icon {
    font-size: 1.8rem;
    color: var(--main-color);
  }

  &__support {
    margin-top: 1rem;
    padding-top: 0.2rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba($color: #000000, $alpha: 0.2);
  }
}
</style>
