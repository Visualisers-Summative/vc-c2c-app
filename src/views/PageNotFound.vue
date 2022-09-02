<script setup>



</script>

<template>

   <div>
    <h2>404 - This page does not exist</h2>
    <h1>Whoopsie something went wrong!</h1>
    <p>Please return home again. Yay!</p>
  </div>

  <router-link to="/" class="top">Return home</router-link>
  <router-view />

</template>

<style lang="scss">

  div {
    height: 30rem;
  }

  h2 {
    margin: auto 0;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  h1 {
    margin: auto 0;
    align-items: center;
    text-align: center;
    padding: 20px;
  }

  p {
    margin: auto 0;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
</style>
