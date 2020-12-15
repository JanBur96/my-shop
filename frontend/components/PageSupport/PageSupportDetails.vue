<template>
  <div class="questions">
    <h3>We're happy to help you!</h3>
    <details class="questions__details">
      <summary class="questions__summary"
        >I have a problem, can you help me?</summary
      >
      Sure! Just use the form
      <a class="questions__link" href="#contact">below</a> to contact us.
    </details>
    <details class="questions__details">
      <summary class="questions__summary"
        >I've forgot my password, what should I do now?</summary
      >
      Go to
      <nuxt-link class="questions__link" to="/support/forgotpassword"
        >this link</nuxt-link
      >
      and type in your Email! You will get a link via email which leads you to a
      page, where you can reset your password.
    </details>
    <details class="questions__details">
      <summary class="questions__summary"
        >I've found a problem/something isn't working, can you help me
        please?</summary
      >
      Sure! Please tell us your problem in the
      <a class="questions__link" href="#contact"> contact form</a>. Choose
      "Problem/Bug" and tell us what's wrong.
    </details>
    <details class="questions__details">
      <summary class="questions__summary">How can I delete my account?</summary>
      You can use our
      <a class="questions__link" href="#contact"> contact form</a>. Just choose
      "Delete Account" an your account will get deleted as soon as possible.
    </details>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.questions {
  &__details {
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem 0;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 4px;
    background-color: white;
    color: black;
  }

  &__summary {
    margin: -0.5rem;
    padding: 0.5rem;
    color: white;
    background-color: var(--main-color);
    font-weight: bold;
    cursor: pointer;
  }

  &__details[open] {
    padding: 0.5rem;

    summary {
      margin-bottom: 0.5rem;
      border-bottom: 1px solid #aaa;
    }
  }

  &__link {
    color: var(--main-color);
    text-decoration: underline;
  }
}
</style>
