<template>
  <div class="review-container">
    <h2>Comments</h2>
    <br />

    <div
      v-for="comment in comments"
      v-bind:key="comment._id"
      class="records-loop"
    >
      <div>{{ comment }}</div>
    </div>
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
</template>

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
    setup() {
      const store = inject('store')
      return {
        store,
      }
    },
    data() {
      return {
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

      getAllMessages() {
        fetch(commentsApi, { method: 'GET' })
          .then(response => response.json())
          .then(data => {
            // all messages
            this.allMessages = data
            console.log(this.allMessages)

            // grouping message by post_id
            this.postComments = this.allMessages.reduce((results, msg) => {
              results[msg.post_id] = results[msg.post_id] || []
              results[msg.post_id].push(msg)
              return results
            })
          })
          .catch(err => {
            if (err) throw err
          })
      },
    },
    mounted() {
      this.getAllMessages()
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
  min-width: 100%;
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
