<template>
  <main class="my-profile">
    <base-container>
      <BaseHeader image="myprofile-header.jpg" heading="User Profile" />
      <h3 class="my-profile__heading">{{ user.name }}'s Details</h3>
      <base-card class="my-profile__card">
        <section class="my-profile__infos">
          <MyProfilePageDetails
            :name="user.name"
            :email="user.email"
            :location="user.location"
          />
          <MyProfilePageProducts :products="user.products" />
        </section>
      </base-card>
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      finishedFetch: false
    };
  },
  async asyncData({ params, $axios }) {
    let user = await $axios.get(`/users/${params.user}`);
    user = user.data.data;

    return { user };
  }
};
</script>

<style lang="scss" scoped>
.my-profile {
  &__heading {
    margin-top: 1rem;
  }

  &__card {
    margin-top: 0.5rem;
  }

  &__infos {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
}
</style>
