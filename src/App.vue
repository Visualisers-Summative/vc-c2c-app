<script>
export default {
  name: 'App',
  props: [],
  methods: {
  },
  data() {
    return {
      records: null,
      data: {
        users: []
      }
    };
  },
  components: {
    Login, ProductContainer, SignUp, FooterRow, HeaderRow

  },
  methods: {
  }
}

import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import ProductContainer from './components/ProductContainer.vue';
import FooterRow from './components/FooterRow.vue';
import HeaderRow from './components/HeaderRow.vue';
</script>

<template>
<div class="header">
    <HeaderRow />
  </div>
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

  <div class="body">
    <router-view />
  </div>

</template>



<style lang="scss" scoped>
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
  margin: 0 auto;
}

.footer {
  margin-top: 9rem;
}
</style>
