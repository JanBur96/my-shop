<template>
  <main class="about">
    <base-container>
      <BaseHeader image="about-header.jpg" heading="About" />
      <h3 class="about__heading">Who we are</h3>
      <p class="about__intro">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
        dignissimos ut, a corporis praesentium, natus fugiat asperiores saepe
        labore excepturi, illo nemo impedit iste? Porro pariatur facilis velit
        consequatur perspiciatis.
      </p>
      <PageAboutPersons />
    </base-container>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  &__heading {
    text-align: center;

    &--alt {
      margin-top: 2rem;
    }
  }

  &__intro {
    text-align: center;
    max-width: 50rem;
    margin: 0 auto;
  }
}
</style>
