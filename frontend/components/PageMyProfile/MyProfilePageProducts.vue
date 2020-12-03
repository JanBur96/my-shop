<template>
  <section class="my-profile__products">
    <h4 class="my-profile__heading">Your products</h4>
    <MyProfilePageProductsList :products="products" />
  </section>
</template>

<script>
export default {
  props: {
    products: {}
  }
};
</script>

<style lang="scss" scoped>
.my-profile {
  &__products {
    padding: 0.5rem;
  }

  &__heading {
    font-size: 1.25rem;
    border-bottom: 1px solid;
  }
}
</style>
