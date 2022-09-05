<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: vinyls._id } }" class="top">
    <div class="product-card-container">

      <div class="product-card">
        <img :src="vinyls.imageURL" alt="Record cover">
        <!-- <p>{{ vinyls.imageURL }}</p> -->
        <p class="artist">{{ vinyls.artistName }}</p>
        <p class="album">{{ vinyls.albumTitle }}</p>
        <p class="length">{{ vinyls.length }}</p>
        <p class="price">{{ vinyls.price }}</p>
        <svg-icon type="mdi" :path="path"></svg-icon>
      </div>

    </div>
  </router-link>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
// import { mdiAccount } from '@mdi/js'
import { mdiHeartOutline } from '@mdi/js';

export default {
  name: "ProductCard",
  props: {
    vinyls: Object
  },
  data () {
    return {
      path: mdiHeartOutline,
    }
  }, components: {
    SvgIcon
  }
}

</script>

<style lang="scss" scoped>
.product-card {
  padding: 20px;
  width: 250px;
  height: 20rem;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
