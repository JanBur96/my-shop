<template>
  <main class="main">
    <base-container>
      <BaseHeader image="signup-header.jpg" heading="Sign Up" />
      <h3 class="main__heading">Welcome to Name</h3>
      <base-card class="main__card">
        <form action="" class="main__form" @submit.prevent="registerUser">
          <base-form-control>
            <label for="" class="main__label">Full Name</label>
            <input type="text" class="main__input" v-model="fullName" />
          </base-form-control>
          <base-form-control>
            <label for="" class="main__label">Email</label>
            <input type="text" class="main__input" v-model="email" />
          </base-form-control>
          <base-form-control>
            <label for="" class="main__label">Password</label>
            <input type="text" class="main__input" v-model="password" />
          </base-form-control>
          <base-form-control>
            <label for="" class="main__label">Repeat Password</label>
            <input type="text" class="main__input" v-model="repeatPassword" />
          </base-form-control>
          <base-button class="main__button">Register</base-button>
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
      fullName: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  methods: {
    async registerUser() {
      await this.$axios.post("/auth/register", {
        name: this.fullName,
        email: this.email,
        password: this.password,
        role: "user"
      });
      this.$auth.loginWith("local", {
        data: {
          email: this.email,
          password: this.password
        }
      });
      alert("Register^^");
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  &__heading {
    margin-top: 1rem;
    text-align: center;
  }

  &__card {
    width: 20rem;
    margin: 1.5rem auto 1.5rem auto;
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
