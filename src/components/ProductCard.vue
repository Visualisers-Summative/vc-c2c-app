<template>
  <div class="product-card-container">

    <div class="product-card">
      <img :src="vinyls.imageURL" alt="Record cover">
      <p class="artist">{{ vinyls.artistName }}</p>
      <p class="album">{{ vinyls.albumTitle }}</p>
      <p class="length">{{ vinyls.length }}</p>
      <p class="price">{{ vinyls.price }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    vinyls: Object
  },
  data () {
    return {

    }
  }
}

</script>

<style lang="scss" scoped>
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>