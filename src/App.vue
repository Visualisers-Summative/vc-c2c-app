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
      <div class="profile-cmp">
        <router-link
          v-if="loggedUser"
          to="/Profile"
          class="profile-icon"
        >
          <span class="profile-circle">{{ loggedUser.charAt(0) }}</span>
        </router-link>

        <router-link
          v-if="loggedUser"
          to="/Profile"
          class="top"
        >
          Profile</router-link
        >
        <span
          v-if="loggedUser"
          class="profile-options text"
          >|</span
        >
        <router-link
          to="/#"
          class="profile-options text"
          v-if="loggedUser"
          @click="logout"
          title="Logout"
        >
          <span>Logout</span>
        </router-link>
        <span
          v-if="loggedUser"
          class="profile-options"
          >|</span
        >
        <span
          v-if="loggedUser"
          class="profile-options text"
          >Cart</span
        >
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

  <div class="login">
    <Login
      class="login-form"
      @logged-user="setLoggedUser"
      v-if="isLoginVisible == true"
    />
    <router-view
      :class="{ loggedin: loggedUser, loggedout: !loggedUser }"
      class="loginform"
    />
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
      loggedUser: '',
      loginform: false,
      isLoginVisible: true,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedUser')
      localStorage.removeItem('userId')
      document.location.reload(true) // force page reload
      // document.location.router('/')
      window.location = '/'
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
      console.log('loggedUSER:' + localStorage.userId)
    }
    if (localStorage.userId) {
      this.isLoginVisible = false
    }
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.text {
  cursor: pointer;
}

.text:hover {
  text-decoration: underline;
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

.login {
  background-color: rgba(255, 255, 255, 0.65);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 2rem;
}

.loggedout {
  z-index: -1;
  max-height: 50rem;
  transform: translateY(-105%) scale(0.9);
  overflow-y: hidden;
  margin-bottom: -70%;
}

.loggedin {
  transform: none;
  z-index: 0;
  max-height: none;
  margin-top: 1rem;
  margin-bottom: -8rem;
}

.search-icon {
  width: 18px;
  height: 18px;
}

.profile-circle {
  height: 50px;
  width: 50px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background-image: linear-gradient(to right, blue, green);
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

.profile-icon {
  margin-right: 0.5em;
}

.profile-icon:hover {
  text-decoration: none;
}

.footer {
  margin-top: 4rem;
  position: absolute;
  padding: 2rem 0rem;
  width: clamp(40rem, 80%, 80rem);
  z-index: 0;
}

@media only screen and (max-width: 1500px) {
  .footer {
    margin-top: -6rem;
  }
}

@media only screen and (max-width: 1200px) {
  .footer {
    margin-top: -16rem;
  }

}
</style>
