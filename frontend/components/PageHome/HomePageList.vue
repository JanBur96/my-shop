<template>
  <section class="homepage-list">
    <h3>Latest Products</h3>
    <ul class="homepage-list__list">
      <HomePageListItem
        v-for="product in products"
        :key="product.id"
        v-bind="{
          title: product.title,
          description: product.description,
          location: product.location,
          price: product.price,
          id: product._id,
          photo: product.photo
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
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.homepage-list {
  margin-top: 1rem;

  &__list {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 1rem;
  }
}
</style>
