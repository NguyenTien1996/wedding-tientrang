<template>
  <div id="invitation" class="relative" data-aos="fade-up">
    <div class="relative">
      <section class="relative bg-white grid pt-[72px] md:pt-[90px] text-center">
        <div class="text-dark-200 md:mx-auto mx-[15px]">
          <div class="relative">
            <div class="invitation-title font-pinyonScript text-[40px] md:text-[48px] leading-[60px] bg-transparent w-full">
              Trân trọng kính mời
            </div>
          </div>
          
          <div class="relative">
            <div class="invitation-description text-base mt-1">
              Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng mình có thêm một niềm hạnh phúc!
            </div>
          </div>
        </div>
        
        <!-- Date and time section -->
        <div class="relative px-[15px] mt-[28px] py-[28px] grid justify-center items-center" style="background: rgb(251, 247, 245); color: rgb(161, 47, 12);">
          <img 
            src="/assets/left.png" 
            class="absolute left-0 top-0 w-[272px] h-[100%] hidden md:block" 
            loading="lazy"
            alt="decoration"
          >
          <img 
            src="/assets/8.png" 
            class="absolute right-0 bottom-0 w-[272px] h-[100%] hidden md:block" 
            loading="lazy"
            alt="decoration"
          >
          
          <div class="max-w-[1443px] mx-auto">
            <div class="relative">
              <div class="invitation-time text-2xl md:text-[32px] leading-[44px] font-prata">
                17:30, Thứ 4
              </div>
            </div>
            
            <!-- Date display -->
            <div class="flex space-x-[20px] md:space-x-[35px] text-[32px] md:text-[56px] items-center h-auto pt-10 pb-[35px]">
              <div class="relative">
                <div class="leading-none">{{ invitationDay }}</div>
              </div>
              <div class="self-stretch w-[1.66px] bg-[#F4DBCE]"></div>
              <div class="relative">
                <div class="leading-none">{{ invitationMonth }}</div>
              </div>
              <div class="self-stretch w-[1.66px] bg-[#F4DBCE]"></div>
              <div class="relative">
                <div class="leading-none">{{ invitationYear }}</div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="invitation-location text-2xl md:text-[32px] leading-[44px] font-prata">
              Xóm 1 Đoan Kết, TDP Ninh Sơn, Phường Chương Mỹ, Hà Nội
            </div>
          </div>
          
          <!-- Countdown timer -->
          <div class="relative mt-6" id="invitation-countdown">
            <div class="flex justify-center items-center gap-2 md:gap-4 mt-4">
              <div class="flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg" style="background-color: rgb(244, 219, 206);">
                <span class="text-2xl md:text-3xl font-bold" style="color: rgb(161, 47, 12);">{{ countdown.days }}</span>
                <span class="text-xs md:text-sm" style="color: rgb(161, 47, 12);">Ngày</span>
              </div>
              <span class="text-2xl font-bold" style="color: rgb(161, 47, 12);">:</span>
              <div class="flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg" style="background-color: rgb(244, 219, 206);">
                <span class="text-2xl md:text-3xl font-bold" style="color: rgb(161, 47, 12);">{{ countdown.hours }}</span>
                <span class="text-xs md:text-sm" style="color: rgb(161, 47, 12);">Giờ</span>
              </div>
              <span class="text-2xl font-bold" style="color: rgb(161, 47, 12);">:</span>
              <div class="flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg" style="background-color: rgb(244, 219, 206);">
                <span class="text-2xl md:text-3xl font-bold" style="color: rgb(161, 47, 12);">{{ countdown.minutes }}</span>
                <span class="text-xs md:text-sm" style="color: rgb(161, 47, 12);">Phút</span>
              </div>
              <span class="text-2xl font-bold" style="color: rgb(161, 47, 12);">:</span>
              <div class="flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg" style="background-color: rgb(244, 219, 206);">
                <span class="text-2xl md:text-3xl font-bold" style="color: rgb(161, 47, 12);">{{ countdown.seconds }}</span>
                <span class="text-xs md:text-sm" style="color: rgb(161, 47, 12);">Giây</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Sub description and buttons -->
        <div class="relative">
          <div class="invitation-subDescription text-base pt-[30px] pb-10 md:pb-[56px] text-dark-200 mx-[15px]">
            Sự hiện diện của bạn là niềm vinh dự của chúng tôi!
          </div>
          
          <div class="flex md:mb-10 flex-row justify-center items-center gap-2 md:gap-8 px-4 md:px-[15px] pb-10 md:pb-0">
            <button 
              class="uppercase rounded-full text-white font-prata text-sm md:text-[18px] min-w-[180px] md:min-w-[250px] p-3 md:p-6" 
              style="background: rgb(161, 47, 12);"
              @click="handleSendWish"
            >
              Gửi lời chúc
            </button>
            <button 
              id="btn-confirm-attendance" 
              class="uppercase rounded-full font-prata text-sm md:text-[18px] min-w-[180px] md:min-w-[250px] p-3 md:p-6" 
              style="background: rgb(244, 219, 206); color: rgb(161, 47, 12);"
              @click="handleConfirmAttendance"
            >
              Xác nhận tham dự
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CeremonySection',
  data() {
    return {
      invitationDay: '28',
      invitationMonth: '01',
      invitationYear: '2026',
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      targetDate: new Date('2026-01-29T17:00:00'),
      interval: null
    }
  },
  mounted() {
    this.updateCountdown()
    this.interval = setInterval(this.updateCountdown, 1000)
  },
  beforeUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime()
      const distance = this.targetDate.getTime() - now
      
      if (distance < 0) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        return
      }
      
      this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    },
    handleSendWish() {
      // Scroll to guestbook section
      const guestbookSection = document.getElementById('message') || document.querySelector('.guestbook-section')
      if (guestbookSection) {
        guestbookSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
    handleConfirmAttendance() {
      alert('Cảm ơn bạn đã xác nhận tham dự!')
    }
  }
}
</script>

<style scoped>
.font-pinyonScript {
  font-family: 'Pinyon Script', cursive !important;
}

.font-prata {
  font-family: 'Prata', serif !important;
}

.text-dark-200 {
  color: #333;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.bg-white {
  background-color: white;
}

.grid {
  display: grid;
}

.text-center {
  text-align: center;
}

.pt-\[72px\] {
  padding-top: 72px;
}

.md\:pt-\[90px\] {
  @media (min-width: 768px) {
    padding-top: 90px;
  }
}

.max-w-\[1443px\] {
  max-width: 1443px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mx-\[15px\] {
  margin-left: 15px;
  margin-right: 15px;
}

.text-\[40px\] {
  font-size: 40px;
}

.md\:text-\[48px\] {
  @media (min-width: 768px) {
    font-size: 48px;
  }
}

.leading-\[60px\] {
  line-height: 60px;
}

.bg-transparent {
  background-color: transparent;
}

.w-full {
  width: 100%;
}

.text-base {
  font-size: 1rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.px-\[15px\] {
  padding-left: 15px;
  padding-right: 15px;
}

.mt-\[28px\] {
  margin-top: 28px;
}

.py-\[28px\] {
  padding-top: 28px;
  padding-bottom: 28px;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.left-0 {
  left: 0;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.bottom-0 {
  bottom: 0;
}

.w-\[272px\] {
  width: 272px;
}

.h-\[100\%\] {
  height: 100%;
}

.hidden {
  display: none;
}

.md\:block {
  @media (min-width: 768px) {
    display: block;
  }
}

.text-2xl {
  font-size: 1.5rem;
}

.md\:text-\[32px\] {
  @media (min-width: 768px) {
    font-size: 32px;
  }
}

.leading-\[44px\] {
  line-height: 44px;
}

.flex {
  display: flex;
}

.space-x-\[20px\] > * + * {
  margin-left: 20px;
}

.md\:space-x-\[35px\] > * + * {
  @media (min-width: 768px) {
    margin-left: 35px;
  }
}

.text-\[32px\] {
  font-size: 32px;
}

.md\:text-\[56px\] {
  @media (min-width: 768px) {
    font-size: 56px;
  }
}

.h-auto {
  height: auto;
}

.pt-10 {
  padding-top: 2.5rem;
}

.pb-\[35px\] {
  padding-bottom: 35px;
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

.bg-\[#F4DBCE\] {
  background-color: #F4DBCE;
}

.mt-6 {
  margin-top: 1.5rem;
}

.gap-2 {
  gap: 0.5rem;
}

.md\:gap-4 {
  @media (min-width: 768px) {
    gap: 1rem;
  }
}

.flex-col {
  flex-direction: column;
}

.w-\[60px\] {
  width: 60px;
}

.h-\[60px\] {
  height: 60px;
}

.md\:w-\[80px\] {
  @media (min-width: 768px) {
    width: 80px;
  }
}

.md\:h-\[80px\] {
  @media (min-width: 768px) {
    height: 80px;
  }
}

.rounded-lg {
  border-radius: 0.5rem;
}

.font-bold {
  font-weight: 700;
}

.text-xs {
  font-size: 0.75rem;
}

.md\:text-sm {
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
}

.md\:text-3xl {
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
}

.pt-\[30px\] {
  padding-top: 30px;
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.md\:pb-\[56px\] {
  @media (min-width: 768px) {
    padding-bottom: 56px;
  }
}

.md\:mb-10 {
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
}

.flex-row {
  flex-direction: row;
}

.gap-8 {
  gap: 2rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.pb-0 {
  padding-bottom: 0;
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
</style>


