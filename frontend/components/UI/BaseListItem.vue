<template>
  <base-card class="base-item">
    <nuxt-link :to="`/products/${id}`">
      <li class="base-item__item">
        <img
          class="base-item__image"
          :src="require(`~/assets/product-images/${photo}`)"
          :alt="`Photo of ${title}`"
        />
        <div class="base-item__text">
          <h4 class="base-item__title">{{ title }}</h4>
          <div class="base-item__row-2">
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
  name: "BaseListItem",
  props: {
    id: {
      type: String,
      required: true
    },
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
.base-item {
  transition: 0.35s;

  &:hover {
    box-shadow: 0px 0px 4px 2px rgba($color: #000000, $alpha: 0.2);
    transform: translateY(-2px);
  }

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

  &__title {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 150px;
    height: 1.2em;
    white-space: nowrap;
  }

  &__row-2 {
    display: flex;
    justify-content: space-between;
  }
}
</style>
