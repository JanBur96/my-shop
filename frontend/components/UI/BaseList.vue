<template>
  <section class="base-list">
    <h3 class="base-list__heading">{{ category }}</h3>
    <div v-if="mode === 'sort'">
      <label for="sort">Sort By</label>
      <select name="sort" class="base-list__input" @change="sortBy($event)">
        <option value="-createdAt">Date (New-Old)</option>
        <option value="createdAt">Date (Old-New)</option>
        <option value="-price">Price (High-Low)</option>
        <option value="price">Price (Low-High)</option>
        <option value="title">Title</option>
        <option value="location">Location</option>
      </select>
    </div>
    <ul
      :class="
        modeList === 'searchList' ? 'base-list__searchList' : 'base-list__list'
      "
    >
      <BaseListItem
        v-for="product in products"
        :key="product._id"
        :title="product.title"
        :location="product.location"
        :price="product.price"
        :id="product._id"
        :photo="product.photo"
      />
    </ul>
  </section>
</template>

<script>
export default {
  name: "BaseList",
  methods: {
    async sortBy(event) {
      const sortBy = event.target.value;

      this.$emit("sortProducts", sortBy);
    }
  },
  props: {
    mode: {
      type: String,
      required: false
    },
    modeList: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    },
    products: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.base-list {
  &__heading {
    text-transform: capitalize;
  }

  &__list {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
  }

  &__searchList {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 11rem));
    gap: 1rem;
  }

  &__input {
    height: 1.6rem;
    margin-top: 0.2rem;
    padding-left: 0.25rem;
    font-size: 1rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }
}
</style>
