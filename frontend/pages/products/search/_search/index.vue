<template>
  <main class="search">
    <BaseHeader heading="Searching" image="search-header.jpg" />
    <h3 class="search__heading">Your results</h3>
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

<style lang="scss" scoped>
.search {
  &__heading {
    margin-top: 1rem;
  }
}
</style>
