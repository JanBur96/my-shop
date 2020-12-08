<template>
  <section class="my-profile__details">
    <div class="my-profile__wrapper">
      <h4 class="my-profile__heading">
        {{ mode === "editable" ? "Your Details" : "Details" }}
        <fa
          v-if="mode === 'editable'"
          class="my-profile__icon--heading"
          :icon="['fas', 'user-edit']"
          @click="editUser = !editUser"
        />
      </h4>

      <div class="my-profile__information">
        <div class="my-profile__information-control">
          <fa class="my-profile__icon" :icon="['far', 'user']" />
          <div class="row-2">
            <p class="my-profile__information-heading">Name:</p>
            <p v-if="!editUser">{{ name }}</p>
            <input
              class="my-profile__input"
              v-else
              v-model="editName"
              :placeholder="name"
            />
          </div>
        </div>
        <div class="my-profile__information-control">
          <fa class="my-profile__icon" :icon="['far', 'envelope']" />
          <div class="my-profile__row-2">
            <p class="my-profile__information-heading">Email:</p>
            <p v-if="!editUser">{{ email }}</p>
            <input
              class="my-profile__input"
              v-else
              v-model="editEmail"
              :placeholder="email"
            />
          </div>
        </div>
        <div class="my-profile__information-control">
          <fa class="my-profile__icon" :icon="['far', 'compass']" />
          <div class="my-profile__row-2">
            <p class="my-profile__information-heading">Location:</p>
            <p v-if="!editUser">{{ location }}</p>
            <input
              class="my-profile__input"
              v-else
              v-model="editLocation"
              :placeholder="location"
            />
          </div>
        </div>
        <div class="my-profile__button-control">
          <button
            class="my-profile__button"
            v-if="editUser"
            @click="updateDetails"
          >
            Update
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="mode !== 'editable'"
      class="my-profile__wrapper my-profile__wrapper-2"
    >
      <ul class="my-profile__list">
        <li><button class="my-profile__button--alt">Message</button></li>
        <li><button class="my-profile__button--alt">Follow</button></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      editUser: false,
      editName: "",
      editEmail: "",
      editLocation: ""
    };
  },
  methods: {
    async updateDetails() {
      await this.$axios.put(
        `/auth/updatedetails`,
        {
          email: this.editEmail,
          name: this.editName,
          location: this.editLocation
        },
        location.reload()
      );
    }
  },
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
  },
  inject: ["mode"]
};
</script>

<style lang="scss" scoped>
.my-profile {
  &__details {
    background-color: var(--main-color);
    color: white;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__input {
    width: 100%;
    margin-top: 0.2rem;

    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
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

  &__button-control {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    width: 9rem;
    background-color: var(--main-color);
    color: white;
    border: none;
    border: 1px solid white;
    padding: 0.1rem;
    font-size: 0.9rem;
    border-radius: 5px;
    cursor: pointer;

    &--alt {
      width: 100%;
      height: 2rem;
      color: var(--main-color);
      border: 1px solid white;
      border-radius: 5px;
      background-color: white;
      font-size: 1rem;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
