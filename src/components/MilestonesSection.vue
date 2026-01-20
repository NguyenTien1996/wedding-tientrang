<template>
  <div id="timeline" class="relative" data-aos="fade-up" data-aos-delay="200">
    <div class="relative">
      <section class="relative grid text-center bg-white overflow-x-hidden">
        <div class="max-w-9xl mx-auto pt-[60px] w-full">
          <div class="relative">
            <div class="timeline-mainTitle text-center text-[48px] md:text-[72px] leading-[40px] md:leading-[90px] font-pinyonScript md:mb-10 px-4" style="color: rgb(161, 47, 12);">
              Cột mốc
            </div>
          </div>
          
          <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-9 w-full px-[15px]">
            <div v-for="(milestone, index) in milestones" :key="index" class="relative grid grid-rows-2 w-full">
              <div class="w-full relative rounded-t-full h-full md:h-[385px] border-gray-400 border-none">
                <img 
                  :src="milestone.image" 
                  alt="Wedding couple" 
                  class="relative w-full z-30 h-full object-cover rounded-t-full h-full md:h-[385px]" 
                  loading="lazy"
                >
              </div>
              
              <div class="relative h-fit" style="background-color: rgb(251, 247, 245);">
                <div class="absolute -top-20 w-full flex justify-center items-center z-40 pointer-events-none">
                  <img 
                    src="/assets/1.png" 
                    class="md:w-[210px] md:h-[160px] w-[180px] h-[181px]" 
                    loading="lazy"
                    alt="decoration"
                  >
                </div>
                
                <div class="pt-16 px-10 pb-10">
                  <h1 class="text-[32px] md:text-[40px] font-pinyonScript" style="color: rgb(161, 47, 12); font-family: 'Pinyon Script', cursive;">
                    {{ milestone.title }}
                  </h1>
                  <div class="mt-3 text-dark-200" style="font-family: 'Pinyon Script', cursive; height: 7.5em; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;">
                    {{ milestone.text }}
                  </div>
                </div>
                
                <div class="flex justify-center items-center">
                  <div class="flex space-x-[12px] md:space-x-[35px] text-[28px] md:text-[40px] items-center h-auto" style="color: rgb(244, 219, 206);">
                    <span class="leading-none">{{ milestone.day }}</span>
                    <div class="self-stretch w-[1.66px]" style="background-color: rgb(244, 219, 206);"></div>
                    <span class="leading-none">{{ milestone.month }}</span>
                    <div class="self-stretch w-[1.66px]" style="background-color: rgb(244, 219, 206);"></div>
                    <span class="leading-none">{{ milestone.year }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MilestonesSection',
  data() {
    return {
      milestones: [
        {
          title: 'Lần đầu gặp nhau',
          text: 'Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc biệt này chính là món quà vô giá với chúng tôi. Hãy cùng chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong ngày hạnh phúc nhất này!',
          day: '18',
          month: '09',
          year: '2023',
          image: '/assets/picture8.webp'
        },
        {
          title: 'Chuyến đi đầu tiên',
          text: 'Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc biệt này chính là món quà vô giá với chúng tôi. Hãy cùng chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong ngày hạnh phúc nhất này!',
          day: '18',
          month: '09',
          year: '2026',
          image: '/assets/picture8.webp'
        },
        {
          title: 'Hẹn ước trọn đời',
          text: 'Mỗi lời chúc phúc và sự hiện diện của bạn trong ngày đặc biệt này chính là món quà vô giá với chúng tôi. Hãy cùng chúng tôi tận hưởng niềm vui, tiếng cười và sự ấm áp trong ngày hạnh phúc nhất này!',
          day: '18',
          month: '09',
          year: '2025',
          image: '/assets/picture8.webp'
        }
      ]
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}

.grid {
  display: grid;
}

.text-center {
  text-align: center;
}

.bg-white {
  background-color: white;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.max-w-9xl {
  max-width: 90rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.pt-\[60px\] {
  padding-top: 60px;
}

.w-full {
  width: 100%;
}

.text-\[48px\] {
  font-size: 48px;
}

.md\:text-\[72px\] {
  @media (min-width: 768px) {
    font-size: 72px;
  }
}

.leading-\[40px\] {
  line-height: 40px;
}

.md\:leading-\[90px\] {
  @media (min-width: 768px) {
    line-height: 90px;
  }
}

.font-pinyonScript {
  font-family: 'Pinyon Script', cursive !important;
}

.md\:mb-10 {
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.mt-14 {
  margin-top: 3.5rem;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-2 {
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.lg\:grid-cols-3 {
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.gap-x-\[30px\] {
  column-gap: 30px;
}

.gap-y-9 {
  row-gap: 2.25rem;
}

.px-\[15px\] {
  padding-left: 15px;
  padding-right: 15px;
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.rounded-t-full {
  border-radius: 50% 50% 0 0;
}

.h-full {
  height: 100%;
}

.md\:h-\[385px\] {
  @media (min-width: 768px) {
    height: 385px;
  }
}

.border-none {
  border: none;
}

.z-30 {
  z-index: 30;
}

.object-cover {
  object-fit: cover;
}

.h-fit {
  height: fit-content;
}

.absolute {
  position: absolute;
}

.-top-20 {
  top: -5rem;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.z-40 {
  z-index: 40;
}

.pointer-events-none {
  pointer-events: none;
}

.md\:w-\[210px\] {
  @media (min-width: 768px) {
    width: 210px;
  }
}

.md\:h-\[160px\] {
  @media (min-width: 768px) {
    height: 160px;
  }
}

.w-\[180px\] {
  width: 180px;
}

.h-\[181px\] {
  height: 181px;
}

.pt-16 {
  padding-top: 4rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.text-\[32px\] {
  font-size: 32px;
}

.md\:text-\[40px\] {
  @media (min-width: 768px) {
    font-size: 40px;
  }
}

.mt-3 {
  margin-top: 0.75rem;
}

.text-dark-200 {
  color: #333;
}

.space-x-\[12px\] > * + * {
  margin-left: 12px;
}

.md\:space-x-\[35px\] > * + * {
  @media (min-width: 768px) {
    margin-left: 35px;
  }
}

.text-\[28px\] {
  font-size: 28px;
}

.md\:text-\[40px\] {
  @media (min-width: 768px) {
    font-size: 40px;
  }
}

.h-auto {
  height: auto;
}

.leading-none {
  line-height: 1;
}

.self-stretch {
  align-self: stretch;
}

.w-\[1\.66px\] {
  width: 1.66px;
}
</style>

