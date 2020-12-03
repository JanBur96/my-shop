<template>
  <main>
    <base-container>
      <BaseHeader image="overview-technology.jpg" heading="Technology" />
      <BaseList category="Technology" :products="techProducts" />
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      techProducts: []
    };
  },
  async fetch() {
    const techProducts = await this.$axios.get(
      "/products?categories[in]=technology"
    );
    this.techProducts = techProducts.data.data;
  }
};
</script>

<style lang="scss" scoped></style>
