<template>
  <main class="main">
    <base-container>
      <BaseHeader image="home-header.jpg" heading="Welcome" />
      <HomePageList :products="products" />
      <div class="main__pagination">
        <ul class="main__list">
          <li class="main__item" v-if="prevPagination" @click="prevPage">
            <-
          </li>
          <li class="main__item">{{ page }}</li>
          <li class="main__item" v-if="nextPagination" @click="nextPage">
            ->
          </li>
        </ul>
      </div>
    </base-container>
  </main>
</template>

<script>
export default {
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
      console.log(fetch);
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

<style lang="scss" scoped>
.main {
  &__list {
    display: flex;
  }

  &__item {
    width: 2rem;
    height: 2rem;
    margin: 0 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    box-shadow: 0 0 2px 1px rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
