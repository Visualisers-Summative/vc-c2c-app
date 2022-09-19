<template>
  <!-- <div class="review-container">
    <h2>Comments</h2> -->
  <!-- {{ store.state.product_id }} -->
  ----------------

  <!-- <div
      v-for="comment in comments"
      :key="comment._id"
      class="records-loop"
    >
      <h4>{{ comment.userName }}</h4>
      <span> Product ID: {{ comment.productPostId }}</span>
      <p>{{ comment.commentMsg }}</p>
    </div>
    <ul> -->
  <!-- <li
        v-for="(review, index) in comments"
        :key="index"
      >
        <h4>Username here!!!</h4>
        <br />
        "{{ review.review }}"
      </li> -->
  <!-- </ul> -->
  <!-- <p>{{ postComments }}</p> -->
  <!-- </div> -->
</template>
<!-- 
<script>
const commentsApi = 'https://vc-comments.netlify.app/.netlify/functions/api'
import { inject } from 'vue'

export default {
  name: 'CommentsList',
  props: {
    comments: {
      type: Array,
      required: true,
    },
    method: { type: Function },
    setup() {
      const store = inject('store')
      return {
        store,
      }
    },
    data() {
      return {
        productCommentId: '',
        // allComments: [],
        // postComments: [],
        // commentList: [],
        // editId: '',
        // id: '',
        // msg: '',
        // commentFormValues: {
        //   commentMsg: '',
        //   productPostId: '',
        //   userName: '',
        //   userId: '',
        // },
      }
    },
    watch: {
      // whenever question changes, this function will run
    },
    methods: {
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
      //   fetch(commentsApi, { method: 'GET' })
      //     .then(response => response.json())
      //     .then(data => {
      //       // all messages
      //       this.allMessages = data
      //       console.log(this.allMessages)
      //       // grouping message by post_id
      //       this.postComments = this.allMessages.reduce((results, msg) => {
      //         results[msg.post_id] = results[msg.post_id] || []
      //         results[msg.post_id].push(msg)
      //         return results
      //       })
      //     })
      //     .catch(err => {
      //       if (err) throw err
      //     })
      // },
      // getAllComments() {
      //   this.$emit('showUsersData')
      // },
    },
    created() {
      this.productCommentId = this.store.state.product_id
      // this.getAllMessages()
      // this.getAllComments()
      // this.method()
      console.log(this.productCommentId)
      console.log('StoredID = ' + this.store.state.product_id)
      console.log('hello')
    },
  },
}
</script>

<style scoped lang="scss">
.review-container {
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
</style> -->
