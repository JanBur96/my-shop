<template>
  <section class="product-form">
    <base-card class="product-form__card">
      <form action="" class="product-form__form">
        <base-form-control>
          <label for="">Title</label>
          <input class="product-form__input" v-model="title" type="text" />
        </base-form-control>
        <div class="product-form__form-control--triple">
          <base-form-control>
            <label for="">Category</label>
            <select v-model="category" class="product-form__input">
              <option value="technology">Technology</option>
              <option value="furniture">Furniture</option>
              <option value="clothes">Clothes</option>
              <option value="misc">Misc</option>
            </select>
          </base-form-control>
          <base-form-control>
            <label for="">Location</label>
            <input class="product-form__input" v-model="location" type="text" />
          </base-form-control>
          <base-form-control>
            <label for="">Price</label>
            <input class="product-form__input" v-model="price" type="text" />
          </base-form-control>
        </div>
        <base-form-control>
          <label for="">Description</label>
          <textarea
            v-model="description"
            class="product-form__input--area"
            rows="7"
          ></textarea>
        </base-form-control>
        <div class="product-form__image-upload" v-if="mode === 'update'">
          <base-form-control>
            <label for="">Upload Image</label>
            <input type="file" name="" id="" @change="processFile($event)" />
          </base-form-control>
          <base-button
            class="product-form__button"
            @click.prevent="emitProductAction('uploadImage')"
          >
            Upload
          </base-button>
        </div>

        <base-button
          class="product-form__button"
          v-if="mode === 'update'"
          @click.prevent="emitProductAction('editProduct')"
        >
          Edit Product
        </base-button>
        <base-button
          class="product-form__button"
          v-else
          @click.prevent="emitProductAction('addProduct')"
        >
          Add Product
        </base-button>
      </form>
      <div class="product-form__additional" v-if="mode === 'update'">
        <base-button
          @click.prevent="emitProductAction('goBack')"
          class="product-form__button product-form__button--cancel"
        >
          Cancel
        </base-button>
        <base-button
          @click.prevent="emitProductAction('deleteProduct')"
          class="product-form__button product-form__button--delete"
        >
          Delete
        </base-button>
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
  &__card {
    margin-top: 1rem;
    width: 25rem;
    margin: 1rem auto 0 auto;
    padding: 1rem;
  }

  &__form {
    width: 100%;
    padding: 1rem;
  }

  &__form-control {
    &--triple {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }

  &__input {
    width: 100%;
    height: 1.6rem;
    margin-top: 0.2rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);

    &--area {
      width: 100%;
      height: unset;
      margin-top: 0.2rem;
      padding: 0.25rem;
      border: 1px solid rgba($color: #000000, $alpha: 0.2);
      border-radius: 5px;
      font-family: inherit;
    }
  }

  &__image-upload {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  &__button {
    width: 100%;
    color: #fff;
    background-color: var(--main-color);
    border: none;

    &--delete {
      background-color: red;
    }

    &--cancel {
      color: var(--main-color);
      background-color: white;
      border: 1px solid var(--main-color);
    }
  }

  &__additional {
    width: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
