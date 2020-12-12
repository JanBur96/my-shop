<template>
  <main>
    <base-container>
      <BaseHeader image="overview-technology.jpg" :heading="categorieName" />
      <BaseList :category="categorieName" :products="products" />
      <ListPagination
        @nextPage="nextPage"
        @prevPage="prevPage"
        :page="page"
        :next-pagination="nextPagination"
        :prev-pagination="prevPagination"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "Categorie",
  data() {
    return {
      page: 1,
      products: undefined,
      categorieName: undefined,
      nextPagination: undefined,
      prevPagination: undefined
    };
  },
  methods: {
    async nextPage() {
      const fetch = await this.$axios.get(
        `/products?categories[in]=${this.categorieName}&page=${this.page +
          1}&limit=20`
      );
      this.products = fetch.data.data;
      this.nextPagination = fetch.data.pagination.next;
      this.prevPagination = fetch.data.pagination.prev;
      this.page += 1;
    },
    async prevPage() {
      const fetch = await this.$axios.get(
        `/products?categories[in]=${this.categorieName}&page=${this.page -
          1}&limit=20`
      );
      this.products = fetch.data.data;
      this.nextPagination = fetch.data.pagination.next;
      this.prevPagination = fetch.data.pagination.prev;
      this.page -= 1;
    }
  },
  async fetch() {
    const fetch = await this.$axios.get(
      `/products?categories[in]=${this.categorieName}&page=1&limit=20`
    );
    this.products = fetch.data.data;
    this.nextPagination = fetch.data.pagination.next;
  },
  created() {
    this.categorieName = this.$route.params.categorie;
  }
};
</script>

<style lang="scss" scoped></style>
