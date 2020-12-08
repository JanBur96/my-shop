<template>
  <main class="error">
    <BaseHeader heading="Error" image="error-header.jpg" />

    <h1 v-if="error.statusCode === 404">dis is a 404 error</h1>
    <h1 v-else>dis an other error lol</h1>
  </main>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped></style>
