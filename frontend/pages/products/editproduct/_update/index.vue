<template>
  <main class="edit-product">
    <BaseHeader heading="Edit Product" image="editproduct-header.jpg" />
    <h3 class="edit-product__heading-3">
      Edit your product
    </h3>
    <ProductForm
      mode="update"
      @productAction="productAction"
      :product="product"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async productAction(data) {
      if (data.type === "editProduct") {
        await this.$axios.put(
          `/products/${this.$route.params.update}`,
          {
            categories: data.category,
            title: data.title,
            description: data.description,
            location: data.location,
            price: data.price
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
  async asyncData({ params, $axios }) {
    let product = await $axios.get(`/products/${params.update}`);
    product = product.data.data;

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
