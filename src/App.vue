<template>
  <div class="header-container">
    <div>
      <a href="#">
        <img
          src="./assets/images/Chords.svg"
          alt="chords-logo"
          class="logo"
        />
      </a>
      <div class="nav-links">
        <router-link
          to="/"
          class="top"
          >Buy</router-link
        >
        |
        <router-link
          to="/Sell"
          class="top"
          >Sell</router-link
        >
      </div>
    </div>

    <div class="search-profile-container">
      <router-link
        to="/Profile"
        class="top"
        >Profile</router-link
      >
      <div class="login-cmp">
        <Login
          @logged-user="setLoggedUser"
          v-if="loginform"
        />
        <span
          text
          rounded
          >{{ loggedUser }}</span
        >
        <span
          v-if="loggedUser != 'guest'"
          text
          rounded
          @click="logout"
          title="logout"
        >
          <span> | logout</span>
        </span>
        <span
          v-else
          text
          rounded
          @click="login"
          title="login"
        >
          <span> | login</span>
        </span>
      </div>
      | Cart
      <div class="search">
        <form class="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Search?"
          />
          <a href="#"
            ><img
              class="search-icon"
              src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          /></a>
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
// .login-cmp {
//   width: clamp(50rem, 80%, 80rem);
//   height: 100%;
//   background-color: rgba(255, 255, 255, 0.65);
//   position: absolute;
//   z-index: 1;
// }

// .product-container-cmp {
//   margin: 0 auto;
// }
.header-container {
  height: auto;
  display: flex;
  justify-content: space-between;
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

// .search-profile-container {
//   text-align: right;
// }

// .search-button {
//   background: transparent;
//   border: none;
//   outline: none;
//   margin-left: -33px;
// }

// .search-button img {
//   width: 20px;
//   height: 20px;
//   object-fit: cover;
// }

.search-container {
  width: 200px;
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

.search-icon {
  position: relative;
  float: right;
  width: 70px;
  height: 770x;
  top: -60px;
  right: -25px;
}

.footer {
  margin-top: 9rem;
}
</style>
