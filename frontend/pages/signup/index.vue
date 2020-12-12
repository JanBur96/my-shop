<template>
  <main class="signup">
    <base-container>
      <BaseHeader image="signup-header.jpg" heading="Sign Up" />
      <h3 class="signup__heading">Welcome to Localshop</h3>
      <SignForm
        mode="signup"
        @signAction="registerUser"
        :signup-error="signupError"
        :error-message="errorMessage"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      signupError: false,
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
        console.log(err.response);
        this.signupError = true;
        this.errorMessage = err.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.signup {
  &__heading {
    text-align: center;
  }
}
</style>
