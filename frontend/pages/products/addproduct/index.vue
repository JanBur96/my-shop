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
  middleware: "auth",
  name: "AddProduct",
  methods: {
    async addProduct(data) {
      const num = Number(data.price);
      const roundedString = num.toFixed(2);
      const rounded = Number(roundedString);

      await this.$axios.post(
        "/products",
        {
          categories: data.categories,
          title: data.title,
          description: data.description,
          location: data.location,
          price: rounded
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
