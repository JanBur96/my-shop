<template>
  <section class="product-form">
    <base-card class="product-form__card">
      <form action="" class="product-form__form">
        <div class="product-form__form-control">
          <label for="">Title</label>
          <input class="product-form__input" v-model="title" type="text" />
        </div>
        <div class="product-form__form-control--triple">
          <div class="product-form__form-control">
            <label for="">Category</label>
            <select v-model="category" class="product-form__input">
              <option value="technology">Technology</option>
              <option value="furniture">Furniture</option>
              <option value="clothes">Clothes</option>
              <option value="misc">Misc</option>
            </select>
          </div>
          <div class="product-form__form-control">
            <label for="">Location</label>
            <input class="product-form__input" v-model="location" type="text" />
          </div>
          <div class="product-form__form-control">
            <label for="">Price</label>
            <input class="product-form__input" v-model="price" type="text" />
          </div>
        </div>
        <div class="product-form__form-control">
          <label for="">Description</label>
          <textarea
            v-model="description"
            class="product-form__input--alt"
            rows="7"
          ></textarea>
        </div>
        <div class="product-form__image" v-if="mode === 'update'">
          <div class="product-form__form-control">
            <label for="">Upload Image</label>
            <input type="file" name="" id="" @change="processFile($event)" />
          </div>
          <button
            class="product-form__button"
            @click.prevent="emitProductAction('uploadImage')"
          >
            Upload
          </button>
        </div>

        <button
          class="product-form__button"
          v-if="mode === 'update'"
          @click.prevent="emitProductAction('editProduct')"
        >
          Edit Product
        </button>
        <button
          class="product-form__button"
          v-else
          @click.prevent="emitProductAction('addProduct')"
        >
          Add Product
        </button>
      </form>
      <div class="product-form__others" v-if="mode === 'update'">
        <button
          @click.prevent="emitProductAction('goBack')"
          class="product-form__button product-form__button--cancel"
        >
          Cancel
        </button>
        <button
          @click.prevent="emitProductAction('deleteProduct')"
          class="product-form__button product-form__button--delete"
        >
          Delete
        </button>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      category: "",
      title: "",
      description: "",
      location: "",
      price: "",
      file: "",
      product: {}
    };
  },
  props: {
    mode: {
      type: String,
      required: false
    }
  },
  methods: {
    processFile(event) {
      this.file = event.target.files[0];
    },
    emitProductAction(type) {
      const data = {
        type,
        categories: this.category,
        title: this.title,
        description: this.description,
        location: this.location,
        price: this.price,
        file: this.file
      };
      this.$emit("productAction", data);
    }
  },
  async fetch() {
    if (this.$props.mode === "update") {
      const id = this.$route.params.UpdateProduct;
      let product = await this.$axios.get(`/products/${id}`);
      product = product.data.data;

      this.title = product.title;
      this.category = product.categories;
      this.location = product.location;
      this.price = product.price;
      this.description = product.description;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-form {
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

  &__image {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}
</style>
