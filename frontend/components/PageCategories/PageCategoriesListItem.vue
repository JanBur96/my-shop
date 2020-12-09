<template>
  <li
    :style="{ backgroundImage: `url(${require(`@/assets/images/${image}`)})` }"
    class="all-categories-item"
  >
    <nuxt-link
      class="all-categories-item__link"
      :to="`/products/categories/${title.toLowerCase()}`"
    >
      <h4 class="all-categories-item__heading">{{ title }}</h4>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.all-categories-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 1px rgba($color: #000000, $alpha: 0.2);
  font-size: 2rem;
  background-position: center;
  background-size: cover;
  transition: 0.35s;
  overflow: hidden;

  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 5px;
    background: rgba($color: #000000, $alpha: 0.2);
    content: "";
    z-index: 10;
  }

  &:hover {
    box-shadow: 0px 0px 6px 2px rgba($color: #000000, $alpha: 0.4);
    transform: translateY(-2px);
  }

  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  &__heading {
    color: white;
    z-index: 100;
  }
}
</style>
