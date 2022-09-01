<script>
// import ApiServerData from '../components/ApiServerData.vue';
import ProductsView from '../components/ProductsView.vue'

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
}

</script>

<template>
  <div>
    <ProductsView :displaymessage='welcomeMsg' />
    <h2>HomeView</h2>
    {{ user }}
  </div>

</template>

<style scoped>
</style>
