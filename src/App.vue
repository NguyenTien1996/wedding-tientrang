<template>
  <div class="app">
    <BannerSection />
    <CeremonySection />
    <CoupleSection />
    <PhotoAlbumSection />
    <LoveStorySection />
    <MilestonesSection />
    <EventsSection />
    <GuestbookSection />
    <GiftSection />
    <FooterSection />
  </div>
</template>

<script>
import BannerSection from './components/BannerSection.vue'
import CeremonySection from './components/CeremonySection.vue'
import CoupleSection from './components/CoupleSection.vue'
import PhotoAlbumSection from './components/PhotoAlbumSection.vue'
import LoveStorySection from './components/LoveStorySection.vue'
import MilestonesSection from './components/MilestonesSection.vue'
import EventsSection from './components/EventsSection.vue'
import GuestbookSection from './components/GuestbookSection.vue'
import GiftSection from './components/GiftSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    BannerSection,
    CeremonySection,
    CoupleSection,
    PhotoAlbumSection,
    LoveStorySection,
    MilestonesSection,
    EventsSection,
    GuestbookSection,
    GiftSection,
    FooterSection
  }
}
</script>

<style scoped>
.app {
  width: 100%;
}
</style>

