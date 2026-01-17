<template>
  <div id="album" class="relative" data-aos="fade-up" data-aos-delay="200">
    <div class="relative">
      <div class="relative max-w-9xl mx-auto py-12 md:py-[72px] px-4 md:px-0">
        <div class="relative">
          <div class="album-title text-center text-[48px] md:text-[72px] leading-[60px] md:leading-[90px] font-pinyonScript mb-6 md:mb-10" style="font-family: 'Pinyon Script', cursive;" data-aos="zoom-in">
            Album ảnh cưới
          </div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 album-image" data-aos="fade-up" data-aos-delay="200">
          <div v-for="(photo, index) in visiblePhotos" :key="index" :class="{ 'hidden': index >= 6 && !showAll }">
            <a :href="photo.full" @click.prevent="openLightbox(index)">
              <img 
                :src="photo.thumbnail" 
                alt="" 
                class="w-full object-cover rounded shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                loading="lazy"
              >
            </a>
          </div>
        </div>
        
        <div class="flex justify-center mt-8 md:mt-[72px]" v-if="!showAll">
          <button 
            id="viewMoreImagesBtn" 
            class="uppercase rounded-full text-white font-prata text-sm md:text-[18px] min-w-[180px] md:min-w-[250px] p-3 md:p-6" 
            style="background: rgb(161, 47, 12); color: rgb(251, 247, 245);"
            @click="showMoreImages"
          >
            Xem thêm ảnh
          </button>
        </div>
        
        <!-- Lightbox -->
        <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox">&times;</button>
          <button class="lightbox-prev" @click.stop="prevPhoto">‹</button>
          <img :src="photos[currentIndex].full" :alt="photos[currentIndex].alt" @click.stop>
          <button class="lightbox-next" @click.stop="nextPhoto">›</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoAlbumSection',
  data() {
    return {
      showAll: false,
      lightboxOpen: false,
      currentIndex: 0,
      photos: [
        {
          thumbnail: '/assets/a143A1171_60x90_AL5B_1768319473_2190.webp',
          full: '/assets/a143A1171_60x90_AL5B_1768319473_2190.webp',
          alt: 'Wedding photo 1'
        },
        {
          thumbnail: '/assets/b143A1461.jpg',
          full: '/assets/b143A1461.jpg',
          alt: 'Wedding photo 2'
        },
        {
          thumbnail: '/assets/c143A1672.jpg',
          full: '/assets/c143A1672.jpg',
          alt: 'Wedding photo 3'
        },
        {
          thumbnail: '/assets/d143A1359.jpg',
          full: '/assets/d143A1359.jpg',
          alt: 'Wedding photo 4'
        },
        {
          thumbnail: '/assets/e143A1897.jpg',
          full: '/assets/e143A1897.jpg',
          alt: 'Wedding photo 5'
        },
        {
          thumbnail: '/assets/f143A1536.jpg',
          full: '/assets/f143A1536.jpg',
          alt: 'Wedding photo 6'
        },
        {
          thumbnail: '/assets/g143A1192.jpg',
          full: '/assets/g143A1192.jpg',
          alt: 'Wedding photo 7'
        },
        {
          thumbnail: '/assets/l143A1869.jpg',
          full: '/assets/l143A1869.jpg',
          alt: 'Wedding photo 8'
        }
      ]
    }
  },
  computed: {
    visiblePhotos() {
      return this.showAll ? this.photos : this.photos.slice(0, 6)
    }
  },
  methods: {
    showMoreImages() {
      this.showAll = true
    },
    openLightbox(index) {
      this.currentIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = 'auto'
    },
    nextPhoto() {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length
    },
    prevPhoto() {
      this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}

.max-w-9xl {
  max-width: 90rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.md\:py-\[72px\] {
  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 72px;
  }
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.md\:px-0 {
  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
}

.text-center {
  text-align: center;
}

.text-\[48px\] {
  font-size: 48px;
}

.md\:text-\[72px\] {
  @media (min-width: 768px) {
    font-size: 72px;
  }
}

.leading-\[60px\] {
  line-height: 60px;
}

.md\:leading-\[90px\] {
  @media (min-width: 768px) {
    line-height: 90px;
  }
}

.font-pinyonScript {
  font-family: 'Pinyon Script', cursive !important;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.md\:mb-10 {
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.md\:grid-cols-3 {
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.gap-2 {
  gap: 0.5rem;
}

.md\:gap-4 {
  @media (min-width: 768px) {
    gap: 1rem;
  }
}

.hidden {
  display: none;
}

.w-full {
  width: 100%;
}

.object-cover {
  object-fit: cover;
}

.rounded {
  border-radius: 0.25rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.cursor-pointer {
  cursor: pointer;
}

.hover\:opacity-90:hover {
  opacity: 0.9;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.mt-8 {
  margin-top: 2rem;
}

.md\:mt-\[72px\] {
  @media (min-width: 768px) {
    margin-top: 72px;
  }
}

.uppercase {
  text-transform: uppercase;
}

.rounded-full {
  border-radius: 9999px;
}

.text-white {
  color: white;
}

.font-prata {
  font-family: 'Prata', serif !important;
}

.text-sm {
  font-size: 0.875rem;
}

.md\:text-\[18px\] {
  @media (min-width: 768px) {
    font-size: 18px;
  }
}

.min-w-\[180px\] {
  min-width: 180px;
}

.md\:min-w-\[250px\] {
  @media (min-width: 768px) {
    min-width: 250px;
  }
}

.p-3 {
  padding: 0.75rem;
}

.md\:p-6 {
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
}

button {
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Lightbox styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 40px;
  padding: 10px 20px;
  cursor: pointer;
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}
</style>

