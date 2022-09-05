<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: vinyls._id } }" class="top">
    <div class="product-card-container">

      <div class="product-card">
        <img :src="vinyls.imageURL" alt="Record cover">
        <!-- <p>{{ vinyls.imageURL }}</p> -->
        <p class="artist">{{ vinyls.artistName }}</p>
        <p class="album">{{ vinyls.albumTitle }}</p>
        <p class="length">{{ vinyls.length }}</p>
        <p class="price">{{ vinyls.price }}</p>
        <svg-icon type="mdi" :path="path"></svg-icon>
      </div>

    </div>
  </router-link>
  <!-- <div class="mdc-card">
    <div class="mdc-card__primary-action">
      <div class="mdc-card__media mdc-card__media--square">
        <div class="mdc-card__media-content">Title</div>
      </div>
     ... additional primary action content ... 
      <div class="mdc-card__ripple"></div>
    </div>
    <div class="mdc-card__actions">
      <div class="mdc-card__action-buttons">
        <button class="mdc-button mdc-card__action mdc-card__action--button">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Action 1</span>
        </button>
        <button class="mdc-button mdc-card__action mdc-card__action--button">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Action 2</span>
        </button>
      </div>
      <div class="mdc-card__action-icons">
        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
          title="Share">share</button>
        <button class="material-icons heart-outline mdc-icon-button mdc-card__action mdc-card__action--icon"
          title="Favourite">heart-outline</button>

      </div>
    </div>
  </div> -->


</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
// import { mdiAccount } from '@mdi/js'
import { mdiHeartOutline } from '@mdi/js';

export default {
  name: "ProductCard",
  props: {
    vinyls: Object
  },
  data () {
    return {
      path: mdiHeartOutline,
    }
  }, components: {
    SvgIcon
  }
}

</script>

<style lang="scss" scoped>
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>