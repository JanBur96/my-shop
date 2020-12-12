<template>
  <main class="user-profile">
    <base-container>
      <BaseHeader image="myprofile-header.jpg" heading="User Profile" />
      <h3 class="user-profile__heading">{{ user.name }}'s Details</h3>
      <base-card class="user-profile__card">
        <section class="user-profile__infos">
          <PageProfileDetails
            :name="user.name"
            :email="user.email"
            :location="user.location"
          />
          <PageProfileProducts :products="user.products" />
        </section>
      </base-card>
    </base-container>
  </main>
</template>

<script>
export default {
  name: "UserProfile",
  async asyncData({ params, $axios }) {
    let user = await $axios.get(`/users/${params.user}`);
    user = user.data.data;

    return { user };
  },
  provide: {
    mode: "uneditable"
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
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
