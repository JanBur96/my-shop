<template>
  <main class="edit-product">
    <BaseHeader heading="Edit Product" image="editproduct-header.jpg" />
    <h3 class="edit-product__heading-3">
      Edit your product
    </h3>
    <base-card class="edit-product__card">
      <form action="" class="edit-product__form" @submit.prevent="editProduct">
        <div class="edit-product__form-control">
          <label for="">Title</label>
          <input class="edit-product__input" v-model="title" type="text" />
        </div>
        <div class="edit-product__form-control--triple">
          <div class="edit-product__form-control">
            <label for="">Category</label>
            <select v-model="category" class="edit-product__input">
              <option value="technology">Technology</option>
              <option value="furniture">Furniture</option>
              <option value="clothes">Clothes</option>
              <option value="misc">Misc</option>
            </select>
          </div>
          <div class="edit-product__form-control">
            <label for="">Location</label>
            <input class="edit-product__input" v-model="location" type="text" />
          </div>
          <div class="edit-product__form-control">
            <label for="">Price</label>
            <input class="edit-product__input" v-model="price" type="text" />
          </div>
        </div>
        <div class="edit-product__form-control">
          <label for="">Description</label>
          <textarea
            v-model="description"
            class="edit-product__input--alt"
            rows="7"
          ></textarea>
        </div>
        <button class="edit-product__button">Edit Product</button>
      </form>
      <div class="edit-product__others">
        <button
          @click="goBack"
          class="edit-product__button edit-product__button--cancel"
        >
          Cancel
        </button>
        <button
          @click="deleteProduct"
          class="edit-product__button edit-product__button--delete"
        >
          Delete
        </button>
      </div>
    </base-card>
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
      description: undefined
    };
  },
  methods: {
    async editProduct() {
      await this.$axios.put(
        `/products/${this.id}`,
        {
          categories: this.category,
          title: this.title,
          description: this.description,
          location: this.location,
          price: this.price
        },
        this.$router.push("/myprofile")
      );
    },
    async deleteProduct() {
      await this.$axios.delete(`/products/${this.id}`);
    },
    goBack() {
      this.$router.push("/myprofile");
    }
  },
  created() {
    this.id = this.$route.params.UpdateProduct;
  },
  async fetch() {
    let product = await this.$axios.get(`/products/${this.id}`);
    product = product.data.data;
    this.title = product.title;
    this.category = product.categories;
    this.location = product.location;
    this.price = product.price;
    this.description = product.description;
  }
};
</script>

<style lang="scss" scoped>
.edit-product {
  &__heading-3 {
    margin-top: 1rem;
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
