<template>
  <div class="header-container">
    <div>
      <router-link to="/#">
        <img src="./assets/images/Chords.svg" alt="chords-logo" class="logo" />
      </router-link>
      <div class="nav-links">
        <router-link to="/#" class="top">Buy</router-link>
        |
        <router-link to="/Profile" class="top">Sell</router-link>
      </div>
    </div>

    <div class="search-profile-container">
      <div class="profile-cmp">

        <router-link v-if="loggedUser" to="/Profile" class="top">Profile</router-link>
        <span v-if="loggedUser" class="profile-options text">|</span>
        <router-link to="/#" class="profile-options text" v-if="loggedUser" @click="logout" title="Logout">
          <span>Logout</span>
        </router-link>
        <span v-if="loggedUser" class="profile-options">|</span>
        <span v-if="loggedUser" class="profile-options text">Cart</span>

      </div>

      <div class="search">
        <form class="search-container">
          <input type="text" id="search-bar" placeholder="Search..." />
          <a href="#"><img class="search-icon"
              src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
        </form>
      </div>
    </div>
  </div>
  <hr />
  <div class="login">
    <Login class="login-form" @logged-user="setLoggedUser" v-if="loggedUser != true" />
    <router-view :class="{ loggedin: loggedUser, loggedout: !loggedUser }" />
  </div>
  <div class="footer">
    <div class="show-footer" v-if="loginform != true">
      <FooterRow />
    </div>
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
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedUser')
      localStorage.removeItem('userId')
      this.loginform = false
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
      console.log('loggedUSER' + localStorage.userId)
    }
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-between;

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

  .search-field {
    font-size: 1rem;
    height: 2.25rem;
    width: 14rem;
    margin-top: 0.5rem;
    padding-top: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid black;
    margin-bottom: 4rem;
  }

  #search-bar {
    border: 1px solid black;
  }

  .profile-options {
    padding-left: 0.5rem;
  }

  .profile-cmp {
    display: flex;
    justify-content: flex-end;
  }

  .search-container {
    width: 18rem;
    display: block;
    margin: 0 auto;
    margin-top: 1em;
  }

  input#search-bar {
    margin: 0 auto;
    width: 100%;
    height: 45px;
    padding: 0 0.3em;
    font-size: 1rem;
    border: 1px solid #d0cfce;
    outline: none;

    &:focus {
      border: 1px solid #008abf;
      transition: 0.35s ease;
      color: #008abf;

      &::-webkit-input-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }

      &::-moz-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }

      &:-ms-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
    }
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
    position: relative;
    float: right;
    width: 70px;
    height: 770x;
    top: -60px;
    right: -25px;
  }

  .footer {
    z-index: 0;
  }

  @media only screen and (max-width: 1200px) {}
}
</style>
