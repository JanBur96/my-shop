<template>
  <div class="main__pagination">
    <ul class="main__list">
      <li class="main__item" v-if="prevPagination" @click="emitPrev">
        <fa class="my-profile__icon" :icon="['fas', 'arrow-left']" />
      </li>
      <li class="main__item">{{ page }}</li>
      <li class="main__item" v-if="nextPagination" @click="emitNext">
        <fa class="my-profile__icon" :icon="['fas', 'arrow-right']" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  props: {
    page: {},
    nextPagination: {},
    prevPagination: {}
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
.main {
  &__list {
    display: flex;
  }

  &__item {
    width: 2rem;
    height: 2rem;
    margin: 0 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    box-shadow: 0 0 2px 1px rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
