<template>
  <main class="forgot-password">
    <base-container>
      <BaseHeader image="forgotpassword-header.jpg" heading="Forgot Password" />
      <h3 class="forgot-password__heading">Forgot Passowrd</h3>
      <SignForm mode="forgot" @signAction="forgotPassword" v-if="!sendEmail" />
      <p class="forgot-password__paragraph" v-if="sendEmail">
        We've sent you an email! Please look follow the instructions in the
        email to reset your password.
      </p>
      <base-button class="forgot-password__button" v-if="sendEmail"
        ><nuxt-link to="/signin">Back to Sign In</nuxt-link></base-button
      >
    </base-container>
  </main>
</template>

<script>
import BaseButton from "../../../components/UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      sendEmail: false
    };
  },
  methods: {
    async forgotPassword(data) {
      try {
        await this.$axios.post("/auth/forgotpassword", {
          email: data.email
        });
        this.sendEmail = true;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.forgot-password {
  text-align: center;

  &__paragraph {
    font-size: 1.5rem;
  }

  &__button {
    width: 10rem;
    height: 1.6rem;
    margin-top: 1rem;
    background-color: var(--main-color);
    color: white;
    border: none;
  }
}
</style>
