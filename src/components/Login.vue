<template>
  <h3>{{ loginFormValue.loginPassword }}</h3>
  <p>{{ users }}</p>
  <section class="login">
    <div class="body">
      <div class="login-div">
        <div class="login-header">
          <h2>Log in to your Chords account</h2>
        </div>
        <form
          id="login-form"
          @submit.prevent=""
          ref="registerForm"
          action="#"
          novalidate="true"
          class="user-input-form"
        >
          <div class="user-input">
            <div class="input user-email">
              <p>Email address</p>
              <input
                type="text"
                name="userEmail"
                v-model="loginFormValue.loginEmail"
                :rules="loginEmailRules"
              />
            </div>
            <div class="input user-password">
              <p>Password</p>
              <div class="password">
                <input
                  type="password"
                  name="userPassword"
                  class="password-inp"
                  v-model="loginFormValue.loginPassword"
                  @click:append="show1 = !show1"
                  @keyup.enter="login"
                />
              </div>
              <p><span>Forgot your password?</span></p>
            </div>
          </div>
          <input
            type="button"
            value="Log In"
            class="log-in-btn"
            :rules="[rules.required, rules.min]"
            :disabled="!isFormValid"
            @click="login"
          />
        </form>
        <p>
          New to Chords?
          <span
            @click:append="show1 = !show1"
            class="create-acc"
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  </section>

  <section class="signup">
    <div class="body">
      <form
        id="signup-form"
        @submit.prevent="checkForm"
        ref="registerForm"
        action="#"
        novalidate="true"
      >
        <div class="signup-div">
          <div class="signup-header">
            <h2>Sign Up to Chord</h2>
          </div>
          <div class="user-input">
            <div class="input user-name">
              <p>Username</p>
              <input
                type="text"
                v-model="userDetails.userName"
                class="input"
                placeholder="Enter username"
              />
            </div>
            <div class="input user-email">
              <p>Email address</p>
              <input
                type="text"
                v-model="userDetails.userEmail"
                class="input"
                placeholder="Enter email"
              />
            </div>
            <div class="input user-password">
              <p>Password</p>
              <div class="password">
                <!-- CHANGE TO 8 minlength="8" LATER!!! -->
                <input
                  type="password"
                  v-model="userDetails.userPassword"
                  class="input"
                  placeholder="Enter password (min 8 characters)"
                />
              </div>
            </div>
          </div>

          <div class="errors">
            <div v-if="errors.length">
              <b class="error-note">Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
          </div>

          <input
            type="submit"
            class="sign-up-btn"
            value="Sign up"
          />
          <!-- <input type="button" @click="checkForm" class="sign-up-btn" value="Sign up" /> -->
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// import { ref } from 'vue'
const usersApi = 'https://vc-users-login.netlify.app/.netlify/functions/api/'
const MINCHAR = 8

export default {
  name: 'Login',
  data() {
    return {
      isFormValid: true,
      loggedUser: '',
      users: [],
      //   formValues: {
      //     // userName: '',
      //     userEmail: '',
      //     userPassword: '',
      //   },
      loginFormValue: {
        loginEmail: '',
        loginPassword: '',
      },
      verify: '',
      userDetails: {
        userName: '',
        userEmail: '',
        userPassword: '',
      },
      //   email: null,
      errors: [],
      dialog: true,
      show1: false,
      loginEmailRules: [v => !!v || 'Required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      //   isActive: false,
      //   activeClass: 'active',
      rules: {
        required: value => !!value || 'Required.',
        min: v => (v && v.length >= 8) || 'Min 8 characters',
      },
    }
  },
  computed: {
    passwordMatch() {
      return this.userDetails.userPassword === this.verify || 'Password must match'
    },
  },
  methods: {
    login() {
      //   let validform = this.$refs.loginForm.validate()
      //   if (validform) {
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
        this.dialog = false // closing form
        this.$emit('logged-user', this.loggedUser) // local storage - update header proile text
        document.location.reload(true) // force page reload to show admin table
      } else {
        console.log('login failed')
      }
      // }
    },
    checkForm(e) {
      e.preventDefault()
      this.errors = []
      // validation
      if (!this.userDetails.userName) {
        this.errors.push('Name required.')
      }
      if (!this.userDetails.userEmail) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.userDetails.userEmail)) {
        this.errors.push('Valid email required.')
      }
      if (!this.userDetails.userPassword) {
        this.errors.push('Password required.')
      } else if (this.userDetails.userPassword.length < MINCHAR) {
        this.errors.push('Password needs to be 8 characters or more.')
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
        console.log(this.users)
      })
      .catch(err => {
        if (err) throw err
      })
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
