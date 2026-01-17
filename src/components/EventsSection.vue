<template>
  <div id="event" class="relative" data-aos="fade-up" data-aos-delay="100">
    <div class="relative">
      <section class="relative grid py-[88px] text-center" style="background-color: rgb(251, 247, 245);">
        <img 
          src="/assets/left.png" 
          class="absolute -top-0 -left-0 md:w-[280px] md:h-[356px] w-[199px] h-[208px]" 
          loading="lazy"
          alt="decoration"
          style="opacity: 0; transform: translateX(-50px);"
        >
        <img 
          src="/assets/right.png" 
          class="absolute -bottom-0 -right-0 md:w-[280px] md:h-[356px] w-[199px] h-[208px]" 
          loading="lazy"
          alt="decoration"
          style="opacity: 0; transform: translateX(50px);"
        >
        
        <div class="max-w-9xl mx-auto py-[95px] w-full">
          <div class="text-center text-[48px] md:text-[72px] md:leading-[90px] font-pinyonScript mb-8 md:mb-10" style="color: rgb(161, 47, 12); font-family: 'Pinyon Script', cursive;">
            Sự kiện
          </div>
          
          <div class="flex flex-col relative">
            <div class="hidden md:block absolute w-2/4 h-1 left-1/4 top-[56%] z-0" style="background: rgb(161, 47, 12);"></div>
            
            <div class="flex flex-col md:flex-row relative gap-[125px] md:gap-0 justify-evenly">
              <div v-for="(event, index) in events" :key="index" class="relative">
                <div class="z-20 flex-1 flex flex-col justify-center items-center gap-[34px]">
                  <img :src="event.icon" class="w-[110px] h-[110px]" loading="lazy" :alt="event.name">
                  
                  <div class="flex justify-center">
                    <div class="uppercase rounded-full text-white font-prata text-sm md:text-[18px] min-w-[180px] md:min-w-[250px] px-4 py-3 md:p-6" style="background-color: rgb(161, 47, 12);">
                      {{ event.name }}
                    </div>
                  </div>
                  
                  <div class="px-9">
                    <div class="flex text-2xl gap-5 justify-center items-center text-dark-200">
                      <div>{{ event.time }}</div>
                      <p class="w-[15px] h-[2px] bg-dark-200"></p>
                      <div class="flex space-x-3 md:space-x-[35px] items-center h-auto">
                        <div class="leading-none">{{ event.day }}</div>
                        <div class="self-stretch w-[1.66px] bg-dark-200"></div>
                        <div class="leading-none">{{ event.month }}</div>
                        <div class="self-stretch w-[1.66px] bg-dark-200"></div>
                        <div class="leading-none">{{ event.year }}</div>
                      </div>
                    </div>
                    <div class="font-prata text-base text-dark-200 pt-4 leading-[170%]">
                      <div class="leading-none">{{ event.location }}</div>
                    </div>
                  </div>
                </div>
                
                <div class="ask-selection flex bg-transparent w-[200px] !bottom-[-65px]">
                  <div class="ask-option" style="background-color: rgb(161, 47, 12);">
                    <a href="#" class="uppercase text-[#EEDED1] px-2 py-2 font-bold text-base w-full md:w-[150px] pointer-events-none opacity-50" aria-disabled="true">
                      <span style="color: rgb(255, 255, 255);">Chỉ đường</span>
                    </a>
                  </div>
                  <div class="ask-option" style="background-color: rgb(244, 219, 206);">
                    <button class="calendar-link-button uppercase text-[#EEDED1] px-2 py-2 font-bold text-base w-full md:w-[150px]">
                      <span style="color: rgb(161, 47, 12);">Thêm vào lịch</span>
                    </button>
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
  name: 'EventsSection',
  data() {
    return {
      events: [
        {
          name: 'Ăn hỏi',
          time: '09:00 AM',
          day: '28',
          month: '1',
          year: '2024',
          location: 'Ngõ 1, TDP Ninh Sơn, Phường Chương Mỹ, Hà Nội',
          icon: '/assets/eventIcon1.png'
        },
        {
          name: 'Đón dâu',
          time: '01:30 PM',
          day: '29',
          month: '1',
          year: '2026',
          location: 'Ngõ 1, TDP Ninh Sơn, Phường Chương Mỹ, Hà Nội',
          icon: '/assets/eventIcon2.png'
        },
        {
          name: 'Tiệc cưới',
          time: '02:00 PM',
          day: '29',
          month: '1',
          year: '2026',
          location: 'Xóm 1, TDP Ninh Sơn, Phường Chương Mỹ, Hà Nội',
          icon: '/assets/eventIcon3.png'
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

.py-\[88px\] {
  padding-top: 88px;
  padding-bottom: 88px;
}

.absolute {
  position: absolute;
}

.-top-0 {
  top: 0;
}

.-left-0 {
  left: 0;
}

.-bottom-0 {
  bottom: 0;
}

.-right-0 {
  right: 0;
}

.md\:w-\[280px\] {
  @media (min-width: 768px) {
    width: 280px;
  }
}

.md\:h-\[356px\] {
  @media (min-width: 768px) {
    height: 356px;
  }
}

.w-\[199px\] {
  width: 199px;
}

.h-\[208px\] {
  height: 208px;
}

.max-w-9xl {
  max-width: 90rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.py-\[95px\] {
  padding-top: 95px;
  padding-bottom: 95px;
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

.md\:leading-\[90px\] {
  @media (min-width: 768px) {
    line-height: 90px;
  }
}

.font-pinyonScript {
  font-family: 'Pinyon Script', cursive !important;
}

.mb-8 {
  margin-bottom: 2rem;
}

.md\:mb-10 {
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
}

.flex-col {
  flex-direction: column;
}

.hidden {
  display: none;
}

.md\:block {
  @media (min-width: 768px) {
    display: block;
  }
}

.w-2\/4 {
  width: 50%;
}

.h-1 {
  height: 0.25rem;
}

.left-1\/4 {
  left: 25%;
}

.top-\[56\%\] {
  top: 56%;
}

.z-0 {
  z-index: 0;
}

.md\:flex-row {
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.gap-\[125px\] {
  gap: 125px;
}

.md\:gap-0 {
  @media (min-width: 768px) {
    gap: 0;
  }
}

.justify-evenly {
  justify-content: space-evenly;
}

.z-20 {
  z-index: 20;
}

.flex-1 {
  flex: 1 1 0%;
}

.gap-\[34px\] {
  gap: 34px;
}

.w-\[110px\] {
  width: 110px;
}

.h-\[110px\] {
  height: 110px;
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

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.md\:p-6 {
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
}

.px-9 {
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.gap-5 {
  gap: 1.25rem;
}

.text-dark-200 {
  color: #333;
}

.w-\[15px\] {
  width: 15px;
}

.h-\[2px\] {
  height: 2px;
}

.bg-dark-200 {
  background-color: #333;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}

.md\:space-x-\[35px\] > * + * {
  @media (min-width: 768px) {
    margin-left: 35px;
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

.text-base {
  font-size: 1rem;
}

.pt-4 {
  padding-top: 1rem;
}

.leading-\[170\%\] {
  line-height: 170%;
}

.ask-selection {
  display: flex;
  background-color: transparent;
  width: 200px;
  bottom: -65px;
  position: relative;
}

.ask-option {
  flex: 1;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.font-bold {
  font-weight: 700;
}

.md\:w-\[150px\] {
  @media (min-width: 768px) {
    width: 150px;
  }
}

.pointer-events-none {
  pointer-events: none;
}

.opacity-50 {
  opacity: 0.5;
}

button {
  cursor: pointer;
  border: none;
  background: transparent;
}

a {
  text-decoration: none;
  display: block;
}
</style>

