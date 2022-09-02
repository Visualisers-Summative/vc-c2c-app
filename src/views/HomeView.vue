
<template>
  <!-- <div>
    <SignUp />
  </div> -->

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
          _id: { "$oid": "630deef8526c94a572442cb0" },
          albumTitle: "Lew Davies & His Orchestra",
          artistName: "Two Pianos & Twenty Voices",
          genre: ["jazz", ""],
          albumDescription: "",
          yearReleased: "1960",
          imageURL: "https://i.ibb.co/YyBHLWX/52241783421-e609ab33ed-4k-1.png",
          length: "lp",
          price: "50"
        },
        {
          _id: { "$oid": "630deef8526c94a572442cb0" },
          albumTitle: "Lew Davies & His Orchestra",
          artistName: "Two Pianos & Twenty Voices",
          genre: ["jazz", ""],
          albumDescription: "",
          yearReleased: "1960",
          imageURL: "https://i.ibb.co/YyBHLWX/52241783421-e609ab33ed-4k-1.png",
          length: "lp",
          price: "50"
        },
        {
          _id: { "$oid": "630deef8526c94a572442cb0" },
          albumTitle: "Lew Davies & His Orchestra",
          artistName: "Two Pianos & Twenty Voices",
          genre: ["jazz", ""],
          albumDescription: "",
          yearReleased: "1960",
          imageURL: "https://i.ibb.co/YyBHLWX/52241783421-e609ab33ed-4k-1.png",
          length: "lp",
          price: "50"
        },
        {
          _id: { "$oid": "630deef8526c94a572442cb0" },
          albumTitle: "Lew Davies & His Orchestra",
          artistName: "Two Pianos & Twenty Voices",
          genre: ["jazz", ""],
          albumDescription: "",
          yearReleased: "1960",
          imageURL: "https://i.ibb.co/YyBHLWX/52241783421-e609ab33ed-4k-1.png",
          length: "lp",
          price: "50"
        },
        {
          _id: { "$oid": "630deef8526c94a572442cb0" },
          albumTitle: "Lew Davies & His Orchestra",
          artistName: "Two Pianos & Twenty Voices",
          genre: ["jazz", ""],
          albumDescription: "",
          yearReleased: "1960",
          imageURL: "https://i.ibb.co/YyBHLWX/52241783421-e609ab33ed-4k-1.png",
          length: "lp",
          price: "50"
        },
        {
          _id: { "$oid": "630deef8526c94a572442cb0" },
          albumTitle: "Lew Davies & His Orchestra",
          artistName: "Two Pianos & Twenty Voices",
          genre: ["jazz", ""],
          albumDescription: "",
          yearReleased: "1960",
          imageURL: "https://i.ibb.co/YyBHLWX/52241783421-e609ab33ed-4k-1.png",
          length: "lp",
          price: "50"
        }
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


<style lang="scss" scoped>
.product-container {
  column-count: 3;
}
</style>

