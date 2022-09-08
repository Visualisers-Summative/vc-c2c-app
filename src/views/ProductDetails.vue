<template>
  <div v-if="record" class="product-details-container">

    <div class="record-image-wrapper">
      <img :src="record.imageUrl" alt="Record cover" class="record-image">
    </div>


    <div class="product-details">
      <h1 class="record-album">{{ record.albumTitle }}</h1>

      <div class="product-titles">
        <h4>ARTIST</h4>
        <p class="record-artist">{{ record.artistName }}</p>
      </div>

      <div class="product-titles">
        <h4>LABEL</h4>
        <p class="">Details for Label here?</p>
      </div>

      <div class="product-titles">
        <h4>COUNTRY</h4>
        <p class="">Details for Country here?</p>
      </div>

      <div class="product-titles">
        <h4>RELEASED</h4>
        <p class="record-year">{{ record.yearReleased }}</p>
      </div>

      <div class="product-titles">
        <h4>GENRE</h4>
        <p class="record-genre">{{ record.genre }}</p>
      </div>

      <div class="product-titles">
        <h4>FORMAT</h4>
        <p class="record-length">{{ record.length }}</p>
      </div>

      <div>
        <p>
          Cheetah is an EP record by British electronic musician Richard D. James, released under his moniker Aphex
          Twin. According to Wikipedia “The name is a reference to Cheetah Marketing, a British manufacturer of
          microcomputer peripherals and electronic musical instruments in the 1980s (such as the MS800 namechecked in
          two of the EP’s track titles).”
        </p>
      </div>

      <div class="icon-container">
        <svg-icon type="mdi" :path="path"></svg-icon>
      </div>


      <div class="button-container">
        <div>
          <h2 class="record-price">${{ record.price }}.00</h2>
        </div>
        <!-- <button class="edit">EDIT</button> -->
        <button class="purchase">PURCHASE</button>
      </div>
    </div>

    <!-- <div class="product-details">
        <p class="record-artist">{{ record.artistName }}</p>
        <p class="record-album">{{ record.albumTitle }}</p>
        <p class="record-genre">{{ record.genre }}</p>
        <p class="record-year">{{ record.yearReleased }}</p>
        <p class="record-length">{{ record.length }}</p>
        <p class="record-price">{{ record.price }}</p>
        <p class="record-description">{{ record.albumDescription }}</p>
        <svg-icon type="mdi" :path="path"></svg-icon>
      </div> -->
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
// import { mdiAccount } from '@mdi/js'
import { mdiHeartOutline } from '@mdi/js';

import ProductService from '../services/ProductService.js';

export default {
  props: ['id'],
  data () {
    return {
      record: null,
      path: mdiHeartOutline
    }
  },
  components: {
    SvgIcon
  },
  created () {
    ProductService.getData(this.id)
      .then(response => {
        // console.log(response.data);
        this.record = response.data
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss" scoped>
.product-details-container {
  display: flex;
  border-bottom: 1px solid;

  .product-details {
    h1 {
      margin-top: 2rem;
    }

    .product-titles {
      display: flex;
      flex-direction: row;
      margin: 2rem 0rem 1rem 0rem;

      h4 {
        margin-right: 10px;
      }

      .record-artist {
        font-style: italic;
        font-weight: 800;
      }

      .record-length {
        text-transform: uppercase;
      }
    }
  }

  //image styling
  .record-image-wrapper {
    .record-image {
      height: 476px;
      margin: 2rem 2rem 2rem 0rem;

    }
  }

  .icon-container {
    display: flex;
    justify-content: right;
  }

  //button styling - can be moved to main.scss 
  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button {
      height: 44px;
      width: 224px;
      margin: 5px;
      background-color: black;
      color: white;
      border: none;
      font-size: 1.1em;
      cursor: pointer;
      transition: border-color 0.25s;
    }
  }
}
</style>