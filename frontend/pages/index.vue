<template>
  <main>
    <base-container>
      <BaseHeader image="home-header.jpg" heading="Welcome" />
      <BaseList :products="products" category="Latest Products" />
      <ListPagination
        @nextPage="nextPage"
        @prevPage="prevPage"
        :page="page"
        :nextPagination="nextPagination"
        :prevPagination="prevPagination"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      products: [],
      page: 1,
      nextPagination: undefined,
      prevPagination: undefined
    };
  },
  methods: {
    async nextPage() {
      const fetch = await this.$axios.get(
        `/products?page=${this.page + 1}&limit=20`
      );
      this.products = fetch.data.data;
      this.nextPagination = fetch.data.pagination.next;
      this.prevPagination = fetch.data.pagination.prev;
      this.page += 1;
    },
    async prevPage() {
      const fetch = await this.$axios.get(
        `/products?page=${this.page - 1}&limit=20`
      );
      this.products = fetch.data.data;
      this.nextPagination = fetch.data.pagination.next;
      this.prevPagination = fetch.data.pagination.prev;
      this.page -= 1;
    }
  },
  async fetch() {
    const fetch = await this.$axios.get(`/products?page=1&limit=20`);
    this.products = fetch.data.data;
    this.nextPagination = fetch.data.pagination.next;
  }
};
</script>
