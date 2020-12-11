<template>
  <nuxt-link :to="`/products/${id}`">
    <li class="profile__item">
      <div class="col-1">
        <img
          class="profile__image"
          :src="require(`~/assets/product-images/${photo}`)"
          alt=""
        />
      </div>
      <div class="profile__col-2">
        <div class="profile__row-1">
          <div class="profile__header">
            <h5 class="profile__heading-5">{{ title }}</h5>
            <nuxt-link :to="`/products/editproduct/${id}`"
              ><fa
                v-if="mode === 'editable'"
                class="profile__icon"
                :icon="['far', 'edit']"
            /></nuxt-link>
          </div>
          <p>{{ price }}€</p>
        </div>
        <p class="profile__description">{{ description }}</p>
      </div>
    </li>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {},
    image: {},
    price: {},
    description: {},
    id: {},
    photo: {}
  },
  inject: ["mode"]
};
</script>

<style lang="scss" scoped>
.profile {
  &__item {
    margin-bottom: 0.5rem;
    display: grid;
    grid-template-columns: 75px 1fr;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__row-1 {
    display: flex;
    justify-content: space-between;
  }

  &__header {
    display: flex;
    align-items: center;
    color: var(--main-color);
  }

  &__icon {
    margin-left: 0.5rem;
    margin-bottom: 2px;
    font-size: 1rem;
    color: black;
    transition: 0.35s;
  }

  &__col-2 {
    display: flex;
    flex-direction: column;
    padding: 0.25rem;
  }

  &__heading-5 {
    font-size: 1.2rem;
  }

  &__description {
    height: 3rem;
    overflow-y: auto;
  }
}
</style>
