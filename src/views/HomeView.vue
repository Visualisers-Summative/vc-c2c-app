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
}
</script>

<template>
  <div>
    <ProductsView :displaymessage='welcomeMsg' />
    <h2>HomeView</h2>
  </div>

</template>

<style scoped>
</style>
