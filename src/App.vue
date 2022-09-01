<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup


</script>

<template>

  <div class="nav-links">
    <router-link to="/" class="top">Buy</router-link> |
    <router-link to="/Sell" class="top">Sell</router-link> |
    <router-link to="/Profile" class="top">Profile</router-link>
  </div>

  <div class="body">
    <router-view />
  </div>

</template>

<style>
/* GLOBAL STYLES */
h1 {
  padding-top: 1rem;
}
</style>
