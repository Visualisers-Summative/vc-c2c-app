
<template>
  <!-- <div>
    <SignUp />
  </div> -->
  <div class="view">
    <div class="login-cmp">
      <Login />
    </div>
    <div class="product-container-cmp">
      <ProductContainer />
    </div>
  </div>
  <div class="footer">
    <FooterRow />
  </div>

</template>


<script>
import FooterRow from '../components/FooterRow.vue'
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import ProductContainer from '../components/ProductContainer.vue';
// const api = 'https://vc-products.netlify.app/.netlify/functions/api/'

export default {

  name: 'HomeView',
  props: [],
  methods: {
  },
  data() {
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
    FooterRow,
    Login,
    SignUp,
    ProductContainer,

  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
.header {
  display: none;
}

.view {
  margin: 0 auto;
  height: 90vh;
  overflow: hidden;
  width: 100%;
  min-width: 50rem;
}

.login-cmp {
  width: clamp(50rem, 80%, 80rem);
  height: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  position: absolute;
  z-index: 1;
}

.product-container-cmp {
  margin: 9rem auto 0rem auto;
}
.footer {
  padding-top: 6rem;
}
</style>