<template>
  <main class="support">
    <base-container>
      <BaseHeader image="support-header.jpg" heading="Support" />
      <PageSupportDetails />
      <h3 class="support__heading">Contact us:</h3>
      <ContactForm class="support__contact" @contactAction="contactSupport" />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "support",
  methods: {
    contactSupport() {
      console.log("Contacting the support.");
    }
  }
};
</script>

<style lang="scss" scoped>
.support {
  &__heading {
    margin-top: 2rem;
    text-align: center;
  }
}
</style>
