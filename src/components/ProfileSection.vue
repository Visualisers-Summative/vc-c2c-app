<template>
  <div class="profile-div">
    <div
      :style="{ background: userGradient }"
      class="user-image"
    >
      <h1>{{ loggedUser.slice(0, 1) }}</h1>
    </div>

    <!-- Display input edit forms -->
    <div
      class="edit-inputs"
      v-if="editId == loggedUserId"
    >
      <label for="username"
        >Username
        <input
          id="username"
          type="text"
          v-model.trim="editUser.username"
          class="username-input input long-input"
        />
      </label>
      <label for="email"
        >Email
        <input
          id="email"
          type="text"
          v-model.trim="editUser.email"
          class="email-input input long-input"
      /></label>
      <button
        class="edit"
        @click="updateDoc(record._id)"
      >
        Confirm
      </button>
      <!-- <button :id="profile._id" class="remove" @click="showModal">Remove</button> -->
      <button
        class="remove"
        @click="onCancel"
      >
        Cancel
      </button>
    </div>

    <!-- Display logged in user details -->
    <div
      v-else
      class="user-details"
    >
      <p class="username">{{ loggedUser }}</p>
      <p>{{ userEmail }}</p>
      <p>test id:{{ id }}</p>

      <input
        type="button"
        class="button edit-profile-button"
        value="EDIT PROFILE"
        @click="editUserData(loggedUserId)"
      />
    </div>
  </div>
</template>

<script>
const usersApi = 'https://vc-users-login.netlify.app/.netlify/functions/api/'

export default {
  data() {
    return {
      // record: null,
      username: '',
      userEmail: '',
      userGradient: '',
      loggedUser: '',
      loggedUserId: '',
      editId: '',
      id: '',
      editUser: {
        username: '',
        email: '',
      },
      users: [],
    }
  },
  methods: {
    editUserData(id) {
      // done
      this.id = id
      fetch(usersApi + id, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.editId = data._id
          this.editUser.username = data.username
          this.editUser.email = data.email
          // this.editRecord.artistName = data.artistName
          // this.editRecord.genre = data.genre
        })
        .catch(err => {
          if (err) throw err
        })
    },
    updateDoc(id) {
      Swal.fire({
        // title: "Well done!",
        text: 'Your record was updated',
        icon: 'success',
        confirmButtonText: 'Rock n roll',
      })
      // this.id = id
      fetch(usersApi + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.editUser),
      })
        .then(response => response.text())
        .then(data => {
          console.log(data)
          console.log(this.editUser)
          this.editId = ''
          this.editUser.username = ''
          this.editUser.email = ''

          // this.getAllUsers()
        })
        .catch(err => {
          if (err) throw err
        })
    },
    getAllUsers() {
      fetch(usersApi)
        .then(response => response.json())
        .then(data => {
          this.users = data
          // console.log(this.users)
        })
        .catch(err => {
          if (err) throw err
        })
    },
    onCancel() {
      this.editId = ''
      this.editUser.username = ''
      this.editUser.email = ''
    },
  },

  mounted() {
    this.userGradient = localStorage.userGradient
    this.loggedUser = localStorage.loggedUser
    this.userEmail = localStorage.userEmail
    this.loggedUserId = localStorage.userId
    console.log(localStorage.userId)
  },
}
</script>

<style lang="scss" scoped>
.profile-div {
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
  text-transform: capitalize;
  font-weight: 800;
  font-size: 1.1rem;
}

.edit-profile-button {
  min-width: 10rem;
  margin: 2rem 0rem;
  font-size: 0.8rem;
}

.user-image {
  margin: 1rem auto;
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 50%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: translateY(-30%);

  h1 {
    font-size: 4em;
    color: white;
    text-transform: capitalize;
  }
}
</style>
