<template>
  <main class="search">
    <base-container>
      <BaseHeader heading="Searching" image="search-header.jpg" />
      <h3 class="search__heading">Your results</h3>
      <BaseList :products="products" />
    </base-container>
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    let products = await $axios.get(`/products/search/${params.search}`);
    products = products.data.data;
    console.log(products);

    return { products };
  }
};
</script>

<style lang="scss" scoped></style>
