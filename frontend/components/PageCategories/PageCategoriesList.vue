<template>
  <section class="all-categories">
    <h3 class="all-categories__heading">Categories</h3>
    <ul class="all-categories__list">
      <PageCategoriesListItem
        v-for="category in categories"
        :key="category.title"
        :title="category.title"
        :image="category.image"
      />
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.all-categories {
  &__list {
    height: 27.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .all-categories {
    &__list {
      height: 40rem;
      grid-template-columns: unset;
      grid-template-rows: repeat(4, 1fr);
    }
  }
}
</style>
