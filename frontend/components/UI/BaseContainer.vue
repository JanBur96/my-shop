<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    mode: {
      type: String,
      required: false,
      default: "base-container"
    }
  }
};
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.base-container-flex {
  width: 100%;
  height: 100%;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex-direction: inherit;
  grid-template-columns: inherit;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
