
<template>
  <!-- <div>
    <SignUp />
  </div> -->

  <div>
    <Login />
  </div>

  <div class="product-container">
    <ProductCard v-for="vinyl in records" :key="vinyl.id" :vinyls="vinyl" />
  </div>

</template>


<script>
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import ProductCard from '../components/ProductCard.vue';
import ProductService from '../services/ProductService.js';
// const api = 'https://vc-products.netlify.app/.netlify/functions/api/'

export default {

  name: 'HomeView',
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
    Login,
    SignUp,
    ProductCard
  },
  methods: {

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
  column-count: 3;
}
</style>

