<template>
  <main>
    <BaseHeader image="overview-clothes.jpg" heading="Clothes" />
    <BaseList category="Clothes" :products="clothesProducts" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      clothesProducts: []
    };
  },
  async fetch() {
    const clothesProducts = await this.$axios.get(
      "/products?categories[in]=clothes"
    );
    this.clothesProducts = clothesProducts.data.data;
  }
};
</script>

<style lang="scss" scoped></style>
