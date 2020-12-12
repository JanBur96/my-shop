<template>
  <main class="signin">
    <base-container>
      <BaseHeader image="signin-header.jpg" heading="Sign In" />
      <h3 class="signin__heading">Welcome back</h3>
      <SignForm
        mode="signin"
        @signAction="loginUser"
        :signin-error="signinError"
        :error-message="errorMessage"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: undefined,
      password: undefined,
      errorMessage: undefined,
      signinError: false
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
        this.signinError = true;
        this.errorMessage = err.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.signin {
  &__heading {
    text-align: center;
  }
}
</style>
