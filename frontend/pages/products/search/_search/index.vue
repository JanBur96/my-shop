<template>
  <main class="search">
    <base-container>
      <BaseHeader heading="Searching" image="search-header.jpg" />
      <h3 class="search__heading">Your results</h3>
      <BaseList
        :class="products.length < 5 ? 'search__list-alt' : ''"
        :products="products"
        mode="sort"
        :modeList="products.length < 5 ? 'searchList' : undefined"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "Search",
  async asyncData({ params, $axios }) {
    let products = await $axios.get(`/products/search/${params.search}`);
    products = products.data.data;

    return { products };
  }
};
</script>

<style lang="scss" scoped>
.search {
  &__list-alt {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
}
</style>
