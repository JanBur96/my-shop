<template>
  <section class="add-product">
    <h3 class="add-product__heading">Add a new product</h3>
    <base-card class="add-product__card">
      <form action="" class="add-product__form" @submit.prevent="addProduct">
        <div class="add-product__form-control">
          <label for="">Title</label>
          <input class="add-product__input" v-model="title" type="text" />
        </div>
        <div class="add-product__form-control--triple">
          <div class="add-product__form-control">
            <label for="">Category</label>
            <select v-model="category" class="add-product__input">
              <option value="technology">Technology</option>
              <option value="furniture">Furniture</option>
              <option value="clothes">Clothes</option>
              <option value="misc">Misc</option>
            </select>
          </div>
          <div class="add-product__form-control">
            <label for="">Location</label>
            <input class="add-product__input" v-model="location" type="text" />
          </div>
          <div class="add-product__form-control">
            <label for="">Price</label>
            <input class="add-product__input" v-model="price" type="text" />
          </div>
        </div>
        <div class="add-product__form-control">
          <label for="">Description</label>
          <textarea
            v-model="description"
            class="add-product__input--alt"
            rows="7"
          ></textarea>
        </div>
        <button class="add-product__button">Add Product</button>
      </form>
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
      price: ""
    };
  },
  methods: {
    async addProduct() {
      await this.$axios.post("/products", {
        categories: this.category,
        title: this.title,
        description: this.description,
        location: this.location,
        price: this.price
      });
      alert("Add PRoduct^^");
    }
  }
};
</script>

<style lang="scss" scoped>
.add-product {
  &__heading {
    margin-top: 1rem;
    text-align: center;
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
  }
}
</style>
