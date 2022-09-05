<template>

  <div class="product-container">
    <ProductCard v-for="vinyl in records" :key="vinyl.id" :vinyls="vinyl" />
  </div>

</template>


<script>
import ProductCard from '../components/ProductCard.vue';
import ProductService from '../services/ProductService.js';
// const api = 'https://vc-products.netlify.app/.netlify/functions/api/'

export default {

  name: 'ProductContainer',
  props: [],
  methods: {
  },
  data () {
    return {
      records: null,
      // recordsTwo: [],
      // image: '',
      data: {
        users: []
      }
    };
  },
  components: {
    ProductCard
  },
  created () {
    ProductService.getProducts()
      .then(response => {
        // console.log(response.data);
        this.records = response.data
      })
      .catch(error => {
        console.log(error);
      })
  },
}
</script>


<style lang="scss" scoped>
.product-container {
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>

