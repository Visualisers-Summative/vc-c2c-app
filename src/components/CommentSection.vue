<template>
  <div class="comments-section-container">
    <!-- Left side comment submit section [START] -->
    <div class="comments-form-container">
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
    </div>
    <!-- Left side comment submit section [END] -->

    <!-- Right side dispaly comments [START] -->
    <div class="comments-list-container">
      <h2>Comments</h2>
      <!-- {{ store.state.product_id }} -->
      ----------------

      <div
        v-for="comment in userPosts"
        :key="comment._id"
        class="records-loop"
      >
        <h4>{{ comment.userName }}</h4>
        <span> Product ID: {{ comment.productPostId }}</span>
        <p>{{ comment.commentMsg }}</p>
      </div>

      <div>
        <!-- {{ allMessages }} -->
      </div>
      <!-- <div>{{ userPosts }}</div> -->

      <ul>
        <!-- <li
        v-for="(review, index) in comments"
        :key="index"
      >
        <h4>Username here!!!</h4>
        <br />
        "{{ review.review }}"
      </li> -->
      </ul>
      <!-- <p>{{ postComments }}</p> -->
    </div>
    <!-- Right side dispaly comments [END] -->
  </div>
</template>

<script>
const commentsApi = 'https://vc-comments.netlify.app/.netlify/functions/api/'
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
      // commentList: [],
      postsData: [],
      userPosts: [],
      allMessages: [],
      msglist: [],
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
          this.getAllComments()
          // this.hideModal()
          this.resetData()
          console.log(data)
        })
        .catch(err => {
          if (err) throw err
        })
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
    getAllComments() {
      fetch(commentsApi)
        .then(response => response.json())
        .then(data => {
          this.commentFormValues = data

          // get user posts
          if (localStorage.userId) {
            let postData = []
            this.commentFormValues.forEach(element => {
              console.log(element)
              if (this.store.state.product_id == element.productPostId) {
                postData.push(element)
              }
            })
            this.userPosts = postData
          }

          // console.log(this.commentFormValues)
        })
        .catch(err => {
          if (err) throw err
        })
    },
    resetData() {
      this.commentFormValues.commentMsg = ''
    },
    // getAllComments() {
    //   this.$emit('showUsersData')
    // },
  },
  mounted() {
    // set user_id
    if (localStorage.userId) {
      // console.log(localStorage)
      this.commentFormValues.userName = localStorage.loggedUser
      this.commentFormValues.userId = localStorage.userId
    }
    console.log('StoredID = ' + this.store.state.product_id)
    this.getAllComments()
  },
}
</script>

<style scoped lang="scss">
.comments-section-container {
  display: flex;
  width: 100%;
}

.comments-form-container {
  display: flex;
  // width: 100%;
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
.comments-list-container {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  height: 280px;
  width: 100%;
  margin-left: 10px;

  li {
    // margin-right: 10px;
    padding-top: 10px;
    align-items: center;
    border-bottom: 1px solid;
  }
}

//Scrollbar styling
::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fffdeb;
  outline: 1px solid;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #000000;
  max-height: 38px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(115, 115, 115);
}
</style>
