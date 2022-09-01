<template>
  <div class="logo">

  </div>

  <div class="signup-div">

    <h1> Sign Up to Chord</h1>

    <div class="signup-fields register">
      <input type="text" v-model="username" class="input" placeholder="Enter username">
      <input type="text" v-model="email" class="input" placeholder="Enter email">
      <!-- CHANGE TO 8 minlength="8" LATER!!! -->
      <input type="password" v-model="password" class="input" placeholder="Enter password (min 8 characters)">
      <!-- <input type="password" class="input" placeholder="Re-enter password (min 8 characters)"> -->

      <button :click="signUp" class="signup-btn">Sign up!</button>

    </div>


  </div>
</template>

<script>
export default {
  name: "SignUp",
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  }, methods: {
    signUp () {
      console.warn("singup")
    }
  }
}

</script>

<style lang="scss">
.signup-div {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // height: 16rem;
  width: 40rem;

  p {
    font-size: 0.8rem;
  }
}

input {
  font-size: 1rem;
  height: 2rem;
  width: 100%;
  margin-top: 0.5rem;
  padding: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid black;
}

.input {
  justify-content: space-between;
  align-items: baseline;
  margin-top: 1rem;
  padding: 0rem;
}


.signup-fields {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 60%;
  justify-content: space-between;
}

.signup-btn {
  width: 100%;
  padding: 0rem;
  height: 2rem;
  border: 1px solid black;
  background-color: grey;
  color: white;
  margin-top: 1rem;
}
</style>