<template>
  <main class="main">
    <base-container>
      <BaseHeader image="categories-header.jpg" heading="Categories" />
      <PageCategoriesList :categories="categories" />
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Technology",
          image: "overview-technology.jpg"
        },
        {
          title: "Furniture",
          image: "overview-furniture.jpg"
        },
        {
          title: "Clothes",
          image: "overview-clothes.jpg"
        },
        {
          title: "Misc",
          image: "overview-misc.jpg"
        }
      ]
    };
  }
};
</script>
