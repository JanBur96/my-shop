<template>
  <main class="login">
    <base-container>
      <BaseHeader image="login-header.jpg" heading="Sign In" />
      <h3 class="login__heading">Welcome back</h3>
      <AuthForm
        mode="[email, password, socialLogin, forgotPassword]"
        @signAction="loginUser"
        :error="error"
        :error-message="errorMessage"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: undefined,
      password: undefined,
      errorMessage: undefined,
      error: false
    };
  },
  methods: {
    async loginUser(data) {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: data.email,
            password: data.password
          }
        });
      } catch (err) {
        this.error = true;
        this.errorMessage = err.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  &__heading {
    text-align: center;
  }
}
</style>
