<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item" v-if="prevPagination" @click="emitPrev">
        <fa class="pagination__icon" :icon="['fas', 'arrow-left']" />
      </li>
      <li class="pagination__item">{{ page }}</li>
      <li class="pagination__item" v-if="nextPagination" @click="emitNext">
        <fa class="pagination__icon" :icon="['fas', 'arrow-right']" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListPagination",
  data() {
    return {
      products: []
    };
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    nextPagination: {
      type: Number
    },
    prevPagination: {
      type: Number
    }
  },
  methods: {
    emitNext() {
      this.$emit("nextPage");
    },
    emitPrev() {
      this.$emit("prevPage");
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &__list {
    display: flex;
  }

  &__item {
    width: 2rem;
    height: 2rem;
    margin: 0 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    box-shadow: 0 0 2px 1px rgba($color: #000000, $alpha: 0.2);
  }

  &__icon {
    cursor: pointer;
  }
}
</style>
