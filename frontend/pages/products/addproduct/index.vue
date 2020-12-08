<template>
  <main class="add-product">
    <BaseHeader image="addproduct-header.jpg" heading="Add Product" />
    <h3 class="add-product__heading">Add a new product</h3>
    <ProductForm @productAction="addProduct" mode="addProduct" />
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
        console.log(data),
        this.$router.push("/")
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.add-product {
  &__heading {
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
