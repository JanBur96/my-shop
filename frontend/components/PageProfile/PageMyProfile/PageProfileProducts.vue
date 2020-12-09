<template>
  <section class="my-profile__products">
    <h4 v-if="mode === 'editable'" class="my-profile__heading">
      Your products
    </h4>
    <h4 v-else class="my-profile__heading">Products</h4>
    <PageProfileProductsList :products="products" />
  </section>
</template>

<script>
export default {
  props: {
    products: {},
    mode: {}
  },
  mounted() {
    let test = this.$props.products.sort(function compare(a, b) {
      let dateA = new Date(a.createdAt);
      let dateB = new Date(b.createdAt);

      return dateB - dateA;
    });
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
