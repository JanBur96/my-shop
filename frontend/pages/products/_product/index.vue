<template>
  <main class="product">
    <base-container>
      <BaseHeader image="product-header.jpg" heading="The Product" />
      <base-card class="product__card">
        <img
          class="product__image"
          :src="require(`~/assets/product-images/${product.photo}`)"
          :alt="`Photo of ${product.title}`"
        />

        <div class="product__information">
          <div class="product__row-1">
            <h3 class="product__heading">{{ product.title }}</h3>
            <p class="product__description">{{ product.description }}</p>
          </div>
          <div class="product__row-2">
            <div class="product__upper">
              <p>Location: {{ product.location }}</p>
              <p>Price: {{ product.price }}€</p>
            </div>
            <div class="product__lower">
              Uploaded by
              <nuxt-link class="product__link" :to="`/users/${user._id}`">{{
                user.name
              }}</nuxt-link>
              <ul class="product__list">
                <li class="product__item">
                  {{ user.products.length }} Product/s Online
                </li>
                <li class="product__item">Rating: 4.5/5</li>
              </ul>
            </div>
          </div>
        </div>
      </base-card>
      <div class="product__action">
        <ul class="product__list product__list--alt">
          <li class="product__item product__item--alt">
            <button class="product__button product__button--share">
              <fa class="product__icon" :icon="['fas', 'share']" /> Share
            </button>
          </li>
          <li class="product__item product__item--alt">
            <button class="product__button product__button--wish">
              <fa class="product__icon" :icon="['fas', 'gift']" /> Wishlist
            </button>
          </li>
          <li class="product__item product__item--alt">
            <nuxt-link :to="`/products/${this.$route.params.product}/contact`">
              <button class="product__button product__button--contact">
                <fa class="product__icon" :icon="['far', 'envelope']" />
                Contact
              </button>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </base-container>
  </main>
</template>

<script>
export default {
  name: "Product",
  async asyncData({ params, $axios }) {
    let product = await $axios.get(`/products/${params.product}`);
    product = product.data.data;

    let user = await $axios.get(`/users/${product.user}`);
    user = user.data.data;

    return { product, user };
  }
};
</script>

<style lang="scss" scoped>
.product {
  &__card {
    height: 30rem;
    display: grid;
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 0 7.5px 7.5px 0;
    object-fit: cover;
  }

  &__heading {
    margin-top: 0;
  }

  &__information {
    padding: 0.5rem;
    display: grid;
    grid-template-rows: 2.5fr 0.5fr;
  }

  &__row-2 {
    border-top: 1px solid var(--main-color);
    display: grid;
    grid-template-rows: repeat(2, 1fr);
  }

  &__upper {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
  }

  &__link {
    color: var(--main-color);
  }

  &__list {
    font-size: inherit;

    &--alt {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }

  &__item {
    &--alt {
      width: 100%;
    }
  }

  &__button {
    width: 100%;
    height: 3rem;
    background-color: var(--main-color);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &--contact {
      background-color: var(--main-color);
    }

    &--wish {
      background-color: white;
      color: var(--main-color);
      border: 1px solid var(--main-color);
    }

    &--share {
      background-color: white;
      color: var(--main-color);
      border: 1px solid var(--main-color);
    }
  }

  &__action {
    margin-top: 1.5rem;
  }

  &__icon {
    margin-right: 0.25rem;
  }
}

@media (max-width: 450px) {
  .product {
    &__card {
      height: 50rem;
      display: grid;
      margin-top: 2rem;
      grid-template-columns: unset;
      grid-template-rows: 1fr 2fr;
    }

    &__image {
      width: 100%;
      height: 100%;
      border-radius: 0 0 5px 5px;
    }
  }
}

@media (max-width: 350px) {
  .product {
    &__card {
      height: 30rem;
      display: grid;
      margin-top: 2rem;
      grid-template-columns: unset;
      grid-template-rows: 1fr 1fr;
    }

    &__information {
      grid-template-rows: 1fr 1fr;
    }

    &__row-2 {
      grid-template-rows: 0.5fr 1fr;
    }
  }
}
</style>
