<script setup>

import FooterRow from '../src/components/FooterRow.vue'

import HeaderRow from '../src/components/HeaderRow.vue';



</script>

<template>




  <div class="header">
    <HeaderRow />
  </div>


  <div class="body">
    <router-view />
  </div>



  <div class="footer">
    <FooterRow />
  </div>



</template>



<style scoped>
</style>
