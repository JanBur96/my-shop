<template>
  <section class="profile__details">
    <div class="profile__wrapper">
      <h4 class="profile__heading">
        {{ mode === "editable" ? "Your Details" : "Details" }}
        <fa
          v-if="mode === 'editable'"
          class="profile__icon--heading"
          :icon="['fas', 'user-edit']"
          @click="editUser = !editUser"
        />
      </h4>

      <form class="profile__information" @submit.prevent="updateDetails">
        <div class="profile__information-control">
          <fa class="profile__icon" :icon="['far', 'user']" />
          <div class="row-2">
            <p class="profile__information-heading">Name:</p>
            <p v-if="!editUser">{{ name }}</p>
            <input
              class="profile__input"
              v-else
              v-model="editName"
              :placeholder="name"
              type="text"
              required
            />
          </div>
        </div>
        <div class="profile__information-control">
          <fa class="profile__icon" :icon="['far', 'envelope']" />
          <div class="profile__row-2">
            <p class="profile__information-heading">Email:</p>
            <p v-if="!editUser">{{ email }}</p>
            <input
              class="profile__input"
              v-else
              v-model="editEmail"
              :placeholder="email"
              type="email"
              required
            />
          </div>
        </div>
        <div class="profile__information-control">
          <fa class="profile__icon" :icon="['far', 'compass']" />
          <div class="profile__row-2">
            <p class="profile__information-heading">Location:</p>
            <p v-if="!editUser">{{ location }}</p>
            <input
              type="text"
              required
              class="profile__input"
              v-else
              v-model="editLocation"
              :placeholder="location"
            />
          </div>
        </div>
        <div class="profile__button-control">
          <button class="profile__button" v-if="editUser">
            Update
          </button>
        </div>
      </form>
    </div>

    <div v-if="mode !== 'editable'" class="profile__wrapper profile__wrapper-2">
      <ul class="profile__list">
        <li><button class="profile__button--alt">Message</button></li>
        <li><button class="profile__button--alt">Follow</button></li>
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
.profile {
  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    background-color: var(--main-color);
    border-radius: 0 10px 10px 0;
  }

  &__wrapper {
    width: 100%;
    padding: 0.5rem;
  }

  &__heading {
    width: 100%;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    color: white;
    border-bottom: 1px solid;
    font-size: 1.25rem;
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
    margin-right: 0.5rem;
    font-size: 1.25rem;

    &--heading {
      cursor: pointer;
      margin-top: 2px;
    }
  }

  &__input {
    width: 100%;
    margin-top: 0.2rem;
    padding-left: 0.25rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    outline-color: var(--main-color);
  }

  &__button-control {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    width: 9rem;
    padding: 0.1rem;
    color: white;
    background-color: var(--main-color);
    border: none;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 0.9rem;
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
