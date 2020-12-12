<template>
  <main class="my-profile">
    <base-container>
      <BaseHeader image="myprofile-header.jpg" heading="My Profile" />
      <h3 class="my-profile__heading">Hello, {{ myProfile.name }}</h3>
      <base-card class="my-profile__card">
        <section class="my-profile__infos">
          <PageProfileDetails
            :name="myProfile.name"
            :email="myProfile.email"
            :location="myProfile.location"
          />
          <PageProfileProducts :products="myProfile.products" mode="editable" />
        </section>
      </base-card>
    </base-container>
  </main>
</template>

<script>
export default {
  name: "MyProfile",
  provide: {
    mode: "editable"
  },
  async asyncData({ $axios }) {
    let myProfile = await $axios.get("/auth/me");
    myProfile = myProfile.data.data;

    return { myProfile };
  }
};
</script>

<style lang="scss" scoped>
.my-profile {
  &__infos {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
}

@media (max-width: 450px) {
  .my-profile {
    &__infos {
      grid-template-columns: unset;
      grid-template-rows: 1fr 2fr;
    }
  }
}
</style>
