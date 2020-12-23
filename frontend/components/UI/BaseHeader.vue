<template>
  <div
    class="base-header"
    :style="{
      backgroundImage: `url(${require(`@/assets/images/header/${image}`)})`
    }"
  >
    <h2 class="base-header__heading">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  props: {
    image: {
      type: String,
      required: true,
      default: false
    },
    heading: {
      type: String,
      required: true,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.base-header {
  position: relative;
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 1px rgba($color: #000000, $alpha: 0.2);
  border-radius: 5px;
  color: white;
  font-size: 3rem;
  background-position: center;
  background-size: cover;
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

  &__heading {
    z-index: 100;
    text-shadow: 1px 1px rgba($color: #000000, $alpha: 0.2);
    text-transform: capitalize;
  }
}
</style>
