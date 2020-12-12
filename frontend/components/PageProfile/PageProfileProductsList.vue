<template>
  <ul class="profile-list">
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
  name: "ProfileProductsList",
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
.profile-list {
  max-height: 23rem;
  margin-top: 0.5rem;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  overflow-y: auto;
}

@media (max-width: 450px) {
  .my-profile {
    &__list {
      max-height: 28rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--main-color);
    }
  }
}
</style>
