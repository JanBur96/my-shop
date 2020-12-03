<template>
  <main>
    <base-container>
      <BaseHeader image="overview-misc.jpg" heading="Misc" />
      <p v-if="!finishLoad">Loading...</p>
      <BaseList v-else category="Misc" :products="miscProducts" />
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      miscProducts: [],
      finishLoad: false
    };
  },
  async fetch() {
    const miscProducts = await this.$axios.get("/products?categories[in]=misc");
    this.miscProducts = miscProducts.data.data;
    this.finishLoad = true;
  }
};
</script>

<style lang="scss" scoped></style>
