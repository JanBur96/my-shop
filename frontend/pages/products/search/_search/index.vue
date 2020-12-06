<template>
  <main>
    <BaseHeader heading="Searching" image="search-header.jpg" />
    <BaseList :products="products" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
      products: undefined
    };
  },
  created() {
    this.searchName = this.$route.params.search;
    console.log("hello", this.searchName);
  },
  async fetch() {
    const products = await this.$axios.get(
      `/products/search/${this.searchName}`
    );
    this.products = products.data.data;
  }
};
</script>

<style lang="scss" scoped></style>
