<template>
  <div class="divider-line">
    <hr />
  </div>
  <div class="footer">
    <ul>
      <li>About Us</li>
      <li>Blog</li>
      <li>Careers</li>
      <li>API</li>
      <li>Change Log</li>
    </ul>
    <ul>
      <li>Help and Support</li>
      <li>FAQ's</li>
      <li>Forum</li>
      <li>Database Guidelines</li>
      <li>Chords Shipping</li>
    </ul>
    <ul>
      <li>Get Started</li>
      <li>Sign Up</li>
      <li>Record Stores</li>
      <li>Contribute</li>
      <li>Add Release</li>
    </ul>
    <ul>
      <li>Subscribe</li>
      <li>YouTube</li>
      <li>Instgram</li>
      <li>Facebook</li>
      <li>Soundcloud</li>
    </ul>
    <ul>
      <li>Terms and Service</li>
      <li>Privacy Policy</li>
      <li>____________________</li>
      <li>
        <router-link
          to="/#"
          class="profile-options text"
          @click="logout"
          title="Logout"
        >
          <span class="bold">Logout</span>
        </router-link>
      </li>
      <li>© 2022 Chords</li>
    </ul>

    <div>
<<<<<<< HEAD
      <router-link to="/#"
        ><img
          src="../assets/images/c.png"
          alt="C-logo"
          class="logo-c"
      /></router-link>
=======
      <router-link to="/#"><img src="../assets/images/c.png"
          alt="C-logo"
          class="logo-c"></router-link>
>>>>>>> 373282a8131de6ec7c51de3388b5094552128793
    </div>
  </div>
</template>

<<<<<<< HEAD
<script>
export default {
  name: 'FooterRow',
  data() {
    return {}
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedUser')
      localStorage.removeItem('userId')
      document.location.reload(true) // force page reload
      window.location = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  // position: relative;
=======
<script >
export default {
  name: "FooterRow",
  data() {
    return {

    }
  }
}
</script>
  
<style lang="scss" scoped>
.footer {
  position: relative;
>>>>>>> 373282a8131de6ec7c51de3388b5094552128793
  top: 3rem;
  bottom: 3rem;
  display: flex;
  margin: auto 0;
  margin-bottom: 3rem;
<<<<<<< HEAD
=======
  ;
>>>>>>> 373282a8131de6ec7c51de3388b5094552128793
  flex-direction: row;
  justify-content: space-between;
  line-height: 1.5rem;
}

.divider-line {
  margin-top: 3rem;
}

li:hover {
  text-decoration: underline;
}

li {
  font-size: 0.85rem;
  cursor: pointer;
}

.logo-c {
  width: 3rem;
}
<<<<<<< HEAD

.bold {
  font-weight: bold;
}
</style>
=======
</style>
  
>>>>>>> 373282a8131de6ec7c51de3388b5094552128793
