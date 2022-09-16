<template>
  <div class="review-container">
    <h1>This is a review header</h1>
    <ul>
      <li
        v-for="(review, index) in reviews"
        :key="index"
      >
        <h4>Username here!!!</h4>
        <br />
        "{{ review.review }}"
      </li>
    </ul>
    <p>this si the content</p>
  </div>
</template>

<script>
const apiComments = 'https://vc-comments.netlify.app/.netlify/functions/api'
import { inject } from 'vue'

export default {
  name: 'CommentsList',
  props: {
    reviews: {
      type: Array,
      required: true,
    },
    setup() {
      const store = inject('store')
      return {
        store,
      }
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
