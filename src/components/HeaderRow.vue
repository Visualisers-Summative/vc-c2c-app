<template>
  <div class="logo-header">
    <a href="#">
      <img src="../assets/images/Chords.svg" alt="chords-logo" class="logo">
    </a>

    <div class="nav-links">
      <router-link to="/" class="top">Buy</router-link> |
      <router-link to="/Sell" class="top">Sell</router-link> |
      <router-link to="/Profile" class="top">Profile</router-link>
    </div>


    <hr>
  </div>



</template>

<script>
export default {
  name: "HeaderRow",
  data () {
    return {

    }
  }
}

</script>

<style lang="scss" scoped>
.logo-header {
  height: auto;
  margin-bottom: 8rem;

  .logo {
    width: 14rem;
    margin-bottom: 4rem;
  }
}
</style>