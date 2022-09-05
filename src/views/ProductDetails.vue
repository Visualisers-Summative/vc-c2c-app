<template>
  <div v-if="record" class="product-details-container">

    <div class="product-details">
      <img :src="record.imageURL" alt="Record cover" class="record-image">
      <!-- <p>{{ record.imageURL }}</p> -->
      <p class="record-artist">{{ record.artistName }}</p>
      <p class="record-album">{{ record.albumTitle }}</p>
      <p class="record-genre">{{ record.genre }}</p>
      <p class="record-year">{{ record.yearReleased }}</p>
      <p class="record-length">{{ record.length }}</p>
      <p class="record-price">{{ record.price }}</p>
      <p class="record-description">{{ record.albumDescription }}</p>
    </div>

  </div>

</template>

<script>
import ProductService from '../services/ProductService.js';
export default {
  props: ['id'],
  data () {
    return {
      record: [],

    }
  },
  created () {
    ProductService.getProduct(this.id)
      .then(response => {
        // console.log(response.data);
        this.record = response.data
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss" scoped>
</style>