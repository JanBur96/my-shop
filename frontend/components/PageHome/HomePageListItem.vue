<template>
  <nuxt-link :to="`/products/${this.id}`">
    <base-card>
      <li class="homepage-item">
        <img
          class="homepage-item__image"
          :src="require(`~/assets/product-images/${photo}`)"
          :alt="`A picture of ${title}`"
        />
        <div class="homepage-item__text">
          <h4 class="homepage-item__title">{{ title }}</h4>
          <div class="homepage-item__informations">
            <p class="homepage-item__location">{{ location }}</p>
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
      required: true
    },
    description: {
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
    id: {
      type: String,
      required: true
    },
    photo: {}
  }
};
</script>

<style lang="scss" scoped>
.homepage-item {
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

  &__informations {
    display: flex;
    justify-content: space-between;
  }
}
</style>
