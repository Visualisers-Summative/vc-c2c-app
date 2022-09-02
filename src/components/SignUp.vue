<template>
  <div class="logo-header">
    <a href="#">
      <img src="../assets/images/Chords.svg" alt="chords-logo" class="logo">
    </a>
    <hr>
  </div>

  <div class="body">
    <div class="signup-div">
      <div class="signup-header">
        <h2>Sign Up to Chord</h2>
      </div>
      <div class="user-input">
        <div class="input user-name">
          <p>Username</p>
          <input type="text" v-model="userDetails.userName" class="input" placeholder="Enter username">
        </div>
        <div class="input user-email">
          <p>Email address</p>
          <input type="text" v-model="userDetails.userEmail" class="input" placeholder="Enter email">
        </div>
        <div class="input user-password">
          <p>Password</p>
          <div class="password">
            <!-- CHANGE TO 8 minlength="8" LATER!!! -->
            <input type="password" v-model="userDetails.password" class="input"
              placeholder="Enter password (min 8 characters)">
          </div>
        </div>
      </div>
      <input type="button" @click="addUser" class="sign-up-btn" value="Sign up" />

    </div>
  </div>

  <div class="footer">
    <img src="../assets/images/c.png" alt="C-logo" class="logo-c">
  </div>


</template>

<script>
// const axios = require("axios");
// import axios from 'axios';
// const formData = require("form-data");
const api = "https://vc-users-login.netlify.app/.netlify/functions/api/"
export default {
  name: "SignUp",
  data () {
    return {
      userDetails: {
        userName: '',
        userEmail: '',
        userPassword: '',
      },
    }
  }, methods: {
    addUser () { // done
      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.userDetails)
      })
        .then((response) => response.text())
        .then((data) => {
          this.resetData()
          console.log(data)
        })
        .catch((err) => {
          if (err) throw err;
        })
    },
    resetData () {
      this.editId = ''
      this.userDetails.username = ''
      this.userDetails.email = ''
      this.userDetails.password = ''
    },

  },

}

</script>

<style lang="scss">
.logo-header {
  height: auto;
  margin-bottom: 8rem;

  .logo {
    width: 14rem;
    margin-bottom: 4rem;
  }
}

.signup-div {
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
  width: 30rem;
  padding: 4rem 6rem 6rem 6rem;

  p {
    font-size: 0.8rem;
  }

  a {
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }
}

.signup-header {
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
}


.user-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  justify-content: space-between;
  margin: 2rem 0rem;
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

.sign-up-btn {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  width: 100%;
  min-height: 2.5rem;
  border: 1px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
}

.footer {
  position: absolute;
  bottom: 4rem;
  right: 15%;
}

.logo-c {
  width: 3rem;
}
</style>