<template>
  <base-card class="sign-form">
    <form action="" class="sign-form__form" @submit.prevent="emitRegisterUser">
      <base-form-control v-if="mode === 'signup'">
        <label for="" class="sign-form__label">Full Name</label>
        <input type="text" class="sign-form__input" v-model="fullName" />
      </base-form-control>
      <base-form-control>
        <label for="" class="sign-form__label">Email</label>
        <input type="text" class="sign-form__input" v-model="email" />
      </base-form-control>
      <base-form-control>
        <label for="" class="sign-form__label">Password</label>
        <input type="text" class="sign-form__input" v-model="password" />
      </base-form-control>
      <base-form-control v-if="mode === 'signup'">
        <label for="" class="sign-form__label">Repeat Password</label>
        <input type="text" class="sign-form__input" v-model="repeatPassword" />
      </base-form-control>
      <base-button class="sign-form__button" v-if="mode === 'signup'"
        >Register</base-button
      >
      <base-button class="sign-form__button" v-else>Login</base-button>
    </form>
    <div class="sign-form__social-login">
      <p>or</p>
      <ul class="sign-form__list">
        <li class="sign-form__item">
          <fa class="sign-form__icon" :icon="['fab', 'facebook']" />
        </li>
        <li class="sign-form__item">
          <fa class="sign-form__icon" :icon="['fab', 'google']" />
        </li>
      </ul>
    </div>
    <div class="sign-form__support">
      <nuxt-link to="forgotpassword">Forgot Password?</nuxt-link>
      <nuxt-link to="faq">Need help?</nuxt-link>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    mode: {}
  },
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  methods: {
    emitRegisterUser() {
      const data = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        repeatPassword: this.repeatPassword
      };
      this.$emit("signAction", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-form {
  width: 20rem;
  margin: 1.5rem auto 1.5rem auto;
  padding: 1rem 2rem;

  &__heading {
    margin-top: 1rem;
    text-align: center;
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
    height: 1.6rem;
    margin-top: 0.2rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }

  &__button {
    width: 100%;
    height: 1.6rem;
    color: white;
    background-color: var(--main-color);
    border: none;
  }

  &__social-login {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    font-size: 1.8rem;
    color: var(--main-color);
  }

  &__list {
    margin-top: 0.5rem;
    display: flex;
  }

  &__item {
    margin: 0 1rem;
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
