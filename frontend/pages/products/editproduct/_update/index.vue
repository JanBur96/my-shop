<template>
  <main class="edit-product">
    <base-container>
      <BaseHeader heading="Edit Product" image="editproduct-header.jpg" />
      <h3 class="edit-product__heading-3">
        Edit your product
      </h3>
      <ProductForm
        mode="update"
        @productAction="productAction"
        :product="product"
      />
    </base-container>
  </main>
</template>

<script>
export default {
  middleware: "auth",
  name: "UpdateProduct",
  methods: {
    async productAction(data) {
      if (data.type === "editProduct") {
        const num = Number(data.price);
        const roundedString = num.toFixed(2);
        const rounded = Number(roundedString);

        await this.$axios.put(
          `/products/${this.$route.params.update}`,
          {
            categories: data.category,
            title: data.title,
            description: data.description,
            location: data.location,
            price: rounded
          },
          this.$router.push("/users/myprofile")
        );
      } else if (data.type === "deleteProduct") {
        await this.$axios.delete(`/products/${this.$route.params.update}`);
        this.$router.push("/users/myprofile");
      } else if (data.type === "goBack") {
        this.$router.push("/users/myprofile");
      } else if (data.type === "uploadImage") {
        const formData = new FormData();

        formData.append("file", data.file);

        await this.$axios.put(
          `/products/${this.$route.params.update}/photo`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

        setTimeout(() => {
          this.$router.push("/users/myprofile");
        }, 1500);
      }
    }
  },
  async asyncData({ params, $axios, redirect }) {
    let product = await $axios.get(`/products/${params.update}`);
    product = product.data.data;

    let user = await $axios.get("/auth/me");

    user = user.data.data;

    if (product.user !== user._id) {
      redirect("/");
    }

    return { product };
  }
};
</script>

<style lang="scss" scoped>
.edit-product {
  &__heading-3 {
    text-align: center;
  }
}
</style>
