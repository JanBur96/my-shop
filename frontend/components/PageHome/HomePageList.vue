<template>
  <section class="latest-products">
    <h3>Latest Products</h3>
    <ul class="latest-products__list">
      <HomePageListItem
        v-for="product in products"
        :key="product.id"
        v-bind="{
          title: product.title,
          description: product.description,
          location: product.location,
          price: product.price
        }"
      />
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.latest-products {
  margin-top: 1rem;

  &__list {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
  }
}
</style>
