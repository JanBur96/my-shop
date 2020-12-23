<template>
  <main class="error">
    <div class="error404" v-if="error.statusCode === 404">
      <BaseHeader heading="Error 404" image="error-header.jpg" />
      <h1 class="error__heading">
        The page you're looking for doesn't exist
      </h1>
      <img
        class="error__image"
        src="~/assets/images/vector/error404-vector.svg"
        alt="Vector graphic with a 404"
      />
      <ul class="error__list">
        <li>
          <button class="error__button">
            <nuxt-link to="/">Back to Home</nuxt-link>
          </button>
        </li>
      </ul>
    </div>
    <div v-else>
      <BaseHeader heading="Error" image="error-header.jpg" />
      <h1 class="error__heading">
        Error! Please refresh or try again later.
      </h1>
      <ul class="error__list">
        <li>
          <button class="error__button">
            <nuxt-link to="/">Back to Home</nuxt-link>
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="scss" scoped>
.error {
  &__heading {
    text-align: center;
  }

  &__image {
    margin-top: 2rem;
    height: 20rem;
    width: 100%;
  }

  &__list {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    height: 2rem;
    width: 8rem;
    border: none;
    border: 1px solid var(--main-color);
    color: var(--main-color);
    border-radius: 5px;
    background-color: white;
    font-size: 1rem;
  }
}
</style>
