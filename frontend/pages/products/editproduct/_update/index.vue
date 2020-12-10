<template>
  <main class="edit-product">
    <BaseHeader heading="Edit Product" image="editproduct-header.jpg" />
    <div class="" v-if="!uploadedPicture">
      <h3 class="edit-product__heading-3">
        Edit your product
      </h3>
      <ProductForm
        mode="update"
        @productAction="productAction"
        :product="product"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      id: undefined,
      title: undefined,
      category: undefined,
      location: undefined,
      price: undefined,
      description: undefined,
      product: {},
      uploadedPicture: false
    };
  },
  methods: {
    async productAction(data) {
      if (data.type === "editProduct") {
        await this.$axios.put(
          `/products/${this.$route.params.update}`,
          {
            categories: data.category,
            title: data.title,
            description: data.description,
            location: data.location,
            price: data.price
          },
          this.$router.push("/users/myprofile")
        );
      } else if (data.type === "deleteProduct") {
        await this.$axios.delete(`/products/${this.$route.params.update}`);
        this.$router.push("/users/myprofile");
      } else if (data.type === "goBack") {
        this.$router.push("/users/myprofile");
      } else if (data.type === "uploadImage") {
        const formData = new FormData();

        formData.append("file", data.file);

        await this.$axios.put(
          `/products/${this.$route.params.update}/photo`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

        setTimeout(() => {
          this.$router.push("/users/myprofile");
        }, 1500);
      }
    }
  },
  async asyncData({ params, $axios }) {
    let product = await $axios.get(`/products/${params.update}`);
    product = product.data.data;

    return { product };
  }
};
</script>

<style lang="scss" scoped>
.edit-product {
  &__heading-3 {
    text-align: center;
  }

  &__card {
    margin-top: 1rem;
  }

  &__form {
    padding: 1rem;
  }

  &__card {
    width: 25rem;
    margin: 1rem auto 0 auto;
    padding: 1rem;
  }

  &__form {
    width: 100%;
  }

  &__form-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &--triple {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }

  &__input {
    width: 100%;
    margin-top: 0.2rem;
    height: 1.6rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);

    &--alt {
      width: 100%;
      margin-top: 0.2rem;
      height: unset;
      padding-left: 0.25rem;
      border: 1px solid rgba($color: #000000, $alpha: 0.2);
      border-radius: 5px;
      font-family: inherit;
      padding: 0.25rem;
    }
  }

  &__button {
    height: 1.7rem;
    width: 100%;
    color: white;
    background-color: var(--main-color);
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &--delete {
      background-color: red;
    }

    &--cancel {
      background-color: white;
      border: 1px solid var(--main-color);
      color: var(--main-color);
    }
  }

  &__others {
    width: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
