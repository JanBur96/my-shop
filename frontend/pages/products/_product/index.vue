<template>
  <main class="product">
    <BaseHeader image="product-header.jpg" heading="The Product" />
    <base-card class="product__card">
      <img
        class="product__image"
        :src="require(`~/assets/product-images/${product.photo}`)"
        alt=""
      />

      <div class="product__information">
        <div class="product__row-1">
          <h3 class="product__header">{{ product.title }}</h3>
          <p class="product__description">{{ product.description }}</p>
        </div>
        <div class="product__row-2">
          <div class="product__upper">
            <p>Location: {{ product.location }}</p>
            <p>Price: {{ product.price }}€</p>
          </div>
          <div class="product__lower">
            Uploaded by
            <nuxt-link :to="`/users/${user._id}`">{{ user.name }}</nuxt-link>
          </div>
        </div>
      </div>
    </base-card>
  </main>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    let product = await $axios.get(`/products/${params.product}`);
    product = product.data.data;
    console.log(product);

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
  }

  &__information {
    padding: 0.5rem;
    display: grid;
    grid-template-rows: 2fr 1fr;
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
}
</style>
