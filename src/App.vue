<template>
  <div class="header-container">
    <div>
      <!-- Link to HOME view -->
      <router-link to="/#">
        <img
          src="./assets/images/chordstwo.svg"
          alt="chords-logo"
          class="logo"
        />
      </router-link>

      <div
        v-if="loggedUser"
        class="nav-links"
      >
        <!-- Link to HOME view -->
        <router-link
          to="/#"
          class="top"
          >Buy</router-link
        >
        |
        <!-- Link to PROFILE view -->
        <router-link
          to="/Profile"
          class="top"
          >Sell</router-link
        >
      </div>
    </div>

    <div
      v-if="loggedUser"
      class="search-profile-container"
    >
      <div class="profile-cmp">
        <!-- Link to PROFILE view -->
        <router-link
          to="/Profile"
          class="profile-icon"
        >
          <span
            class="profile-circle"
            :style="{ background: userGradient }"
            >{{ loggedUser.charAt(0) }}</span
          >
        </router-link>

        <!-- Link to PROFILE view -->
        <router-link
          to="/Profile"
          class="top"
        >
          Profile</router-link
        >
        <span class="profile-options text">|</span>
        <!-- Link to PROFILE view -->
        <router-link
          to="/#"
          class="profile-options text"
          @click="logout"
          title="Logout"
        >
          <span>Logout</span>
        </router-link>
        <span class="profile-options">|</span>
        <span class="profile-options text">Cart</span>
      </div>

      <div
        v-show="$route.name === 'Home'"
        class="box"
        @click=";(expandBox = '350px'), (radius = '0px')"
      >
        <div name="search">
          <input
            type="text"
            class="input"
            name="txt"
            :placeholder="searchPlaceholder"
            onclick="this.value = '';"
            :style="{ width: expandBox, borderRadius: radius }"
            v-model="searchInput"
            @keyup.enter="searchFunction"
            @blur=";(expandBox = ''), (radius = '50px')"
          />

          <img
            class="search-icon"
            src="./assets/images/search.png"
            @click="searchFunction"
          />
        </div>
      </div>
    </div>
  </div>

  <hr />

  <!-- Login Component -->
  <div class="login">
    <Login
      class="login-form"
      @logged-user="setLoggedUser"
      v-if="isLoginVisible == true"
    />

    <!-- MAIN view  -->
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
import FooterRow from './components/FooterRow.vue'
import Login from './components/Login.vue'
import { provide } from 'vue'
import store from './store'

export default {
  components: { FooterRow, Login },
  name: 'App',
  setup() {
    provide('store', store)
  },
  data() {
    return {
      loggedUser: '',
      loginform: false,
      isLoginVisible: true,
      records: [],
      expandBox: 'none',
      userGradient: '',
      radius: '',
      searchInput: '',
      search_value: '',
      searchPlaceholder: 'Search',
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedUser')
      localStorage.removeItem('userId')
      document.location.reload(true)
      window.location = '/'
    },
    setLoggedUser(loggedInUser) {
      this.loggedUser = loggedInUser
    },
    login() {
      this.loginform = true
    },
    searchFunction() {
      if (this.searchInput == '') {
        this.searchPlaceholder = 'Type something here'
      } else {
        store.state.search_value = this.searchInput
        this.searchInput = ''
        this.searchPlaceholder = 'Search'
      }
    },
  },
  computed: {
    isHomeView() {
      return this.$route.name === 'Home'
    },
  },
  mounted() {
    if (localStorage.loggedUser) {
      this.loggedUser = localStorage.loggedUser
      this.userGradient = localStorage.userGradient
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.profile-cmp {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.box {
  display: block;
  position: relative;
  margin-top: 1rem;
  background-color: #ffffff;
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
  transition: 0.7s;
}

.box img {
  position: absolute;
  z-index: 1;
  top: 1.35rem;
  right: 0.1rem;
  vertical-align: middle;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: #030303;
  transition: 0.2s;
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
  width: 100%;
  transform: none;
  z-index: 0;
  max-height: none;
  margin-top: 1rem;
  margin-bottom: -8rem;
}

.search-icon {
  width: 18px;
  height: 18px;
  background-color: #ffffff;
}

.profile-cmp {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: right;
}

.profile-circle {
  height: 30px;
  width: 30px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background-color: #000000;
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
  position: absolute;
  margin-top: 5rem;
  width: clamp(40rem, 80%, 80rem);
  z-index: 0;
}
</style>
