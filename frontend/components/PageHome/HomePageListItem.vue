<template>
  <base-card>
    <li class="latest-products__item">
      <img
        class="latest-products__item__image"
        src="https://via.placeholder.com/150"
        :alt="`A picture of ${title}`"
      />
      <div class="latest-products__item__text">
        <h4>{{ title }}</h4>
        <div class="latest-products__item__row-2">
          <p>{{ location }}</p>
          <p>{{ price }}</p>
        </div>
      </div>
    </li>
  </base-card>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.latest-products__item {
  height: 9rem;
  display: grid;
  grid-template-rows: 1.5fr 1fr;

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
