// For everything Auth related (Login, Register, Forgot PW, Reset PW...)

<template>
  <section class="auth">
    <base-card class="auth__card">
      <p class="auth__error" v-if="!repeatPasswordCheck || error">
        {{
          this.$props.errorMessage
            ? this.$props.errorMessage
            : "Something went wrong!"
        }}
      </p>
      <form class="auth__form" @submit.prevent="emitRegisterUser">
        <base-form-control v-if="mode.includes('fullName')">
          <label for="name" class="auth__label">Full Name</label>
          <input
            name="name"
            type="text"
            class="auth__input"
            v-model="fullName"
            required
          />
        </base-form-control>
        <base-form-control v-if="mode.includes('email')">
          <label for="email" class="auth__label">Email</label>
          <input
            name="email"
            type="email"
            class="auth__input"
            v-model="email"
            required
          />
        </base-form-control>
        <base-form-control v-if="mode.includes('password')">
          <label
            for="password"
            class="auth__label"
            :class="{ 'text-danger': !repeatPasswordCheck }"
            >Password</label
          >
          <input
            name="password"
            type="password"
            class="auth__input"
            v-model="password"
            required
            minlength="8"
          />
        </base-form-control>
        <base-form-control v-if="mode.includes('repeatPassword')">
          <label
            for="repeatPassword"
            class="auth__label"
            :class="{ 'text-danger': !repeatPasswordCheck }"
            >Repeat Password</label
          >
          <input
            name="repeatPassword"
            type="password"
            class="auth__input"
            v-model="repeatPassword"
            required
            minlength="8"
          />
        </base-form-control>
        <base-button class="auth__button">Submit</base-button>
      </form>
      <div class="auth__social-login" v-if="mode.includes('socialLogin')">
        <p>or</p>
        <ul class="auth__list">
          <li class="auth__item">
            <fa class="auth__icon" :icon="['fab', 'facebook']" />
          </li>
          <li class="auth__item">
            <fa class="auth__icon" :icon="['fab', 'google']" />
          </li>
        </ul>
      </div>
      <div class="auth__support">
        <nuxt-link
          to="/support/forgotpassword"
          v-if="mode.includes('forgotPassword')"
          >Forgot Password?</nuxt-link
        >
        <nuxt-link to="faq">Need help?</nuxt-link>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    mode: {},
    error: {
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
      if (this.$props.mode.includes("passwordCheck")) {
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
.auth {
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

  &__label {
    text-align: left;
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
  .auth {
    &__card {
      width: 80%;
    }
  }
}
</style>
