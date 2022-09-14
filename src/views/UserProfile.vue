<template>
  <div class="profile-page-container">
    <div class="user-profile">
      <ProfileSection />
      <SellSection @showUsersData="loadAllData" />
    </div>

    <div class="user-listings">
      <!-- <h1>USER LISTINGS HERE</h1> -->
      <div
        v-for="record in usersRecords"
        v-bind:key="record._id"
        class="records-loop"
      >
        <img
          :src="record.imageUrl"
          alt="Record cover"
        />
        <div class="artist-name">
          {{ record.artistName }}
          <div>{{ record._id }}</div>
          <div>{{ record.albumDescription }}</div>
          <div>${{ record.price }}</div>
          <div>{{ record.genre.join(', ') }}</div>
        </div>
        <div class="edit-buttons">
          <!-- <button :id="profile._id" class="remove" @click="showModal">Remove</button> -->
          <button
            class="delete-btn"
            @click="deleteDoc(record._id)"
          >
            Delete
          </button>
          <button
            class="edit-btn"
            v-on:click="onEdit(record)"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSection from '../components/ProfileSection.vue'
import SellSection from '../components/SellSection.vue'
import Swal from 'sweetalert2'
const productApi = 'https://vc-products.netlify.app/.netlify/functions/api/'

export default {
  name: 'UserProfile',
  props: [],
  components: {
    ProfileSection,
    SellSection,
  },
  data() {
    return {
      isModalVisible: false,
      editId: '',
      usersRecords: [],
      postsData: [],
      postsLoading: true,
      loading: true,
      editId: '',
      id: '',
      listRecord: {
        albumDescription: '',
        albumTitle: '',
        artistName: '',
        genre: [],
        imageUrl: '',
        label: '',
        length: '',
        price: '',
        yearReleased: '',
        loggedUser: '',
        loggedUserId: '',
      },
      editRecord: {
        albumDescription: '',
        albumTitle: '',
        artistName: '',
        genre: [],
        imageUrl: '',
        label: '',
        length: '',
        price: '',
        yearReleased: '',
      },
    }
  },
  methods: {
    insertDoc() {
      // done
      fetch(productApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.listRecord),
      })
        .then(response => response.text())
        .then(data => {
          this.loadAllData()
          // this.hideModal()
          this.resetData()
          console.log(data)
        })
        .catch(err => {
          if (err) throw err
        })
    },
    resetData() {
      this.listRecord.artistName = ''
      this.listRecord.albumTitle = ''
      this.listRecord.albumDescription = ''
      this.listRecord.genre = ''
      this.listRecord.imageUrl = ''
      this.listRecord.label = ''
      this.listRecord.length = ''
      this.listRecord.price = ''
      this.listRecord.yearReleased = ''
    },
    loadAllData() {
      fetch(productApi)
        .then(response => response.json())
        .then(data => {
          this.usersRecords = data
          console.log('id: ' + localStorage.userId)
          if (localStorage.userId) {
            let postData = []
            data.forEach(element => {
              // console.log(element)
              if (localStorage.userId === element.loggedUserId) {
                postData.push(element)
                // console.log(postData)
              }
            })
            this.usersRecords = postData
            // console.log(this.usersRecords)
            // } else {
            //   // call login
            //   console.log("call login");
            //   localStorage.callLogin = true;
          }
          // set posts data
          data.forEach(element => {
            this.postsData[element._id] = element
          })
          // console.log(this.postsData)
          // console.log(this.usersRecords)
          // this.postsLoading = false
          // this.loading = false
        })
        .catch(err => {
          if (err) throw err
        })
    },
    deleteDoc(id) {
      // done
      Swal.fire({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this record!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          fetch(productApi + id, {
            method: 'DELETE',
          })
            .then(response => response.text())
            .then(data => {
              this.loadAllData()
              // console.log(data)
            })
            .catch(err => {
              if (err) throw err
            })
          Swal.fire('Deleted!', 'Record has been deleted.', 'success', {
            icon: 'success',
          })
        } else {
          Swal.fire('Fail!', 'Fail to delete record.', 'error')
        }
      })
    },
    onEdit(record) {
      // this.editId = record._id
      this.editRecord.albumDescription = record.albumDescription
      this.editRecord.albumTitle = record.albumTitle
      this.editRecord.artistName = record.artistName
      this.editRecord.genre = record.genre
      this.editRecord.imageUrl = record.imageUrl
      this.editRecord.length = record.length
      this.editRecord.price = record.price
      this.editRecord.yearReleased = record.yearReleased
    },
    onCancel() {
      // this.editRecord = ''
      this.editRecord.albumDescription = ''
      this.editRecord.albumTitle = ''
      this.editRecord.artistName = ''
      this.editRecord.genre = ''
      this.editRecord.imageUrl = ''
      this.editRecord.length = ''
      this.editRecord.price = ''
      this.editRecord.yearReleased = ''
    },
  },
  mounted() {
    this.listRecord.loggedUser = localStorage.loggedUser
    this.listRecord.loggedUserId = localStorage.userId

    this.loadAllData()
  },
}
</script>

<style lang="scss" scoped>
.profile-page-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2rem 0rem;
}

.user-listings {
  margin: 0 auto 0 1rem;
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto;
}

.sell-vinyl-section {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  height: 30rem;

  input {
    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .button {
    width: 50%;
  }
}

.input {
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 5px;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid grey;

  .price {
    text-align: right;
  }
}

.short-inputs {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;

  label {
    width: 9rem;
  }
}

.checkbox-dropdown {
  width: 200px;
  border: 1px solid #aaa;
  padding: 10px;
  position: relative;
  margin: 0 auto;

  user-select: none;
}

/* Display CSS arrow to the right of the dropdown text */
.checkbox-dropdown:after {
  content: '';
  height: 0;
  position: absolute;
  width: 0;
  border: 6px solid transparent;
  border-top-color: #000;
  top: 50%;
  right: 10px;
  margin-top: -3px;
}

/* Reverse the CSS arrow when the dropdown is active */
.checkbox-dropdown.is-active:after {
  border-bottom-color: #000;
  border-top-color: #fff;
  margin-top: -9px;
}

.checkbox-dropdown-list {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%; /* align the dropdown right below the dropdown text */
  border: inherit;
  border-top: none;
  left: -1px; /* align the dropdown to the left */
  right: -1px; /* align the dropdown to the right */
  opacity: 0; /* hide the dropdown */

  transition: opacity 0.4s ease-in-out;
  height: 100px;
  overflow: scroll;
  overflow-x: hidden;
  pointer-events: none; /* avoid mouse click events inside the dropdown */
}
.is-active .checkbox-dropdown-list {
  opacity: 1; /* display the dropdown */
  pointer-events: auto; /* make sure that the user still can select checkboxes */
}

.checkbox-dropdown-list li label {
  display: block;
  border-bottom: 1px solid silver;
  padding: 10px;

  transition: all 0.2s ease-out;
}

.checkbox-dropdown-list li label:hover {
  background-color: #555;
  color: white;
}

.short-input {
  width: 9rem;
}

.lengths-div {
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-bottom: 1rem;
}

input[type='radio'] {
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  margin: 0.5rem 1rem 1rem 0;
  font: inherit;
  color: black;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid grey;
  border-radius: 5px;
  transform: translateY(0.1em);
  display: grid;
  place-content: center;
}

input[type='radio']:hover {
  border: 2px solid grey;
}

input[type='radio']:checked {
  border: 1px solid black;
}

input[type='radio']::before {
  content: '';
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 2rem 2rem;
}

input[type='radio']:checked::before {
  transform: scale(1);
  color: black;
}
</style>
