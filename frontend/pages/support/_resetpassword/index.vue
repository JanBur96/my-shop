<template>
  <main class="reset-password">
    <base-container>
      <BaseHeader heading="Reset Password" image="forgotpassword-header.jpg" />
      <h3 class="reset-password__heading">Reset your password</h3>
      <AuthForm
        mode="[password, repeatPassword, passwordCheck]"
        @signAction="resetPassword"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  methods: {
    async resetPassword(data) {
      await this.$axios.put(
        `/auth/resetpassword/${this.$route.params.resetpassword}`,
        {
          password: data.password
        }
      );
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.reset-password {
  &__heading {
    text-align: center;
  }
}
</style>
