<template>
  <div class="view">
    <!-- <div class="signup-cmp">
      <SignUp />
    </div> -->

    <div>
      <ProductContainer />
    </div>
  </div>
</template>

<script>
// const api = 'https://vc-products.netlify.app/.netlify/functions/api/'

// import Login from '../components/Login.vue'
// import SignUp from '../components/SignUp.vue'
// import ProductCard from '../components/ProductCard.vue';
// import ProductService from '../services/ProductService.js';
import ProductContainer from '../components/ProductContainer.vue'

export default {
  name: 'HomeView',
  props: [],
  data() {
    return {}
  },
  // methods: {
  //   logout() {
  //     localStorage.removeItem('loggedUser')
  //     localStorage.removeItem('userId')
  //     document.location.reload(true) // force page reload
  //   },
  //   setLoggedUser(loggedInUser) {
  //     this.loggedUser = loggedInUser
  //   },
  //   login() {
  //     this.loginform = true
  //   },
  // },
  // mounted() {
  //   if (localStorage.loggedUser) {
  //     this.loggedUser = localStorage.loggedUser
  //   }
  // },
  components: {
    // Login,
    // SignUp,
    ProductContainer,
  },
}
</script>

<style lang="scss" scoped></style>
