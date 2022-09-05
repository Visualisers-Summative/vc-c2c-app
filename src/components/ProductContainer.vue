<template>
  <div class="product-container">
    <ProductCard v-for="vinyl in records" :key="vinyl.id" :vinyls="vinyl" />
  </div>

</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import ProductService from '../services/ProductService.js';
export default {
  name: "ProductContainer",
  props: {
    vinyls: Object
  },
  data() {
    return {
      records: null
    }
  },
  methods: {
  },
  components: {
    ProductCard
  },
  filters: {

  },
  created() {
    ProductService.getProducts()
      .then(response => {
        // console.log(response.data);
        this.records = response.data
      })
      .catch(error => {
        console.log(error);
      })
  }
}

</script>

<style lang="scss">
.product-container {
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>