<template>
  <main class="edit-details">
    <BaseHeader heading="Edit Details" image="editdetails-header.jpg" />
    <h3 class="edit-details__heading">Edit your details</h3>
    <base-card class="edit-details__card">
      <form action="" class="edit-details__form" @submit.prevent="addProduct">
        <div class="edit-details__form-control">
          <label for="">Title</label>
          <input class="edit-details__input" v-model="title" type="text" />
        </div>
        <div class="edit-details__form-control--triple">
          <div class="edit-details__form-control">
            <label for="">Category</label>
            <select v-model="category" class="edit-details__input">
              <option value="technology">Technology</option>
              <option value="furniture">Furniture</option>
              <option value="clothes">Clothes</option>
              <option value="misc">Misc</option>
            </select>
          </div>
          <div class="edit-details__form-control">
            <label for="">Location</label>
            <input class="edit-details__input" v-model="location" type="text" />
          </div>
          <div class="edit-details__form-control">
            <label for="">Price</label>
            <input class="edit-details__input" v-model="price" type="text" />
          </div>
        </div>
        <div class="edit-details__form-control">
          <label for="">Description</label>
          <textarea
            v-model="description"
            class="edit-details__input--alt"
            rows="7"
          ></textarea>
        </div>
        <button class="edit-details__button">Add Product</button>
      </form>
    </base-card>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.edit-details {
  &__heading {
    text-align: center;
    margin: 1rem 0rem;
  }

  &__card {
    width: 25rem;
    margin: 0 auto;
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
