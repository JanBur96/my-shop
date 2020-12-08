<template>
  <base-card>
    <nuxt-link :to="`/products/${id}`">
      <li class="categories__item">
        <img
          class="categories__image"
          :src="require(`~/assets/product-images/${photo}`)"
          alt=""
        />
        <div class="categories__text">
          <h4>{{ title }}</h4>
          <div class="categories__row-2">
            <p>{{ location }}</p>
            <p>{{ price }}€</p>
          </div>
        </div>
      </li>
    </nuxt-link>
  </base-card>
</template>

<script>
export default {
  props: {
    id: {},
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    photo: {}
  }
};
</script>

<style lang="scss" scoped>
.categories {
  &__item {
    height: 9rem;
    display: grid;
    grid-template-rows: 1.5fr 1fr;
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  &__text {
    padding: 0.25rem;
  }

  &__row-2 {
    display: flex;
    justify-content: space-between;
  }
}
</style>
