
<template>
  <!-- <div>
    <SignUp />
  </div> -->

  <div class="view">
    <div class="login-cmp">
      <Login />
    </div>

    <!-- <div class="product-container">
    <ProductCard v-for="vinyl in records" :key="vinyl.id" :vinyls="vinyl" />
  </div> -->

    <div>
      <ProductContainer />
    </div>
  </div>

</template>


<script>
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
// import ProductCard from '../components/ProductCard.vue';
// import ProductService from '../services/ProductService.js';
import ProductContainer from '../components/ProductContainer.vue';

export default {
  name: 'HomeView',
  props: [],
  methods: {
  },
  data () {
    return {
      // records: null,
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
.view {
  height: 90vh;
  overflow: hidden;
  width: clamp(40rem, 80%, 80rem);
}

.login-cmp {
  width: clamp(40rem, 80%, 80rem);
  height: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  position: absolute;
  z-index: 1;
}

.product-container-cmp {
  width: 80%;
  margin: 9rem auto 0 auto;
}
</style>

