<script>
// import ApiServerData from '../components/ApiServerData.vue';
// import ProductsView from '../components/ProductsView.vue'
import Login from '../components/Login.vue'

export default {
  name: 'HomeView',
  props: [],
  methods: {
  },
  data () {
    return {
      welcomeMsg: "Greetings component!"
    };
  },
  components: {
<<<<<<< HEAD
    ProductsView
  },
  // object syntax is required
  // when declaring default values for injections
  inject: {
    message: {
      from: 'message', // this is optional if using the same key for injection
      default: 'default value'
    },
    user: {
      // use a factory function for non-primitive values that are expensive
      // to create, or ones that should be unique per component instance.
      default: () => ({ name: 'John' })
    }
  }
=======
    Login
},
>>>>>>> 7ff16515a4f1e43bba6522578fd5cec5a09a3b9d
}

</script>

<template>
  <div>
<<<<<<< HEAD
    <ProductsView :displaymessage='welcomeMsg' />
    <h2>HomeView</h2>
    {{ user }}
=======
    <Login />
>>>>>>> 7ff16515a4f1e43bba6522578fd5cec5a09a3b9d
  </div>

</template>

<style scoped>
</style>
