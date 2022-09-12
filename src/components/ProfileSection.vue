<template>
  <div class="profile-div">
    <div
    :style="{ background: userGradient }"
      class="user-image"
    >
      <h1>{{ loggedUser.slice(0, 1) }}</h1>
    </div>
    <div class="user-details">
      <p class="username">{{ loggedUser }}</p>
      <p>{{ userEmail }}</p>
    </div>
    <input
      type="button"
      class="button edit-profile-button"
      value="EDIT PROFILE"
    />
  </div>
</template>

<script>
import ProductService from '../services/ProductService.js'

export default {
  data() {
    return {
      record: null,
      username: '',
      userEmail: '',
      userGradient: '',
      loggedUser: ''
    }
  },
  methods: {
     },
  created() {
    ProductService.getData(this.id)
      .then(response => {
        this.record = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  mounted() {
    this.userGradient = localStorage.userGradient
    this.loggedUser = localStorage.loggedUser
    this.userEmail = localStorage.userEmail
  }
}
</script>

<style lang="scss" scoped>
.profile-div {
  margin-top: 3rem;
  border: solid 1px grey;
  padding: 1rem;
  width: 18rem;
  height: 22rem;
  padding-bottom: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin-bottom: 0.6rem;
  }
}

.username {
  font-weight: 800;
  font-size: 1.1rem;
}

.edit-profile-button {
  min-width: 10rem;
  margin: 2rem 0rem;
  font-size: 0.8rem;
}

.user-image {
  margin: 0 auto;
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 50%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: translateY(-25%);

  h1 {
    font-size: 4em;
    color: white;
  }
}
</style>
