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
  font-size: 1rem;
  color: white;
  background-color: var(--main-color);
  border: none;
  border-radius: 5px;
  outline-color: var(--main-color);

  &:hover {
    background-color: lighten($color: #8a3bc2, $amount: 10);
  }
}
</style>
