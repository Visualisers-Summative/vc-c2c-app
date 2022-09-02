
<template>
  <!-- <div>
    <SignUp />
  </div> -->


  <!-- <div v-for="(item, index) in recordsTwo" :key="index">
    <p>item: {{ item._id }}</p>
    <hr>
    <p>{{ item.imageUrl }}</p>
    <img class="card_image" :src="image" alt="instruments" />
  </div> -->


  <div>
    <Login />
  </div>

  <div class="product-container">
    <ProductCard v-for="vinyl in records" :key="vinyl.id" :vinyls="vinyl" />
  </div>


</template>


<script>
// import ApiServerData from '../components/ApiServerData.vue';
// import ProductsView from '../components/ProductsView.vue'
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import ProductCard from '../components/ProductCard.vue';
import ProductService from '../services/ProductService.js';
// import { get } from 'http';

const api = 'https://vc-products.netlify.app/.netlify/functions/api/'

export default {

  name: 'HomeView',
  props: [],
  methods: {
  },
  data () {
    return {
      records: null,
      // recordsTwo: [{
      //   imgUrl: ''
      // }],
      image: ''
    };
  },
  components: {
    Login,
    SignUp,
    ProductCard
  },
  methods: {
    // getImageBlob (imageUrl) {
    //   return axios.get(imageUrl).then(response => window.URL.createObjectURL(response.data))
    // }
  },
  created () {
    ProductService.getProducts()
      .then(response => {
        // console.log(response.data);
        this.records = response.data
        // this.recordsTwo = response.data
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

