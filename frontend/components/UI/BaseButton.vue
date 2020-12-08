<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.base-button {
  height: 1.7rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
