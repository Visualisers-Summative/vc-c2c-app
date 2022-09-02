
<script>
// import ApiServerData from '../components/ApiServerData.vue';
// import ProductsView from '../components/ProductsView.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue';

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
    Login,
    SignUp
  },
}
</script>

<template>
  <div>
    <SignUp />
  </div>


  <div>
    <Login />
  </div>


</template>
      
<style scoped>
</style>