<template>
  <main class="add-product">
    <base-container>
      <BaseHeader image="addproduct-header.jpg" heading="Add Product" />
      <h3 class="add-product__heading">Add a new product</h3>
      <ProductForm @productAction="addProduct" mode="addProduct" />
    </base-container>
  </main>
</template>

<script>
export default {
  methods: {
    async addProduct(data) {
      await this.$axios.post(
        "/products",
        {
          categories: data.categories,
          title: data.title,
          description: data.description,
          location: data.location,
          price: data.price
        },
        this.$router.push("/")
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.add-product {
  &__heading {
    text-align: center;
  }
}
</style>
