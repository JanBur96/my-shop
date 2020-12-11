<template>
  <ul class="my-profile__list">
    <PageProfileProductsListItem
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :description="product.description"
      :id="product._id"
      :photo="product.photo"
    />
  </ul>
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
  &__list {
    max-height: 360px;
    margin-top: 0.5rem;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    overflow-y: auto;
  }
}
</style>
