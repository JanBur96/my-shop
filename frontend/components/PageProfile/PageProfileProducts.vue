<template>
  <section class="profile__products">
    <h4 v-if="mode === 'editable'" class="profile__heading">
      Your products
    </h4>
    <h4 v-else class="profile__heading">Products</h4>
    <PageProfileProductsList :products="products" />
  </section>
</template>

<script>
export default {
  name: "ProfileProducts",
  props: {
    products: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    mode: {
      type: String
    }
  },
  mounted() {
    let sortProducts = this.$props.products.sort(function compare(a, b) {
      let dateA = new Date(a.createdAt);
      let dateB = new Date(b.createdAt);

      return dateB - dateA;
    });
  }
};
</script>

<style lang="scss" scoped>
.profile {
  &__products {
    padding: 0.5rem;
  }

  &__heading {
    font-size: 1.25rem;
    border-bottom: 1px solid;
  }
}
</style>
