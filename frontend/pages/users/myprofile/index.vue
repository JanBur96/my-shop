<template>
  <main class="my-profile">
    <base-container>
      <BaseHeader image="myprofile-header.jpg" heading="My Profile" />
      <h3 class="my-profile__heading">Hello {{ myProfile.name }}</h3>
      <p v-if="!finishedFetch">Loading...</p>
      <base-card class="my-profile__card" v-else>
        <section class="my-profile__infos">
          <PageProfileDetails
            :name="this.myProfile.name"
            :email="this.myProfile.email"
            :location="this.myProfile.location"
          />
          <PageProfileProducts :products="this.myProfile.products" />
        </section>
      </base-card>
    </base-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      myProfile: {},
      finishedFetch: false
    };
  },
  provide: {
    mode: "editable"
  },
  async beforeMount() {
    const myProfile = await this.$axios.get("/auth/me");
    this.myProfile = myProfile.data.data;
    this.finishedFetch = true;
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
