<template>
  <main>
    <BaseHeader image="overview-furniture.jpg" heading="Furniture" />
    <BaseList category="Furniture" :products="furnitureProducts" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      furnitureProducts: []
    };
  },
  async fetch() {
    const furnitureProducts = await this.$axios.get(
      "/products?categories[in]=furniture"
    );
    this.furnitureProducts = furnitureProducts.data.data;
  }
};
</script>

<style lang="scss" scoped></style>
