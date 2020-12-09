<template>
  <section class="base-list">
    <h3 class="base-list__heading">{{ category }}</h3>
    <ul class="base-list__list">
      <BaseListItem
        v-for="product in products"
        :key="product._id"
        :title="product.title"
        :location="product.location"
        :price="product.price"
        :id="product._id"
        :photo="product.photo"
      />
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: false
    },
    products: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.base-list {
  &__heading {
    margin-top: 1rem;
    text-transform: capitalize;
  }

  &__list {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
  }
}
</style>
