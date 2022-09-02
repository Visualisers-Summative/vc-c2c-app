
<template>
  <!-- <div>
    <SignUp />
  </div> -->


  <!-- <div v-for="(item, index) in recordsTwo" :key="index">
    <p>item: {{ item._id }}</p>
    <hr>
    <p>{{ item.imageUrl }}</p>
    <p>{{ item.imgUrl }}</p>
    <img class="card_image" :src="image" alt="instruments" />
  </div> -->

  <div v-for="(user, index) in users" :key="index">
    <div>
      <p>{{ user.avatar }}</p>
      <img :src="user.avatar" alt="">
    </div>

  </div>

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
import axios from "axios";

const api = 'https://vc-products.netlify.app/.netlify/functions/api/'

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
    // getImageBlob (imageUrl) {
    //   return axios.get(imageUrl).then(response => window.URL.createObjectURL(response.data))
    // }
    getUser () {
      const URL = 'https://reqres.in/api/users/'
      axios
        .get(URL)
        .then(res => {
          console.log(res.data);
          this.users = res.data.data;
          console.log("users: " + this.users);
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  created () {
    ProductService.getProducts({ responseType: "json" })
      .then(response => {
        // console.log(response.data);
        this.records = response.data
        // this.recordsTwo = response.data
      })
      .catch(error => {
        console.log(error);
      })
  },
  mounted () {
    this.getUser()
  }


}
</script>


<style lang="scss" scoped>
.product-container {
  column-count: 3;
}
</style>

