<template>
  <section class="product-form">
    <base-card class="product-form__card">
      <form class="product-form__form" action="" @submit.prevent>
        <p class="product-form__forgot-something" v-if="forgotSomething">
          You forgot something!
        </p>
        <base-form-control>
          <label for="">Title</label>
          <input class="product-form__input" v-model="title" type="text" />
        </base-form-control>
        <div class="product-form__form-control--3-col">
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
            <input
              class="product-form__input"
              v-model="price"
              type="number"
              required
            />
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
            <label for="" :style="!fileValid ? 'color: red' : ''"
              >Upload Image (Max. 1MB)</label
            >
            <input
              type="file"
              name=""
              id=""
              @change="processFile($event)"
              class="product-form__input--file"
            />
          </base-form-control>
          <button
            class="product-form__button"
            @click.prevent="emitProductAction('uploadImage')"
            :disabled="disabled"
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
      <div class="product-form__additional" v-if="mode === 'update'">
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
      fileValid: true,
      product: {},
      forgotSomething: false
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
      const file = event.target.files[0];
      if (file.size > 1000000) {
        this.fileValid = false;
      } else {
        this.file = event.target.files[0];
        this.fileValid = true;
        this.disabled = false;
      }
    },
    emitProductAction(type) {
      const checkForm = () => {
        if (
          this.price > 0 &&
          this.location &&
          this.title &&
          this.category &&
          this.description &&
          this.category
        ) {
          return true;
        } else {
          this.forgotSomething = true;
          return false;
        }
      };

      if (checkForm()) {
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
    }
  },
  async fetch() {
    if (this.$props.mode === "update") {
      const id = this.$route.params.update;
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
    width: 25rem;
    margin: 1rem auto;
    padding: 1.25rem 2rem;
  }

  &__form {
    width: 100%;
  }

  &__form-control {
    &--3-col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }

  &__input {
    width: 100%;
    height: 1.6rem;
    font-size: 1rem;
    margin-top: 0.2rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);

    &--area {
      width: 100%;
      height: unset;
      font-size: 1rem;
      margin-top: 0.2rem;
      padding: 0.25rem;
      border: 1px solid rgba($color: #000000, $alpha: 0.2);
      border-radius: 5px;
      font-family: inherit;
    }

    &--file {
      width: 100%;
    }
  }

  &__image-upload {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    align-items: center;
  }

  &__button {
    margin-top: 0.2rem;
    width: 100%;
    height: 1.7rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
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

    :disabled {
      color: red;
    }
  }

  &__additional {
    width: 100%;
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  &__forgot-something {
    margin-bottom: 0.5rem;
    text-align: center;
    padding: 0.2rem;
    border-radius: 5px;
    color: white;
    background: red;
  }
}

@media (max-width: 580px) {
  .product-form {
    &__card {
      width: 80%;
    }
  }
}

@media (max-width: 450px) {
  .product-form {
    &__card {
      width: 100%;
    }
  }
}
</style>
