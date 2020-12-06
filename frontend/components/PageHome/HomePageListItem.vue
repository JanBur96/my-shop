<template>
  <nuxt-link :to="`/products/${this.id}`">
    <base-card>
      <li class="latest-products__item">
        <img
          class="latest-products__item__image"
          src="https://via.placeholder.com/150"
          :alt="`A picture of ${title}`"
        />
        <div class="latest-products__item__text">
          <h4 class="latest-products__item__title">{{ title }}</h4>
          <div class="latest-products__item__row-2">
            <p class="latest-products__item__location">{{ location }}</p>
            <p>{{ price }}€</p>
          </div>
        </div>
      </li>
    </base-card>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: false
    },
    description: {
      type: String,
      required: true,
      default: false
    },
    location: {
      type: String,
      required: true,
      default: false
    },
    price: {
      type: Number,
      required: true,
      default: false
    },
    id: {}
  }
};
</script>

<style lang="scss" scoped>
.latest-products__item {
  height: 9rem;
  width: 100%;
  display: grid;
  grid-template-rows: 1.5fr 1fr;

  &__title {
    width: 200px;
    max-width: 260px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
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
