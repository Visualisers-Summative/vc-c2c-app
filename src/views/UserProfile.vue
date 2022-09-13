<template>
  <div id="profile-page-container">
    <div class="user-profile">
      <ProfileSection />
    </div>
    <div class="record-inputs-container">
      <div class="sell-record-input-body body">
        <div class="sell-header">
          <h2>Sell some vinyl</h2>
        </div>
        <form
          id="login-form"
          @submit.prevent=""
          ref="registerForm"
          action="#"
          class="record-input-form"
        >
          <div class="record-input">
            <div class="input record-artist">
              <p>Artist</p>
              <input
                type="text"
                name="recordArtist"
              />
            </div>
            <div class="input album-title">
              <p>Album</p>

              <input
                type="text"
                name="albumTitle"
                class="album-title-inp"
              />
              <!-- v-model.trim=""
                  @keyup.enter="" -->
            </div>
            <div class="post-album-row-wrap">
              <div class="input album-genre">
                <p>Genre</p>

                <input
                  type="text"
                  name="albumGenre"
                  class="album-genre-inp"
                />
                <!-- v-model.trim=""
                  @keyup.enter="" -->
              </div>
              <div class="input album-label">
                <p>Label</p>

                <input
                  type="text"
                  name="albumLabel"
                  class="album-label-inp"
                />
                <!-- v-model.trim=""
                  @keyup.enter="" -->
              </div>
            </div>
            <div class="post-album-row-wrap">
              <div class="input album-year">
                <p>Release Year</p>

                <input
                  type="text"
                  name="albumYear"
                  class="album-year-inp"
                />
                <!-- v-model.trim=""
                  @keyup.enter="" -->
              </div>
              <div class="input album-price">
                <p>Price</p>

                <input
                  type="text"
                  name="albumPrice"
                  class="album-price-inp"
                  placeholder="$"
                />
                <!-- v-model.trim=""
                  @keyup.enter="" -->
              </div>
            </div>
          </div>
          <input
            type="button"
            value="post listing"
            class="post-btn"
            @click="login"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSection from '../components/ProfileSection.vue'

export default {
  name: 'UserProfile',
  props: [],
  methods: {},
  data() {
    return {}
  },
  components: {
    ProfileSection,
  },
}
</script>

<style lang="scss" scoped>
.record-inputs-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  justify-content: space-between;
  margin: 2rem 0rem;
}

// .user-input-form {
//   width: 100%;
// }

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

.post-album-row-wrap {
  display: flex;
}

.album-label,
.album-price {
  margin-left: 0.5em;
}

.album-year,
.album-genre {
  margin-right: 0.5em;
}

// #signup-form {
//   width: 100%;
// }

.post-btn {
  margin-bottom: 1.5rem;
  font-weight: 700;
  width: 50%;
  min-height: 2.5rem;
  border: 1px solid black;
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
