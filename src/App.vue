<template>
  <div class="header-container">
    <div>
      <router-link to="/#">
        <img src="./assets/images/Chords2.svg" alt="chords-logo" class="logo" />
      </router-link>
      <div class="nav-links">
        <router-link to="/#" class="top">Buy</router-link> |
        <router-link to="/Profile" class="top">Sell</router-link>
      </div>
    </div>

    <div class="search-profile-container">
      <router-link to="/Profile" class="top">Profile</router-link>
      <div class="login-cmp">
        <Login @logged-user="setLoggedUser" v-if="loginform" />
        <span text rounded>{{ loggedUser }}</span>
        <span v-if="loggedUser != 'guest'" text rounded @click="logout" title="logout">
          <span> | logout</span>
        </span>
        <span v-else text rounded @click="login" title="login">
          <span> | login</span>
        </span>
      </div>
      <!-- | Cart -->
    
      <div class="box">
    <form name="search">
        <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();">
        <a href="#"><img class="search-icon"
              src="./assets/images/search.png" /></a>
    </form>
    
      </div>

    </div>
  </div>

  <hr />

  <!-- <div class="header">
    <HeaderRow />
  </div> -->

  <div class="body">
    <router-view />
  </div>

  <div class="footer">
    <FooterRow />
  </div>
</template>

<script>
// import HeaderRow from './components/HeaderRow.vue'
import FooterRow from './components/FooterRow.vue'
import Login from './components/Login.vue'


export default {
  components: { FooterRow, Login },
  name: 'App',
  data() {
    return {
      loggedUser: 'guest',
      loginform: false,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedUser')
      localStorage.removeItem('userId')
      document.location.reload(true) // force page reload
    },
    setLoggedUser(loggedInUser) {
      this.loggedUser = loggedInUser
    },
    login() {
      this.loginform = true
    },
  },
  mounted() {
    if (localStorage.loggedUser) {
      this.loggedUser = localStorage.loggedUser
    }
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 14rem;
}

.nav-links {
  margin-top: 0.75rem;
}

.search-profile-container {
  text-align: right;
}

.box{
    position: relative;
    margin-top: 1rem;
}
.input {
    padding: 10px;
    width: 40px;
    height: 40px;
    background: none;
    border: 1px solid #201f1b;
    border-radius: 50px;
    box-sizing: border-box;
    font-size: 15px;
    color: #000000;
    outline: none;
    transition: .5s;
}
.box:hover input{
    width: 350px;
    background: #ffffff;
    border-radius: 10px;
}
.box a{
    position: absolute;
    top: 52%;
    right: 1.8%;
    transform: translate(-50%,-50%);
    font-size: 15px;
    color: #030303;
    transition: .2s;
}
.box:hover a{
    opacity: 0;
    z-index: -1;
}

.search-icon {
  width: 18px;
  height: 18px;
}

.footer {
  margin-top: 6rem;
}
</style>
