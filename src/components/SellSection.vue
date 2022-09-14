<template>
  <section class="sell-vinyl-section">
    <form
      id="signup-form"
      @submit.prevent="insertDoc"
      ref="registerForm"
      action="#"
      novalidate="true"
    >
      <h2>Sell Some Vinyl</h2>
      <p>Artist</p>
      <input
        type="text"
        v-model.trim="listRecord.artistName"
        class="artist input long-input"
      />
      <p>Album</p>
      <input
        type="text"
        v-model.trim="listRecord.albumTitle"
        class="album input long-input"
      />
      <label for="albumCover"
        >Album Cover
        <input
          type="text"
          v-model.trim="listRecord.imageUrl"
          class="album-cover input long-input"
        />
      </label>
      <label for="label"
        >Label
        <input
          type="text"
          v-model.trim="listRecord.label"
          class="label input long-input"
        />
      </label>
      <div class="short-inputs">
        <div class="genres">
          <p>Genres</p>
          <div class="checkbox-dropdown-list input">
            <label
              >ALternative
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Alternative"
                name="genre"
              />
            </label>
            <label
              >Blues
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Blues"
                name="genre"
              />
            </label>
            <label
              >Children's Music
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Children's Music"
                name="genre"
              />
            </label>
            <label
              >Classical
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Classical"
                name="genre"
              />
            </label>
            <label
              >Comedy
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Comedy"
                name="genre"
              />
            </label>
            <label
              >Country
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Country"
                name="genre"
              />
            </label>
            <label
              >Dance
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Dance"
                name="genre"
              />
            </label>
            <label
              >EDM
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="EDM"
                name="genre"
              />
            </label>
            <label
              >Easy Listening
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Easy Listening"
                name="genre"
              />
            </label>
            <label
              >Electronic
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Electronic"
                name="genre"
              />
            </label>
            <label
              >Hip-Hop
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Hip-Hop"
                name="genre"
              />
            </label>
            <label
              >Holiday
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Holiday"
                name="genre"
              />
            </label>
            <label
              >Industrial
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Industrial"
                name="genre"
              />
            </label>
            <label
              >Gospel
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Gospel"
                name="genre"
              />
            </label>
            <label
              >J-Pop
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Gospel"
                name="genre"
              />
            </label>
            <label
              >Jazz
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Jazz"
                name="genre"
              />
            </label>
            <label
              >K-Pop
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="K-Pop"
                name="genre"
              />
            </label>
            <label
              >Latino
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Latino"
                name="genre"
              />
            </label>
            <label
              >New Age
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="New Age"
                name="genre"
              />
            </label>
            <label
              >Opera
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Opera"
                name="genre"
              />
            </label>
            <label
              >Pop
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Pop"
                name="genre"
              />
            </label>
            <label
              >R&B
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="R&B"
                name="genre"
              />
            </label>
            <label
              >Soul
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Soul"
                name="genre"
              />
            </label>
            <label
              >Reggae
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Reggae"
                name="genre"
              />
            </label>
            <label
              >Rock
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="Rock"
                name="genre"
              />
            </label>
            <label
              >World
              <input
                v-model="listRecord.genre"
                type="checkbox"
                value="World"
                name="genre"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="short-inputs">
        <label for="year"
          >Release Year
          <input
            type="text"
            v-model.trim="listRecord.yearReleased"
            id="year"
            class="year input short-input"
        /></label>
        <label for="price"
          >Asking Price
          <input
            type="text"
            v-model.trim="listRecord.price"
            id="price"
            placeholder="$"
            class="price input short-input"
        /></label>
      </div>
      <p>Description</p>
      <textarea
        type="text-area"
        v-model.trim="listRecord.albumDescription"
        class="description input long-input"
      ></textarea>
      <div class="lengths-div">
        <label for="lp"
          >LP
          <input
            type="radio"
            v-model="listRecord.length"
            value="lp"
            id="lp"
            name="length"
            class="length"
        /></label>
        <label for="ep"
          >EP
          <input
            type="radio"
            v-model="listRecord.length"
            value="ep"
            id="ep"
            name="length"
            class="length"
        /></label>
      </div>

      <input
        type="submit"
        class="button start-listing"
        value="Create Listing"
      />
    </form>
  </section>
</template>

<script>
const productApi = 'https://vc-products.netlify.app/.netlify/functions/api/'

export default {
  name: 'UserProfile',
  props: [],
  components: {},
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
      //   editRecord: {
      //     albumDescription: '',
      //     albumTitle: '',
      //     artistName: '',
      //     genre: [],
      //     imageUrl: '',
      //     label: '',
      //     length: '',
      //     price: '',
      //     yearReleased: '',
      //   },
      //   dropDownVisible: false,
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
          //   console.log(data)
        })
        .catch(err => {
          if (err) throw err
        })
    },
    // dropDown() {
    //   this.dropDownVisible = !this.dropDownVisible
    // },
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
    // loadAllData() {
    //   fetch(productApi)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.usersRecords = data
    //       console.log('id: ' + localStorage.userId)
    //       if (localStorage.userId) {
    //         let postData = []
    //         data.forEach(element => {
    //           console.log(element)
    //           if (localStorage.userId === element.loggedUserId) {
    //             postData.push(element)
    //             console.log(postData)
    //           }
    //         })
    //         this.usersRecords = postData
    //         // console.log(this.usersRecords)
    //         // } else {
    //         //   // call login
    //         //   console.log("call login");
    //         //   localStorage.callLogin = true;
    //       }
    //       // set posts data
    //       data.forEach(element => {
    //         this.postsData[element._id] = element
    //       })
    //       // console.log(this.postsData)
    //       // console.log(this.usersRecords)
    //       // this.postsLoading = false
    //       // this.loading = false
    //     })
    //     .catch(err => {
    //       if (err) throw err
    //     })
    // },
    loadAllData() {
      this.$emit('showUsersData')
    },
  },
  mounted() {
    this.listRecord.loggedUser = localStorage.loggedUser
    this.listRecord.loggedUserId = localStorage.userId
    // this.loadAllData()
  },
}
</script>

<style lang="scss" scoped>
.user-listings {
  margin: 0 auto 0 1rem;
  width: 100%;
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
}

.genres {
  display: flex;
  flex-direction: column;
}

.checkbox-dropdown-list {
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 6rem;

  label {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
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
