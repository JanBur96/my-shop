<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.base-card {
  border: 1px solid rgba($color: #000000, $alpha: 0.2);
  border-radius: 5px;
  box-shadow: 0px 0px 4px 1px rgba($color: #000000, $alpha: 0.2);
  overflow: hidden;
}
</style>
