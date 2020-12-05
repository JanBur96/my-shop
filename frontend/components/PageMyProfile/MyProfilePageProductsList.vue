<template>
  <ul class="my-profile__list">
    <MyProfilePageProductsListItem
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="product.image"
      :price="product.price"
      :description="product.description"
      :id="product._id"
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
    margin-top: 0.5rem;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    overflow-y: auto;
    max-height: 360px;
  }
}
</style>
