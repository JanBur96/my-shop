<template>
  <section class="all-categories">
    <h3 class="all-categories__heading">Categories</h3>
    <ul class="all-categories__list">
      <CategoriesPageListItem
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
  &__heading {
    margin-top: 1rem;
  }

  &__list {
    height: 30rem;
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
