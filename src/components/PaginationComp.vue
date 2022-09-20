<template>
  <!-- <div>  &#5171 </div> -->
  <div
    v-if="totalPages() > 0"
    class="pagination-wrapper"
  >
 
    <span
      v-if="showPreviousLink()"
      class="pagination-btn"
      @click="updatePage(currentPage - 1)"
    >
    <!-- prettier-ignore -->
    &#5176 
    </span>
   <span class="page-number"> {{ currentPage + 1 }} of {{ totalPages() }}</span>
    
    <span
      v-if="showNextLink()"
      class="pagination-btn"
      @click="updatePage(currentPage + 1)"
    >
     <!-- prettier-ignore -->
     &#5171
    </span>
  </div>
</template>

<script>
export default {
  name: 'PaginationComp',
  props: ['recordsArray', 'currentPage', 'pageSize'],
  data() {
    return {
      pageTotal: '',
    }
  },
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber)
    },
    totalPages() {
      // console.log('length = ' + this.pageTotal)
      // return
      return Math.ceil(this.recordsArray.length / this.pageSize)
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true
    },
  },
  mounted() {
    // this.pageTotal = this.records.length
  },
}
</script>

<style>
.pagination-btn {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
}

.page-number{
  font-size: 1.1rem;
}
</style>
