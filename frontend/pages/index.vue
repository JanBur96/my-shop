<template>
  <main class="main">
    <base-container>
      <BaseHeader image="home-header.jpg" heading="Welcome" />
      <HomePageList :products="products" />
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  async fetch() {
    const products = await this.$axios.get("/products");
    this.products = products.data.data;
  }
};
</script>

<style lang="scss" scoped></style>
