<template>
  <section class="sign-form">
    <base-card class="sign-form__card">
      <p
        class="sign-form__error"
        v-if="!repeatPasswordCheck || signinError || signupError"
      >
        {{
          this.$props.errorMessage
            ? this.$props.errorMessage
            : "Something went wrong!"
        }}
      </p>
      <form class="sign-form__form" @submit.prevent="emitRegisterUser">
        <base-form-control v-if="mode === 'signup'">
          <label for="name" class="sign-form__label">Full Name</label>
          <input
            name="name"
            type="text"
            class="sign-form__input"
            v-model="fullName"
            required
          />
        </base-form-control>
        <base-form-control v-if="mode !== 'resetPassword'">
          <label for="email" class="sign-form__label">Email</label>
          <input
            name="email"
            type="email"
            class="sign-form__input"
            v-model="email"
            required
          />
        </base-form-control>
        <base-form-control v-if="mode !== 'forgot'">
          <label
            for="password"
            class="sign-form__label"
            :class="{ 'text-danger': !repeatPasswordCheck }"
            >Password</label
          >
          <input
            name="password"
            type="password"
            class="sign-form__input"
            v-model="password"
            required
            minlength="8"
          />
        </base-form-control>
        <base-form-control v-if="mode === 'signup' || mode === 'resetPassword'">
          <label
            for="repeatPassword"
            class="sign-form__label"
            :class="{ 'text-danger': !repeatPasswordCheck }"
            >Repeat Password</label
          >
          <input
            name="repeatPassword"
            type="password"
            class="sign-form__input"
            v-model="repeatPassword"
            required
            minlength="8"
          />
        </base-form-control>
        <base-button class="sign-form__button" v-if="mode === 'signup'"
          >Register</base-button
        >

        <base-button class="sign-form__button" v-else-if="mode === 'forgot'"
          >Send Email</base-button
        >
        <base-button
          class="sign-form__button"
          v-else-if="mode === 'resetPassword'"
          >Change Password</base-button
        >
        <base-button class="sign-form__button" v-else>Login</base-button>
      </form>
      <div
        class="sign-form__social-login"
        v-if="mode !== 'forgot' && mode !== 'resetPassword'"
      >
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
        <nuxt-link
          to="/support/forgotpassword"
          v-if="mode !== 'forgot' && mode !== 'resetPassword'"
          >Forgot Password?</nuxt-link
        >
        <nuxt-link to="faq">Need help?</nuxt-link>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  name: "SignForm",
  props: {
    mode: {},
    signinError: {
      type: Boolean
    },
    signupError: {
      type: Boolean
    },
    errorMessage: {
      type: String
    }
  },
  data() {
    return {
      fullName: undefined,
      email: undefined,
      password: undefined,
      repeatPassword: undefined,
      repeatPasswordCheck: true
    };
  },
  methods: {
    emitRegisterUser() {
      if (
        this.$props.mode === "signup" ||
        this.$props.mode === "resetPassword"
      ) {
        if (this.password === this.repeatPassword) {
          const data = {
            fullName: this.fullName,
            email: this.email,
            password: this.password,
            repeatPassword: this.repeatPassword
          };
          this.$emit("signAction", data);
        } else {
          this.repeatPasswordCheck = false;
        }
      } else {
        const data = {
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword
        };
        this.$emit("signAction", data);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-form {
  &__card {
    width: 20rem;
    margin: 1rem auto;
    padding: 1rem 2rem;
  }

  &__heading {
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
    font-size: 1rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }

  &__button {
    width: 100%;
    height: 1.6rem;
    margin-top: 0.2rem;
    color: white;
    background-color: var(--main-color);
    border: none;
    transition: 0.35s;

    &:hover {
      opacity: 0.9;
    }
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
    cursor: pointer;
    transition: 0.35s;

    &:hover {
      opacity: 0.9;
    }
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

  &__error {
    margin-bottom: 0.5rem;
    text-align: center;
    padding: 0.2rem;
    border-radius: 5px;
    color: white;
    background: red;
  }
}

@media (max-width: 450px) {
  .sign-form {
    &__card {
      width: 80%;
    }
  }
}
</style>
