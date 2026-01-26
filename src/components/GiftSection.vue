<template>
  <div id="bank" class="relative" data-aos="fade-up" data-aos-delay="100">
    <div class="relative">
      <div class="w-full relative bg-[#FBF7F5] md:bg-transparent">
        <div class="absolute w-screen left-0 top-0 md:h-80" style="background: rgb(251, 247, 245);"></div>
        
        <img 
          src="/assets/9.png" 
          class="absolute bottom-[35%] -left-2 md:w-[260px] md:h-[305px] w-[100%] h-[133px] hidden md:block" 
          loading="lazy"
          alt="decoration"
          style="opacity: 0; transform: translateX(-50px);"
        >
        <img 
          src="/assets/8.png" 
          class="absolute bottom-[35%] -right-2 md:w-[260px] md:h-[305px] w-[100%] h-[133px] hidden md:block" 
          loading="lazy"
          alt="decoration"
          style="opacity: 0; transform: translateX(50px);"
        >
        
        <div class="max-w-7xl mx-auto relative">
          <!-- Mobile Title -->
          <div class="py-8 text-center px-[15px] md:hidden">
            <h2 class="text-[40px] font-pinyonScript italic" style="color: rgb(161, 47, 12);">Mừng cưới</h2>
            <div class="mt-4 max-w-xl mx-auto text-center text-dark-200 text-sm">
              <div class="relative">
                <div class="w-full">Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình nhé ^^. Cảm ơn bạn rất nhiều!</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-end pt-[40px] md:pt-[100px] h-auto md:gap-8 gap-6">
            <!-- Groom Bank Info -->
            <div class="flex flex-col items-center md:items-end text-center md:text-center pb-6 md:pb-16 px-[15px] order-1 md:order-1 ">
              <h3 class="z-20 text-lg md:text-2xl font-prata mb-3 md:mb-4 w-full md:text-center" style="color: rgb(161, 47, 12);">
                <div class="relative">
                  <div class="font-prata">Mừng cưới đến chú rể</div>
                </div>
              </h3>
              
              <div class="w-full flex flex-col items-center md:items-end gap-4 md:gap-6">
                <div class="flex-shrink-0">
                  <div class="overflow-hidden cursor-pointer w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover relative z-1 rounded-lg" style="padding: 0px;">
                    <img 
                      class="w-full h-full z-10 object-cover border-transparent" 
                      alt="image-bank-groom"  
                      :src="qr3" 
                      loading="lazy" 
                      draggable="false"
                    >
                  </div>
                </div>
                
                <div class="flex flex-col items-center md:items-end text-center md:text-right gap-1">
                  <div class="relative">
                    <div class="font-prata text-sm md:text-base">Ngân hàng VPBank</div>
                  </div>
                  <div class="relative">
                    <div class="font-prata text-sm md:text-base">Chú rể</div>
                  </div>
                  <div class="relative">
                    <div class="font-prata text-s md:text-base break-all">12101996688</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Center Image -->
            <div class="relative w-full md:w-[402px] mx-auto pt-0 md:pt-[72px] bg-[#FBF7F5] overflow-visible order-3 md:order-2">
              <div class="overflow-hidden cursor-pointer relative rounded-t-full border-2 w-[300px] md:w-[402px] h-[355px] md:h-[465px] object-cover mx-auto relative z-1" style="padding: 0px; border-color: rgb(161, 47, 12);max-width: 85%;margin: auto;">
                <img 
                  class="w-full h-full z-10 object-cover border-transparent" 
                  alt="image-bank-bridge" 
                  src="/assets/a143A1171_60x90_AL5B_1768319981_5178.webp" 
                  loading="lazy" 
                  draggable="false"
                >
              </div>
            </div>
            
            <!-- Bride Bank Info -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left py-6 md:py-16 px-[15px] order-2 md:order-3">
              <h3 class="z-20 text-lg md:text-2xl font-prata mb-3 md:mb-4 w-full text-center md:text-center" style="color: rgb(161, 47, 12);">
                <div class="relative">
                  <div class="font-prata">Mừng cưới đến cô dâu</div>
                </div>
              </h3>
              
              <div class="w-full flex flex-col items-center md:items-start gap-4 md:gap-6">
                <div class="flex-shrink-0">
                  <div class="overflow-hidden cursor-pointer w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover relative z-1 rounded-lg" style="padding: 0px;">
                    <img 
                      class="w-full h-full z-10 object-cover border-transparent" 
                      alt="image-bank-bridge" 
                      :src="qr2" 
                      loading="lazy" 
                      draggable="false"
                    >
                  </div>
                </div>
                
                <div class="flex flex-col items-center md:items-start text-center md:text-left gap-1">
                  <div class="relative">
                    <div class="font-prata text-sm md:text-base">Ngân hàng Techcombank</div>
                  </div>
                  <div class="relative">
                    <div class="font-prata text-sm md:text-base">Cô dâu</div>
                  </div>
                  <div class="relative">
                    <div class="font-prata text-s md:text-base break-all">19036736466010</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <!-- Desktop Title -->
        <div class="py-[75px] text-center px-[15px] hidden md:block" style="background: rgb(251, 247, 245);">
          <h2 class="text-[56px] md:text-[72px] font-pinyonScript italic" style="color: rgb(161, 47, 12);">Mừng cưới</h2>
          <div class="mt-6 max-w-xl mx-auto text-center text-dark-200">
            <div class="relative">
              <div class="w-full">Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình nhé ^^. Cảm ơn bạn rất nhiều!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GiftSection',
  data() {
    return {
      qr1: '/assets/qr1.png',
      qr2: '/assets/qr2.png',
      qr3: '/assets/qr3.png',
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}

.w-full {
  width: 100%;
}

.bg-\[#FBF7F5\] {
  background-color: #FBF7F5;
}

.md\:bg-transparent {
  @media (min-width: 768px) {
    background-color: transparent;
  }
}

.absolute {
  position: absolute;
}

.w-screen {
  width: 100vw;
}

.left-0 {
  left: 0;
}

.top-0 {
  top: 0;
}

.md\:h-80 {
  @media (min-width: 768px) {
    height: 20rem;
  }
}

.bottom-\[35\%\] {
  bottom: 35%;
}

.-left-2 {
  left: -0.5rem;
}

.-right-2 {
  right: -0.5rem;
}

.md\:w-\[260px\] {
  @media (min-width: 768px) {
    width: 260px;
  }
}

.md\:h-\[305px\] {
  @media (min-width: 768px) {
    height: 305px;
  }
}

.w-\[100\%\] {
  width: 100%;
}

.h-\[133px\] {
  height: 133px;
}

.hidden {
  display: none;
}

.md\:block {
  @media (min-width: 768px) {
    display: block;
  }
}

.max-w-9xl {
  max-width: 90rem;
}

.max-w-7xl {
  max-width: 70rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-2 {
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.xl\:grid-cols-3 {
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}


.justify-center {
  justify-content: center;
}

.items-end {
  align-items: flex-end;
}

.pt-\[72px\] {
  padding-top: 72px;
}

.md\:pt-\[100px\] {
  @media (min-width: 768px) {
    padding-top: 100px;
  }
}

.h-auto {
  height: auto;
}

.md\:gap-8 {
  @media (min-width: 768px) {
    gap: 2rem;
  }
}

.block {
  display: block;
}

.text-center {
  text-align: center;
}

.pb-8 {
  padding-bottom: 2rem;
}

.px-\[15px\] {
  padding-left: 15px;
  padding-right: 15px;
}

.text-\[48px\] {
  font-size: 48px;
}

.md\:text-\[72px\] {
  @media (min-width: 768px) {
    font-size: 72px;
  }
}

.font-pinyonScript {
  font-family: 'Pinyon Script', cursive !important;
}

.italic {
  font-style: italic;
}

.mt-4 {
  margin-top: 1rem;
}

.max-w-xl {
  max-width: 36rem;
}

.text-dark-200 {
  color: #333;
}

.md\:flex {
  @media (min-width: 768px) {
    display: flex;
  }
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.md\:items-end {
  @media (min-width: 768px) {
    align-items: flex-end;
  }
}

.md\:text-right {
  @media (min-width: 768px) {
    text-align: right;
  }
}

.md\:pb-16 {
  @media (min-width: 768px) {
    padding-bottom: 4rem;
  }
}

.z-20 {
  z-index: 20;
}

.text-xl {
  font-size: 1.25rem;
}

.md\:text-2xl {
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.font-prata {
  font-family: 'Prata', serif !important;
}

.mb-4 {
  margin-bottom: 1rem;
}

.flex-row {
  flex-direction: row;
}

.justify-end {
  justify-content: flex-end;
}

.gap-6 {
  gap: 1.5rem;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.overflow-hidden {
  overflow: hidden;
}

.cursor-pointer {
  cursor: pointer;
}

.w-\[100px\] {
  width: 100px;
}

.h-\[100px\] {
  height: 100px;
}

.object-cover {
  object-fit: cover;
}

.z-1 {
  z-index: 1;
}

.z-10 {
  z-index: 10;
}

.border-transparent {
  border-color: transparent;
}

.p-0 {
  padding: 0;
}

.items-start {
  align-items: flex-start;
}

.text-left {
  text-align: left;
}

.gap-1 {
  gap: 0.25rem;
}

.md\:w-\[402px\] {
  @media (min-width: 768px) {
    width: 402px;
  }
}

.pt-0 {
  padding-top: 0;
}

.overflow-visible {
  overflow: visible;
}

.rounded-t-full {
  border-radius: 50% 50% 0 0;
}

.border-2 {
  border-style: solid;
  border-width: 2px;
}

.w-\[342px\] {
  width: 342px;
}

.h-\[390px\] {
  height: 390px;
}

.md\:h-\[465px\] {
  @media (min-width: 768px) {
    height: 465px;
  }
}

.h-full {
  height: 100%;
}

.md\:items-start {
  @media (min-width: 768px) {
    align-items: flex-start;
  }
}

.md\:text-left {
  @media (min-width: 768px) {
    text-align: left;
  }
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.md\:py-16 {
  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

.justify-center {
  justify-content: center;
}

.md\:justify-start {
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
}

.items-end {
  align-items: flex-end;
}

.text-right {
  text-align: right;
}

.py-\[75px\] {
  padding-top: 75px;
  padding-bottom: 75px;
}

.text-\[56px\] {
  font-size: 56px;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.pt-\[40px\] {
  padding-top: 40px;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.text-base {
  font-size: 1rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-\[40px\] {
  font-size: 40px;
}

.w-\[100px\] {
  width: 100px;
}

.h-\[100px\] {
  height: 100px;
}

.md\:w-\[130px\] {
  @media (min-width: 768px) {
    width: 130px;
  }
}

.md\:h-\[130px\] {
  @media (min-width: 768px) {
    height: 130px;
  }
}


.w-\[280px\] {
  width: 280px;
}

.h-\[280px\] {
  height: 280px;
}

.w-\[90px\] {
  width: 90px;
}

.h-\[90px\] {
  height: 90px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.break-all {
  word-break: break-all;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.md\:order-1 {
  @media (min-width: 768px) {
    order: 1;
  }
}

.md\:order-2 {
  @media (min-width: 768px) {
    order: 2;
  }
}

.md\:hidden {
  @media (min-width: 768px) {
    display: none;
  }
}
</style>


