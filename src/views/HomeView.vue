
<template>
  <div>
    <SignUp />
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
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue';
import ProductCard from '../components/ProductCard.vue';

export default {

  name: 'HomeView',
  props: [],
  methods: {
  },
  data () {
    return {
      records: [
        {
          id: 5928101,
          artist: 'Cat Steven',
          title: 'Cats Day Out',
          description: 'Find your new feline friend at this event.',
          year: '1982',
          genre: 'jazz',
          price: '$42',
          image: 'https://picsum.photos/200'
        },
        {
          id: 6966101,
          artist: 'Steven Irwin',
          title: 'Rays Day Out',
          description: 'Find your new stingray friend at this event.',
          year: '1998',
          genre: 'hardcore',
          price: '$102',
          image: 'https://loremflickr.com/200/200'
        },
        {
          id: 5466101,
          artist: 'Kids Bop',
          title: 'New kids on the bop',
          description: 'Find your new friend at this event.',
          year: '2018',
          genre: 'pop',
          price: '$3',
          image: 'https://loremflickr.com/200/200'
        },
      ]
    };
  },
  components: {
    Login,
    SignUp,
    ProductCard
  },
}
</script>


      


<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

