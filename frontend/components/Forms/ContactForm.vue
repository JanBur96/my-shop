<template>
  <section class="contact-form" id="contact">
    <base-card class="contact-form__card">
      <form class="contact-form__form" @submit.prevent="$emit('contactAction')">
        <div class="contact-form__form-control--col-2">
          <base-form-control class="contact-form__form-control">
            <label for="name">Your Name</label>
            <input
              class="contact-form__input"
              type="text"
              name="name"
              :value="mode === 'productContact' ? me.name : ''"
            />
          </base-form-control>
          <base-form-control class="contact-form__form-control">
            <label for="email">Your Email</label>
            <input
              disabled
              class="contact-form__input"
              type="text"
              name="email"
              :value="mode === 'productContact' ? me.email : ''"
            />
          </base-form-control>
        </div>
        <base-form-control v-if="mode !== 'productContact'">
          <label for="topic">Topic</label>
          <select class="contact-form__input" name="topic">
            <option value="">Question</option>
            <option value="">Login/Register</option>
            <option value="">Bug/Problem</option>
            <option value="">Delete Me</option>
          </select>
        </base-form-control>
        <base-form-control class="contact-form__form-control">
          <label for="message">Message</label>
          <textarea
            class="contact-form__input--area"
            type="text"
            name="message"
            rows="7"
          ></textarea>
        </base-form-control>
        <button class="contact-form__button">Submit</button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  props: {
    me: {
      type: Object,
      required: false
    },
    mode: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  &__card {
    width: 25rem;
    margin: 1rem auto;
    padding: 1.25rem 2rem;
  }

  &__form {
    width: 100%;
  }

  &__form-control {
    &--col-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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
    font-size: 1rem;
    outline-color: var(--main-color);

    &--area {
      width: 100%;
      height: unset;
      margin-top: 0.2rem;
      padding: 0.25rem;
      border: 1px solid rgba($color: #000000, $alpha: 0.2);
      border-radius: 5px;
      font-size: 1rem;
      font-family: inherit;
    }
  }

  &__button {
    width: 100%;
    height: 1.7rem;
    margin-top: 0.2rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: var(--main-color);
    cursor: pointer;
  }
}
</style>
