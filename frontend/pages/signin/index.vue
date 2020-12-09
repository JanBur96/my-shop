<template>
  <main class="main">
    <base-container>
      <BaseHeader image="signin-header.jpg" heading="Sign In" />
      <h3 class="main__heading">Welcome back</h3>
      <SignForm mode="signin" @signAction="loginUser" />
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser(data) {
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
