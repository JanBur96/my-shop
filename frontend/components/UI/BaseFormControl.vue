<template>
  <div class="base-form-control">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseFormControl"
};
</script>

<style lang="scss" scoped>
.base-form-control {
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
