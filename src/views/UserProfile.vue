<template>
  <div class="profile-page-container">
    <div class="user-profile">
      <ProfileSection />
      <SellSection />
    </div>
    <div class="user-listings">
      <h1>USER LISTINGS HERE</h1>
    </div>
  </div>

</template>

<script>
import ProfileSection from '../components/ProfileSection.vue'
import SellSection from '../components/SellSection.vue';

export default {
  name: 'UserProfile',
  props: [],
  methods: {},
  data() {
    return {}
  },
  components: {
    ProfileSection, SellSection
  },
}
</script>

<style lang="scss" scoped>
.profile-page-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2rem 0rem;
}

.user-listings {
  margin: 0 auto 0 1rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
