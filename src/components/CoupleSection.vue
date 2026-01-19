<template>
  <div id="introduction" class="relative" data-aos="fade-up" data-aos-delay="100">
    <div class="relative">
      <section class="relative mx-auto" style="background: rgb(251, 247, 245);">
        <div class="absolute left-0 top-0 w-full h-[574px]" style="background: rgb(251, 247, 245);">
          <h1 class="hidden md:block absolute top-1/3 text-[110px] font-prata rotate-90" style="color: rgb(244, 219, 206);left: -9%;">GROOM</h1>
        </div>
        <div class="z-0 absolute right-0 bottom-0 w-[488px] h-[574px]" style="background: rgb(251, 247, 245);">
          <h1 class="hidden md:block absolute top-1/3 text-[110px] font-prata -rotate-90" style="right: -32% ;color: rgb(244, 219, 206);">BRIDE</h1>
        </div>
        
        <div class="z-20 grid md:grid-cols-2 justify-center items-center lg:px-[300px] gap-8">
         
          
          <!-- Bride -->
          <div class="relative text-center" data-aos="fade-left" data-aos-delay="100">
            <img 
              src="/assets/5.png" 
              class="md:block md:w-[206px] md:h-[209px] w-[150px] h-[150px] absolute bottom-20 md:-left-20 -left-12 z-10" 
              loading="lazy"
              alt="decoration"
            >
            <div class="overflow-hidden cursor-pointer relative border-[1px] rounded-t-[300px] md:mt-0 mt-5 md:max-w-[500px] mx-auto block w-full h-[400px] md:h-[600px] z-1" style="border-color: rgb(161, 47, 12); padding: 0px;border-style: solid;">
              <img 
                class="w-full h-full z-10 object-cover border-transparent" 
                src="./../../public/assets/h143A1321.jpg" 
                loading="lazy" 
                draggable="false"
                alt="Cô dâu"
                style="transform: scale(1.2);"
              >
            </div>
            <p class="text-lg md:text-2xl text-dark-200 font-prata mt-8">Cô dâu</p>
            <div class="relative">
              <div class="name-bride text-[56px] md:text-[72px] mt-3 font-pinyonScript" style="font-family: 'Pinyon Script', cursive; color: rgb(161, 47, 12);">
                Huyền Trang
              </div>
            </div>
          </div>

           <!-- Groom -->
           <div class="relative text-center mt-4 md:mt-0" data-aos="fade-right" data-aos-delay="100">
            <img 
              src="/assets/4.png" 
              
              class="md:block md:w-[206px] md:h-[209px] w-[150px] h-[150px] absolute bottom-20 md:-right-20 -right-12 z-10" 
              loading="lazy"
              alt="decoration"
            >
            <div class="overflow-hidden cursor-pointer relative border-[1px] rounded-t-[300px] md:max-w-[500px] mx-auto block w-full h-[400px] md:h-[600px] z-1" style="border-color: rgb(161, 47, 12); padding: 0px;border-style: solid;">
              <img 
                class="w-full h-full z-10 object-cover border-transparent" 
                src="./../../public/assets/men.jpg" 
                loading="lazy" 
                draggable="false"
                alt="Chú rể"
              >
            </div>
            <p class="text-lg md:text-2xl text-dark-200 font-prata mt-8">Chú rể</p>
            <div class="relative">
              <div class="name-groom text-[56px] md:text-[72px] mt-3 font-pinyonScript" style="font-family: 'Pinyon Script', cursive; color: rgb(161, 47, 12);">
                Văn Tiến
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
  name: 'CoupleSection'
}
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-1 {
  z-index: 1;
}

.w-full {
  width: 100%;
}

.h-full {
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

.top-1\/3 {
  top: 33.333333%;
}

.-left-\[12\%\] {
  left: -12%;
}

.-right-\[40\%\] {
  right: -40%;
}

.text-\[110px\] {
  font-size: 110px;
}

.font-prata {
  font-family: 'Prata', serif !important;
}

.rotate-90 {
  transform: rotate(90deg);
}

.-rotate-90 {
  transform: rotate(-90deg);
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
}

.md\:grid-cols-2 {
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.lg\:px-\[300px\] {
  @media (min-width: 1024px) {
    padding-left: 300px;
    padding-right: 300px;
  }
}

.gap-8 {
  gap: 2rem;
}

.px-\[15px\] {
  padding-left: 15px;
  padding-right: 15px;
}

.pb-\[59px\] {
  padding-bottom: 59px;
}

.pt-\[50px\] {
  padding-top: 50px;
}

.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 1rem;
}

.md\:mt-0 {
  @media (min-width: 768px) {
    margin-top: 0;
  }
}

.md\:w-\[206px\] {
  @media (min-width: 768px) {
    width: 206px;
  }
}

.md\:h-\[209px\] {
  @media (min-width: 768px) {
    height: 209px;
  }
}

.w-\[150px\] {
  width: 150px;
}

.h-\[150px\] {
  height: 150px;
}

.bottom-20 {
  bottom: 5rem;
}

.md\:-left-20 {
  @media (min-width: 768px) {
    left: -5rem;
  }
}

.-left-12 {
  left: -3rem;
}

.overflow-hidden {
  overflow: hidden;
}

.cursor-pointer {
  cursor: pointer;
}

.border-\[1px\] {
  border-width: 1px;
}

.rounded-t-\[300px\] {
  border-radius: 300px 300px 0 0;
}

.md\:max-w-\[500px\] {
  @media (min-width: 768px) {
    max-width: 500px;
  }
}

.max-w-\[300px\] {
  max-width: 300px;
}

.h-\[400px\] {
  height: 400px;
}

.md\:h-\[600px\] {
  @media (min-width: 768px) {
    height: 600px;
  }
}

.block {
  display: block;
}

.object-cover {
  object-fit: cover;
}

.border-transparent {
  border-color: transparent;
}

.p-0 {
  padding: 0;
}

.text-lg {
  font-size: 1.125rem;
}

.md\:text-2xl {
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.text-dark-200 {
  color: #333;
}

.mt-8 {
  margin-top: 2rem;
}

.text-\[56px\] {
  font-size: 56px;
}

.md\:text-\[72px\] {
  @media (min-width: 768px) {
    font-size: 72px;
  }
}

.mt-3 {
  margin-top: 0.75rem;
}

.font-pinyonScript {
  font-family: 'Pinyon Script', cursive !important;
}

.md\:mt-0 {
  @media (min-width: 768px) {
    margin-top: 0;
  }
}

.mt-5 {
  margin-top: 1.25rem;
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

.w-\[488px\] {
  width: 488px;
}

.h-\[574px\] {
  height: 574px;
}

.md\:-right-20 {
  @media (min-width: 768px) {
    right: -5rem;
  }
}

.-right-12 {
  right: -3rem;
}

@media (max-width: 767px) {
  .md\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>

