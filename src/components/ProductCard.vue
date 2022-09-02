<template>
  <div class="product-card-container">

    <div class="product-card">
      <img :src="vinyls.image" alt="Record cover">
      <!-- <img class="user-image" :src="profile.devImageUrl" alt="image missing"> -->
      <h4>{{ vinyls.artist }}</h4>
      <h3>{{ vinyls.title }}</h3>
      <p>{{ vinyls.description }}</p>
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

<style lang="scss">
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>