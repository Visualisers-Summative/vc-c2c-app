<template>
  
  <div class="header-container">
    <div>
      <a href="#">
        <img src="../assets/images/Chords.svg" alt="chords-logo" class="logo">
      </a>
      <div class="nav-links">
        <router-link to="/" class="top">Buy</router-link> |
        <router-link to="/Sell" class="top">Sell</router-link>
      </div>
    </div>

    <div class="search-child">
      <router-link to="/Profile" class="top">Profile</router-link> | Cart
        <div class="search">
        <input type="search" name="search" class="search-inp">
        </div>
    </div>
  </div>
  <hr>



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


.header-container {
  height: auto;
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 14rem;
  // margin-bottom: 4rem;
  }

  .nav-links {
    margin-top: 0.75rem;
  }

input {
    font-size: 1rem;
    height: 2.5rem;
    width: 14rem;
    margin-top: 0.5rem;
    margin-bottom: 5px;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid black;
    margin-bottom: 4rem;
  }

  .search-child {
    text-align: right;
  }

</style>