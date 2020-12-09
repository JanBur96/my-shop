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
}
</style>
