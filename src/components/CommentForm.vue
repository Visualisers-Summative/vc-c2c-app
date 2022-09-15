<template>
  <div class="review-container">
    <form
      class="review-form"
      @submit.prevent="onSubmit"
    >
      <h4>Post a Comment</h4>
      <textarea
        id="review"
        v-model="review"
        placeholder="Your comment here..."
        name="type-comment"
        maxlength="300"
        cols="60"
        rows="13"
      ></textarea>

      <div class="button-container">
        <input
          type="button"
          class="button"
          value="Submit Comment"
          @click="onSubmit()"
        />
      </div>
    </form>
  </div>
</template>

<script>
const commentsApi = 'https://vc-comments.netlify.app/.netlify/functions/api'
import Swal from 'sweetalert2'

export default {
  name: 'CommentsForm',
  data() {
    return {
      name: '',
      review: '',
      editId: '',
      id: '',
      enteredComment: {
        userName: '',
        commentMsg: '',
        productId: '',
      },
    }
  },
  methods: {
    onSubmit() {
      // if (this.name === '' || this.review === '' || this.rating === null) {
      //   alert('Review is incomplete. Please fill out every field.')
      //   return
      // }
      if (this.review === '') {
        Swal.fire({
          icon: 'error',
          text: 'Please enter a comment before submitting',
        })
        return
      }

      // done
      fetch(commentsApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.enteredComment),
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

      let productReview = {
        review: this.review,
      }

      //productReview = payload
      this.$emit('review-submitted', productReview)

      //clear out and reset
      this.review = ''
    },
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

<style scoped lang="scss">
.review-container {
  display: flex;
  width: 40%;
  .review-form {
    display: flex;
    flex-direction: column;
    height: 280px;
  }

  h4 {
    margin-bottom: 10px;
  }

  input {
    border: 1px solid;
    padding: 5px;
    margin-bottom: 5px;
  }

  //dont know why font-size is messing with div sizing
  textarea {
    resize: none;
    font-family: inherit;
    padding: 5px;
    border: 1px solid;
  }
}

.button-container {
  display: flex;
  justify-content: right;
  .button {
    height: 44px;
    width: 224px;
    margin-top: 10px;
    background-color: black;
    color: white;
    border: none;
    font-size: 1.1em;
    cursor: pointer;
    transition: border-color 0.25s;
  }
}
</style>
