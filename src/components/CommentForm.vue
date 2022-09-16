<template>
  <div class="review-container">
    <form
      class="review-form"
      @submit.prevent="onSubmit"
    >
      <h4>Post a Comment</h4>
      {{ store.state.product_id }}
      <textarea
        id="review"
        v-model="commentFormValues.commentMsg"
        placeholder="Your comment here..."
        name="type-comment"
        maxlength="300"
        cols="60"
        rows="13"
      ></textarea>

      <div class="button-container">
        <input
          type="submit"
          class="button"
          value="Submit Comment"
        />
      </div>
    </form>

    <div
      v-for="comment in commentList"
      v-bind:key="comment._id"
      class="records-loop"
    >
      <div></div>
    </div>
  </div>
</template>

<script>
const commentsApi = 'https://vc-comments.netlify.app/.netlify/functions/api'
import Swal from 'sweetalert2'
import { inject } from 'vue'

export default {
  name: 'CommentsForm',
  setup() {
    const store = inject('store')
    return {
      store,
    }
  },
  data() {
    return {
      name: '',
      review: '',
      allComments: [],
      postComments: [],
      commentList: [],
      editId: '',
      id: '',
      msg: '',
      commentFormValues: {
        commentMsg: '',
        productPostId: '',
        userName: '',
        userId: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.commentFormValues.productPostId = this.store.state.product_id

      if (this.commentFormValues.commentMsg === '') {
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
        body: JSON.stringify(this.commentFormValues),
      })
        .then(response => response.text())
        .then(data => {
          // this.loadAllData()
          // this.hideModal()
          this.resetData()
          console.log(data)
        })
        .catch(err => {
          if (err) throw err
        })

      let productReview = {
        commentFormValues: this.commentFormValues,
      }

      //productReview = payload
      this.$emit('review-submitted', productReview)

      //clear out and reset
      this.review = ''
    },
    // getMessages(postId) {
    //   this.msglist = []
    //   if (postId) {
    //     let singlePost = []
    //     this.allMessages.forEach(msg => {
    //       if (msg.postId == postId) {
    //         singlePost.push(msg)
    //       }
    //     })
    //     this.msglist = singlePost
    //   }
    // },

    // getAllMessages() {
    //   fetch(commentsApi)
    //     .then(response => response.json())
    //     .then(data => {
    //       // all messages
    //       this.allMessages = data

    //       // grouping message by post_id
    //       this.postMessages = this.allMessages.reduce((results, msg) => {
    //         results[msg.post_id] = results[msg.post_id] || []
    //         results[msg.post_id].push(msg)
    //         return results
    //       })
    //     })
    //     .catch(err => {
    //       if (err) throw err
    //     })
    // },
    resetData() {
      this.commentFormValues.commentMsg = ''
    },
    loadAllData() {
      this.$emit('showUsersData')
    },
  },
  mounted() {
    // set user_id
    if (localStorage.userId) {
      console.log(localStorage)
      this.commentFormValues.userName = localStorage.loggedUser
      this.commentFormValues.userId = localStorage.userId
    }
    console.log('StoredID = ' + this.store.state.product_id)

    this.loadAllData()
  },
}
</script>

<style scoped lang="scss">
.review-container {
  display: flex;
  width: 100%;
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
