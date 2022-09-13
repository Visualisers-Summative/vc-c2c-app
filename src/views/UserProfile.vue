<template>
  <div id="profile-page">
    <ProfileSection />
  </div>
  <div class="sell-section">
    <SellSection />
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

<style lang="scss" scoped></style>
