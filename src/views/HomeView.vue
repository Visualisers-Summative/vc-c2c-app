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
    Login
},
}
</script>

<template>
  <div>
    <Login />
  </div>

</template>

<style scoped>
</style>
