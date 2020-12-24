<template>
  <main class="error">
    <div class="error404" v-if="error.statusCode === 404">
      <BaseHeader heading="Error 404" image="error-header.jpg" />
      <h3 class="error__heading">
        The page you're looking for doesn't exist
      </h3>
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
    font-size: 2rem;
  }

  &__image {
    margin-top: 2rem;
    width: 100%;
    height: 20rem;
  }

  &__list {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    width: 8rem;
    height: 2rem;
    border: none;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    color: var(--main-color);
    background-color: white;
    font-size: 1rem;
  }
}
</style>
