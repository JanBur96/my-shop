<template>
  <li class="my-profile__item">
    <div class="col-1">
      <img
        class="my-profile__image"
        src="https://via.placeholder.com/75
      "
        alt=""
      />
    </div>
    <div class="my-profile__col-2">
      <div class="my-profile__row-1">
        <div class="my-profile__idk">
          <h5>{{ title }}</h5>
          <nuxt-link :to="`/myprofile/${id}`"
            ><fa class="my-profile__icon" :icon="['far', 'edit']"
          /></nuxt-link>
        </div>
        <p>{{ price }}€</p>
      </div>
      <p class="my-profile__description">{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {},
    image: {},
    price: {},
    description: {},
    id: {}
  }
};
</script>

<style lang="scss" scoped>
.my-profile {
  &__item {
    display: grid;
    grid-template-columns: 75px 1fr;
    border: 1px solid var(--main-color);
    margin-bottom: 0.5rem;
    border-radius: 5px;
    overflow: hidden;
  }

  &__image {
    height: 100%;
    width: 100%;
  }

  &__row-1 {
    display: flex;
    justify-content: space-between;
  }

  &__idk {
    display: flex;
    align-items: center;
    color: var(--main-color);
  }

  &__icon {
    margin-left: 0.5rem;
    margin-bottom: 2px;
    font-size: 1rem;
    color: black;
  }

  &__col-2 {
    display: flex;
    flex-direction: column;
    padding: 0.25rem;

    & h5 {
      font-size: 1.2rem;
    }
  }

  &__description {
    height: 3rem;
    overflow-y: auto;
  }
}
</style>
