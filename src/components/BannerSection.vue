<template>
  <section id="banner" class="banner-section">
    <div class="relative">
      <section class="relative" style="background: rgb(251, 247, 245);">
        <img 
          class="absolute top-0 left-0 max-w-[188px] max-h-[174px] md:max-w-[327px] md:max-h-[303px]" 
          src="/assets/7.png" 
          loading="lazy"
          alt="decoration"
        >
        
        <div class="max-w-[1443px] mx-auto grid md:grid-cols-[1fr,1.5fr] md:pt-[60px] gap-[30px] px-[15px]">
          <!-- Left side - Text content -->
          <div class="flex flex-col items-center justify-center md:pt-[125px]">
            <div class="relative">
              <div class="banner-title font-prata uppercase text-dark-200 text-lg md:text-2xl">
                Lễ Thành Hôn
              </div>
            </div>
            
            <div class="mt-6 mb-[41px] md:mb-[93px]">
              <div class="relative">
                <div class="groom-name font-pinyonScript text-[56px] md:text-[72px] md:leading-[90px] text-center" style="font-family: 'Pinyon Script', cursive; color: rgb(161, 47, 12);">
                  Văn Tiến
                </div>
              </div>
              
              <h1 class="text-[64px] md:leading-[60px] h-[60px] md:h-auto items-center flex justify-center font-pinyonScript text-center" style="color: rgb(161, 47, 12);">
                & 
              </h1>
              
              <div class="relative">
                <div class="bride-name font-pinyonScript text-[56px] md:text-[72px] md:leading-[90px] text-center" style="font-family: 'Pinyon Script', cursive; color: rgb(161, 47, 12);">
                  Huyền Trang
                </div>
              </div>
            </div>
            
            <!-- Date display -->
            <div class="flex space-x-[15px] md:space-x-[30px] text-[32px] md:text-[80px] items-center h-auto" style="color: rgb(244, 219, 206);">
              <div class="relative">
                <div class="leading-none">29</div>
              </div>
              <div class="self-stretch w-[1.66px]" style="background: rgb(244, 219, 206);"></div>
              <div class="relative">
                <div class="leading-none">01</div>
              </div>
              <div class="self-stretch w-[1.66px]" style="background: rgb(244, 219, 206);"></div>
              <div class="relative">
                <div class="leading-none">2026</div>
              </div>
            </div>
          </div>
          
          <!-- Right side - Images -->
          <div class="relative">
            <div class="flex items-end pl-5 justify-between md:justify-center">
              <!-- Main photo container -->
              <div class="relative w-[223px] h-[261px] md:w-[497px] md:h-[600px]">
                <div class="overflow-hidden cursor-pointer absolute w-full h-full z-20 p-0 rounded-t-full border-[1px]" style="border-color: rgb(161, 47, 12); padding: 0px;">
                  <img 
                    class="w-full h-full z-10 object-cover border-transparent" 
                    src="/assets/a143A1171_60x90_AL5B_1768320020_1589.webp" 
                    loading="lazy" 
                    draggable="false"
                    alt="Wedding couple"
                  >
                </div>
                <div class="z-10 absolute bottom-0 rounded-t-full border-[1px] w-[223px] h-[261px] md:w-[497px] md:h-[600px]" style="border-color: rgb(161, 47, 12);"></div>
                <div class="z-10 absolute bottom-0 translate-x-5 md:translate-x-10 rounded-t-full border-r-[1px] w-[223px] h-[261px] md:w-[497px] md:h-[600px]" style="border-color: rgb(161, 47, 12);"></div>
              </div>
              
              <!-- Secondary photo -->
              <div class="relative w-[134px] h-[158px] md:w-[297px] md:h-[349px] z-30 -translate-x-20">
                <div class="overflow-hidden cursor-pointer absolute w-full h-full z-20 rounded-t-full border-[2px] p-0" style="border-color: rgb(161, 47, 12); padding: 0px;">
                  <img 
                    class="w-full h-full z-10 object-cover border-transparent" 
                    src="/assets/c143A1672_1768320037_1140.webp" 
                    loading="lazy" 
                    draggable="false"
                    alt="Wedding couple secondary"
                  >
                </div>
                <div class="z-10 absolute bottom-0 rounded-t-full border-[1px] w-[134px] h-[158px] md:w-[297px] md:h-[349px]" style="border-color: rgb(161, 47, 12);"></div>
              </div>
            </div>
            
            <img 
              src="/assets/04.png" 
              class="absolute -bottom-10 md:-bottom-20 right-0 z-30 w-[115px] h-[96px] md:w-[256px] md:h-[213px]" 
              loading="lazy"
              alt="decoration"
            >
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerSection'
}
</script>

<style scoped>
.banner-section {
  width: 100%;
  position: relative;
}

.font-pinyonScript {
  font-family: 'Pinyon Script', cursive !important;
}

.font-prata {
  font-family: 'Prata', serif !important;
}

.text-dark-200 {
  color: #333;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-30 {
  z-index: 30;
}

.rounded-t-full {
  border-radius: 50% 50% 0 0;
}

.overflow-hidden {
  overflow: hidden;
}

.object-cover {
  object-fit: cover;
}

.cursor-pointer {
  cursor: pointer;
}

.space-x-\[15px\] > * + * {
  margin-left: 15px;
}

.md\:space-x-\[30px\] > * + * {
  @media (min-width: 768px) {
    margin-left: 30px;
  }
}

.self-stretch {
  align-self: stretch;
}

.translate-x-5 {
  transform: translateX(1.25rem);
}

.md\:translate-x-10 {
  @media (min-width: 768px) {
    transform: translateX(2.5rem);
  }
}

.-translate-x-20 {
  transform: translateX(-5rem);
}

.-bottom-10 {
  bottom: -2.5rem;
}

.md\:-bottom-20 {
  @media (min-width: 768px) {
    bottom: -5rem;
  }
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.bottom-0 {
  bottom: 0;
}

.right-0 {
  right: 0;
}

.max-w-\[188px\] {
  max-width: 188px;
}

.max-h-\[174px\] {
  max-height: 174px;
}

.md\:max-w-\[327px\] {
  @media (min-width: 768px) {
    max-width: 327px;
  }
}

.md\:max-h-\[303px\] {
  @media (min-width: 768px) {
    max-height: 303px;
  }
}

.text-lg {
  font-size: 1.125rem;
}

.md\:text-2xl {
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.text-\[56px\] {
  font-size: 56px;
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

.text-center {
  text-align: center;
}

.uppercase {
  text-transform: uppercase;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mb-\[41px\] {
  margin-bottom: 41px;
}

.md\:mb-\[93px\] {
  @media (min-width: 768px) {
    margin-bottom: 93px;
  }
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
}

.md\:grid-cols-\[1fr\,1\.5fr\] {
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
  }
}

.md\:pt-\[60px\] {
  @media (min-width: 768px) {
    padding-top: 60px;
  }
}

.gap-\[30px\] {
  gap: 30px;
}

.px-\[15px\] {
  padding-left: 15px;
  padding-right: 15px;
}

.md\:pt-\[125px\] {
  @media (min-width: 768px) {
    padding-top: 125px;
  }
}

.text-\[64px\] {
  font-size: 64px;
}

.md\:leading-\[60px\] {
  @media (min-width: 768px) {
    line-height: 60px;
  }
}

.h-\[60px\] {
  height: 60px;
}

.md\:h-auto {
  @media (min-width: 768px) {
    height: auto;
  }
}

.text-\[32px\] {
  font-size: 32px;
}

.md\:text-\[80px\] {
  @media (min-width: 768px) {
    font-size: 80px;
  }
}

.leading-none {
  line-height: 1;
}

.w-\[1\.66px\] {
  width: 1.66px;
}

.items-end {
  align-items: flex-end;
}

.justify-between {
  justify-content: space-between;
}

.md\:justify-center {
  @media (min-width: 768px) {
    justify-content: center;
  }
}

.pl-5 {
  padding-left: 1.25rem;
}

.w-\[223px\] {
  width: 223px;
}

.h-\[261px\] {
  height: 261px;
}

.md\:w-\[497px\] {
  @media (min-width: 768px) {
    width: 497px;
  }
}

.md\:h-\[600px\] {
  @media (min-width: 768px) {
    height: 600px;
  }
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.border-\[1px\] {
  border-width: 1px;
}

.border-\[2px\] {
  border-width: 2px;
}

.border-r-\[1px\] {
  border-right-width: 1px;
}

.p-0 {
  padding: 0;
}

.w-\[115px\] {
  width: 115px;
}

.h-\[96px\] {
  height: 96px;
}

.md\:w-\[256px\] {
  @media (min-width: 768px) {
    width: 256px;
  }
}

.md\:h-\[213px\] {
  @media (min-width: 768px) {
    height: 213px;
  }
}

.w-\[134px\] {
  width: 134px;
}

.h-\[158px\] {
  height: 158px;
}

.md\:w-\[297px\] {
  @media (min-width: 768px) {
    width: 297px;
  }
}

.md\:h-\[349px\] {
  @media (min-width: 768px) {
    height: 349px;
  }
}

.max-w-\[1443px\] {
  max-width: 1443px;
}

@media (max-width: 767px) {
  .md\:grid-cols-\[1fr\,1\.5fr\] {
    grid-template-columns: 1fr;
  }
  
  .md\:pt-\[125px\] {
    padding-top: 30px;
  }
  
  .md\:mb-\[93px\] {
    margin-bottom: 41px;
  }
  
  .-translate-x-20 {
    transform: translateX(-2rem);
  }
}
</style>
