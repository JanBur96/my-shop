<template>
  <main class="register">
    <base-container>
      <BaseHeader image="register-header.jpg" heading="Sign Up" />
      <h3 class="register__heading">Welcome to Localshop</h3>
      <AuthForm
        mode="[fullName, email, password, repeatPassword, socialLogin, forgotPassword, passwordCheck]"
        @signAction="registerUser"
        :error="error"
        :error-message="errorMessage"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      error: false,
      errorMessage: undefined
    };
  },
  methods: {
    async registerUser(data) {
      try {
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
      } catch (err) {
        console.error(err.response);
        this.error = true;
        this.errorMessage = err.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  &__heading {
    text-align: center;
  }
}
</style>
