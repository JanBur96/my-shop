<template>
  <main class="contact">
    <base-container>
      <BaseHeader image="contact-header.jpg" heading="Contact" />
      <h3 class="contact__heading">{{ `Contact ${user.name}` }}</h3>
      <ContactForm
        :me="me"
        mode="productContact"
        @contactAction="contactUser"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  name: "Contact",
  async asyncData({ params, $axios }) {
    let product = await $axios.get(`/products/${params.product}`);
    product = product.data.data;

    let user = await $axios.get(`/users/${product.user}`);
    user = user.data.data;

    let me = await $axios.get("/auth/me");
    me = me.data.data;

    return { product, user, me };
  },
  methods: {
    contactUser() {
      console.log(
        "Sending email to seller over our sytem. We're using console.log since we don't have one :)"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__heading {
    text-align: center;
  }
}
</style>
