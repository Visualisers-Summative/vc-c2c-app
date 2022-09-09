<template>
<<<<<<< HEAD
  <!-- LOGIN UP SECTION [STARTS] -->
  <section
    class="login"
    v-show="isLoginVisible"
  >
=======
  <section class="login" v-show="isLoginVisible">
>>>>>>> 9af5c3b1b570a7c9668f589d9d2339adc2d70e36
    <div class="body">
      <div class="login-div">
        <div class="login-header">
          <h2>Log in to your Chords account</h2>
        </div>
        <form id="login-form" @submit.prevent="" ref="registerForm" action="#" novalidate="true"
          class="user-input-form">
          <div class="user-input">
            <div class="input user-email">
              <p>Email address</p>
<<<<<<< HEAD
              <input
                type="text"
                name="userEmail"
                v-model.trim="loginFormValue.loginEmail"
                :rules="loginEmailRules"
              />
=======
              <input type="text" name="userEmail" v-model="loginFormValue.loginEmail" :rules="loginEmailRules" />
>>>>>>> 9af5c3b1b570a7c9668f589d9d2339adc2d70e36
            </div>
            <div class="input user-password">
              <p>Password</p>
              <div class="password">
<<<<<<< HEAD
                <input
                  type="password"
                  name="userPassword"
                  class="password-inp"
                  v-model.trim="loginFormValue.loginPassword"
                  @keyup.enter="login"
                />
=======
                <input type="password" name="userPassword" class="password-inp" v-model="loginFormValue.loginPassword"
                  @click:append="show1 = !show1" @keyup.enter="login" />
>>>>>>> 9af5c3b1b570a7c9668f589d9d2339adc2d70e36
              </div>
              <p><span>Forgot your password?</span></p>
            </div>
          </div>
          <p class="errors">{{ loginError }}</p>
          <input type="button" value="Log In" class="log-in-btn" :rules="[rules.required, rules.min]" @click="login" />
        </form>
        <p>
          New to Chords?
          <span @click="showSignupHideLogin" class="create-acc">
            Create an account
          </span>
        </p>
      </div>
    </div>
  </section>
  <!-- LOGIN UP SECTION [ENDS] -->

<<<<<<< HEAD
  <!-- SIGN UP SECTION [STARTS] -->
  <section
    class="signup"
    v-show="isSignUpVisible"
  >
=======
  <section class="signup" v-show="isSignUpVisible">
>>>>>>> 9af5c3b1b570a7c9668f589d9d2339adc2d70e36
    <div class="body">
      <form id="signup-form" @submit.prevent="checkForm" ref="registerForm" action="#" novalidate="true">
        <div class="signup-div">
          <div class="signup-header">
            <h2>Sign Up to Chord</h2>
          </div>
          <div class="user-input">
            <div class="input user-name">
              <p>Username</p>
<<<<<<< HEAD
              <input
                type="text"
                v-model.trim="userDetails.userName"
                class="input"
                placeholder="Enter username"
                @keyup="lowercase"
              />
=======
              <input type="text" v-model="userDetails.userName" class="input" placeholder="Enter username" />
>>>>>>> 9af5c3b1b570a7c9668f589d9d2339adc2d70e36
              <p class="errors">{{ errors.blankUserName }}</p>
            </div>
            <div class="input user-email">
              <p>Email address</p>
<<<<<<< HEAD
              <input
                type="text"
                v-model.trim="userDetails.userEmail"
                class="input"
                placeholder="Enter email"
                @keyup="lowercase"
              />
=======
              <input type="text" v-model="userDetails.userEmail" class="input" placeholder="Enter email" />
>>>>>>> 9af5c3b1b570a7c9668f589d9d2339adc2d70e36
              <p class="errors">{{ errors.blankEmail }}</p>
              <p class="errors">{{ errors.badEmail }}</p>
            </div>
            <div class="input user-password">
              <p>Password</p>
              <div class="password">
                <!-- CHANGE TO 8 minlength="8" LATER!!! -->
<<<<<<< HEAD
                <input
                  type="password"
                  v-model.trim="userDetails.userPassword"
                  class="input"
                  placeholder="Enter password (min 8 characters)"
                />
=======
                <input type="password" v-model="userDetails.userPassword" class="input"
                  placeholder="Enter password (min 8 characters)" />
>>>>>>> 9af5c3b1b570a7c9668f589d9d2339adc2d70e36
                <p class="errors">{{ errors.blankPswrd }}</p>
                <p class="errors">{{ errors.shortPswrd }}</p>
              </div>
            </div>
          </div>

          <input type="submit" class="sign-up-btn" value="Sign up" />
          <p>
            <span @click="showLoginHideSignup" class="create-acc">
              Login
            </span>
          </p>
          <!-- <input type="button" @click="checkForm" class="sign-up-btn" value="Sign up" /> -->
        </div>
      </form>
    </div>
  </section>
  <!-- SIGN UP SECTION [ENDS] -->
</template>

<script>
// import axios from 'axios'
// import formData from 'form-data'
// import { ref } from 'vue'
const usersApi = 'https://vc-users-login.netlify.app/.netlify/functions/api/'
const MINCHAR = 8

export default {
  name: 'Login',
  data() {
    return {
      isLoginVisible: true,
      isSignUpVisible: false,
      isFormValid: true,
      dialog: true,
      loggedUser: '',
      users: [],
      posts: [],
      loginFormValue: {
        loginEmail: '',
        loginPassword: '',
      },
      verify: '',
      userDetails: {
        userName: '',
        userEmail: '',
        userPassword: '',
        user_id: '',
      },
      errors: {
        blankEmail: '',
        blankPswrd: '',
        blankUserName: '',
        badEmail: '',
        shortPswrd: '',
      },
      loginError: '',
      loginEmailRules: [v => !!v || 'Required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      rules: {
        required: value => !!value || 'Required.',
        min: v => (v && v.length >= 8) || 'Min 8 characters',
      },
    }
  },
  computed: {
    // passwordMatch() {
    //   return this.userDetails.userPassword === this.verify || 'Password must match'
    // },
  },
  methods: {
    showSignupHideLogin() {
      // console.log(this.id);
      this.isLoginVisible = false
      this.isSignUpVisible = true
    },
    showLoginHideSignup() {
      this.isSignUpVisible = false
      this.isLoginVisible = true
    },
    lowercase() {
      this.userDetails.userName = this.userDetails.userName.toLowerCase()
      this.userDetails.userEmail = this.userDetails.userEmail.toLowerCase()
    },
    login() {
      //   let validform = this.$refs.loginForm.checkForm()
      if (this.loginFormValue.loginEmail && this.loginFormValue.loginPassword) {
        // // // verify login details
        this.users.forEach(element => {
          if (element.userEmail == this.loginFormValue.loginEmail && element.userPassword == this.loginFormValue.loginPassword) {
            this.loggedUser = element.userName
            console.log(this.loggedUser)
            //    + ' ' + element.lastname
            // localStorage
            localStorage.userId = element._id
            localStorage.loggedUser = this.loggedUser
          }
        })
        if (this.loggedUser) {
          console.log('login successful')
          console.log('userid= ' + localStorage.userId)

          this.dialog = false // closing form
          this.$emit('logged-user', this.loggedUser) // local storage - update header proile text
          //   document.location.reload(true) // force page reload to show admin table
          this.isLoginVisible = false
        } else {
          console.log('login failed')
        }
      } else {
        this.loginError = 'Please enter the required fields'
      }
    },
    checkForm(e) {
      e.preventDefault()
      this.errors = []
      // validation
      if (!this.userDetails.userName) {
        this.errors.push('Name required.')
        this.errors.blankUserName = 'Name required.'
      }
      if (!this.userDetails.userEmail) {
        this.errors.push('Email required.')
        this.errors.blankEmail = 'Email required.'
      } else if (!this.validEmail(this.userDetails.userEmail)) {
        this.errors.push('Valid email required.')
        this.errors.badEmail = 'Valid email required.'
      }
      if (!this.userDetails.userPassword) {
        this.errors.push('Password required.')
        this.errors.blankPswrd = 'Password required.'
      } else if (this.userDetails.userPassword.length < MINCHAR) {
        this.errors.push('Password needs to be 8 characters or more.')
        this.errors.shortPswrd = 'Password needs to be 8 characters or more.'
      }
      // no error found, call addUser
      if (!this.errors.length) {
        return this.addUser()
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    getAll() {
      fetch(usersApi)
        .then(response => response.json())
        .then(data => {
          // filter data to show only post that match the user_id
          if (localStorage.userId) {
            let postData = []
            data.forEach(element => {
              if (localStorage.userId == element.user_id) {
                postData.push(element)
              }
            })
            this.posts = postData
          } else {
            this.posts = data
          }

          this.loading = false
        })
        .catch(err => {
          if (err) throw err
        })
    },
    addUser() {
      // done
      fetch(usersApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userDetails),
      })
        .then(response => response.text())
        .then(data => {
          this.resetData()
          this.showLoginHideSignup()
          console.log(data)
        })
        .catch(err => {
          if (err) throw err
        })
    },
    resetData() {
      // this.editId = ''
      this.userDetails.userName = ''
      this.userDetails.userEmail = ''
      this.userDetails.userPassword = ''
    },
  },
  mounted() {
    // check if user is logged-in, do not show login form
    if (localStorage.loggedUser) {
      this.dialog = false
    }

    // get all users
    fetch(usersApi)
      .then(response => response.json())
      .then(data => {
        this.users = data
        // console.log(this.users)
      })
      .catch(err => {
        if (err) throw err
      })

    this.getAll()
    if (localStorage.userId) {
      // set user_id
      this.userDetails.user_id = localStorage.userId
    }
  },
}
</script>

<style lang="scss" scoped>
// .logo-header {
//   height: auto;
//   margin-bottom: 4rem;

//   .logo {
//     width: 14rem;
//     margin-bottom: 4rem;
//   }
// }

.login-div,
.signup-div {
  background-color: white;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //   height: 20rem;
  width: 30rem;
  padding: 4rem 6rem 6rem 6rem;
  box-shadow: 4px 4px 16px grey;

  p {
    font-size: 0.8rem;
  }

  .create-acc {
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }
}

.login-header,
.signup-header {
  //   display: flex;
  //   align-items: baseline;
  margin-bottom: 1rem;
  text-align: center;
}

.user-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  justify-content: space-between;
  margin: 2rem 0rem;
}

.user-input-form,
.errors {
  width: 100%;
}

.input {
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
  text-align: left;

  input {
    font-size: 1rem;
    height: 2.5rem;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 5px;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid black;
  }

  span {
    font-weight: 600;
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }
}

#signup-form {
  width: 100%;
}

.log-in-btn,
.sign-up-btn {
  margin-bottom: 1.5rem;
  font-weight: 700;
  width: 100%;
  min-height: 2.5rem;
  border: 1px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
}

// ERROR STLES
.errors {
  text-align: left;
  color: tomato;
}

.errors li {
  padding-top: 1em;
  font-weight: 500;
  color: tomato;
}

.error-note {
  color: black;
  font-size: 1rem;
}

// .signup-section {
//     display: none;
// }

.activeClass {
  display: block;
}
</style>
