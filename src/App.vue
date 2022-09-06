<script>
import HeaderRow from './components/HeaderRow.vue';
import FooterRow from './components/FooterRow.vue';

export default {
  components: { FooterRow, HeaderRow },
  name: 'App',

  data: () => ({
    // loggedUser: "guest"
  }),
  methods: {
    // setLoggedUser(loggedInUser) {
    //   this.loggedUser = loggedInUser;
    // }
  }
};
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
