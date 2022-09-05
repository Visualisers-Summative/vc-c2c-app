
<template>
  <!-- <div>
    <SignUp />
  </div> -->

  <div>
    <Login />
  </div>

  <!-- <div class="product-container">
    <ProductCard v-for="vinyl in records" :key="vinyl.id" :vinyls="vinyl" />
  </div> -->

  <div>
    <ProductContainer />
  </div>

</template>


<script>
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
// import ProductCard from '../components/ProductCard.vue';
// import ProductService from '../services/ProductService.js';
// const api = 'https://vc-products.netlify.app/.netlify/functions/api/'
import ProductContainer from '../components/ProductContainer.vue';

export default {

  name: 'HomeView',
  props: [],
  methods: {
  },
  data () {
    return {
      // records: null,
      // recordsTwo: [],
      // image: '',
      // data: {
      //   users: []
      // }
    };
  },
  components: {
    Login,
    SignUp,
    // ProductCard
    ProductContainer
  },
  // created () {
  //   ProductService.getProducts()
  //     .then(response => {
  //       // console.log(response.data);
  //       this.records = response.data
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
}
</script>


<style lang="scss" scoped>
.product-container {
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>

