<template>
  <div class="review-container">
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
    
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">

.review-container{
  display:flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  height: 280px;
  min-width: 60%;
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
