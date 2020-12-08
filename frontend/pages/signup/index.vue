<template>
  <main class="main">
    <base-container>
      <BaseHeader image="signup-header.jpg" heading="Sign Up" />
      <h3 class="main__heading">Welcome to Name</h3>
      <SignForm mode="signup" @signAction="registerUser" />
    </base-container>
  </main>
</template>

<script>
export default {
  methods: {
    async registerUser(data) {
      await this.$axios.post("/auth/register", {
        name: data.fullName,
        email: data.email,
        password: data.password,
        role: "user"
      });
      this.$auth.loginWith("local", {
        data: {
          email: data.email,
          password: data.password
        }
      });
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
