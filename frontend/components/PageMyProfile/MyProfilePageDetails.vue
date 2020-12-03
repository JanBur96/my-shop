<template>
  <section class="my-profile__details">
    <div class="my-profile__wrapper">
      <h4 class="my-profile__heading">
        Your Details
        <fa class="my-profile__icon--heading" :icon="['fas', 'user-edit']" />
      </h4>

      <div class="my-profile__information">
        <div class="my-profile__information-control">
          <fa class="my-profile__icon" :icon="['far', 'user']" />
          <div class="row-2">
            <p class="my-profile__information-heading">Name:</p>
            <p>{{ name }}</p>
          </div>
        </div>
        <div class="my-profile__information-control">
          <fa class="my-profile__icon" :icon="['far', 'envelope']" />
          <div class="my-profile__row-2">
            <p class="my-profile__information-heading">Email:</p>
            <p>{{ email }}</p>
          </div>
        </div>
        <div class="my-profile__information-control">
          <fa class="my-profile__icon" :icon="['far', 'compass']" />
          <div class="my-profile__row-2">
            <p class="my-profile__information-heading">Location:</p>
            <p>{{ location }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false,
      default: "Not available"
    }
  }
};
</script>

<style lang="scss" scoped>
.my-profile {
  &__details {
    background-color: var(--main-color);
    color: white;
    border-radius: 0 10px 10px 0;
  }

  &__wrapper {
    width: 100%;
    padding: 0.5rem;
  }

  &__information {
    margin-top: 0.5rem;
  }

  &__heading {
    width: 100%;
    font-size: 1.25rem;
    color: white;
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-between;
  }

  &__information-control {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }

  &__information-heading {
    opacity: 0.8;
    font-size: 0.9rem;
  }

  &__icon {
    border-radius: 5px;
    margin-right: 0.5rem;
    font-size: 1.25rem;

    &--heading {
      cursor: pointer;
      margin-top: 2px;
    }
  }
}
</style>
