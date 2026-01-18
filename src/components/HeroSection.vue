<template>
  <section class="hero-section" ref="heroSection">
    <!-- Decorative elements -->
    <div class="floral-decoration top-left">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <path d="M75,25 Q50,50 60,75 Q70,65 80,75 Q100,50 75,25" fill="#e8b4b8" opacity="0.4"/>
        <path d="M60,75 Q55,85 65,90 Q70,85 75,90 Q85,85 80,75" fill="#f5d5d9" opacity="0.3"/>
        <circle cx="55" cy="70" r="4" fill="#90c695" opacity="0.6"/>
        <circle cx="95" cy="70" r="4" fill="#90c695" opacity="0.6"/>
      </svg>
    </div>
    
    <div class="floral-decoration bottom-right">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <path d="M75,125 Q50,100 60,75 Q70,85 80,75 Q100,100 75,125" fill="#e8b4b8" opacity="0.4"/>
        <path d="M60,75 Q55,65 65,60 Q70,65 75,60 Q85,65 80,75" fill="#f5d5d9" opacity="0.3"/>
        <circle cx="55" cy="80" r="4" fill="#90c695" opacity="0.6"/>
        <circle cx="95" cy="80" r="4" fill="#90c695" opacity="0.6"/>
      </svg>
    </div>
    
    <!-- Gradient overlay -->
    <div class="gradient-overlay"></div>
    
    <!-- Main content -->
    <div class="hero-content">
      <div class="hero-text">
        <div class="welcome-text">Chào mừng đến với</div>
        <h1 class="couple-names script-font">
          <span class="name-line">Van Tien</span>
          <span class="ampersand">&</span>
          <span class="name-line">Huyen Trang</span>
        </h1>
        <div class="divider">
          <svg width="200" height="20" viewBox="0 0 200 20">
            <path d="M0,10 Q50,5 100,10 T200,10" stroke="#d4c4b0" stroke-width="1.5" fill="none"/>
            <circle cx="100" cy="10" r="3" fill="#8b6f5e"/>
          </svg>
        </div>
        <div class="wedding-date">29 . 01 . 2026</div>
        <div class="wedding-subtitle">Chúng mình rất vui được chia sẻ ngày trọng đại này cùng bạn</div>
      </div>
      
      <div class="hero-images">
        <div class="main-photo-container">
          <div class="main-photo arched-frame">
            <div class="photo-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=700&fit=crop" 
              alt="Van Tien & Huyen Trang"
              class="lazy-image"
              @load="onImageLoad"
              loading="lazy"
            />
            <div class="photo-border"></div>
          </div>
          
          <div class="overlay-photo arched-frame">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=400&fit=crop" 
              alt="Traditional Vietnamese"
              class="lazy-image"
              @load="onImageLoad"
              loading="lazy"
            />
            <div class="photo-border-small"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    onImageLoad(event) {
      event.target.classList.add('loaded')
    }
  },
  mounted() {
    // Lazy load images
    const images = this.$el.querySelectorAll('.lazy-image')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
          }
          imageObserver.unobserve(img)
        }
      })
    })
    
    images.forEach(img => {
      if (img.dataset.src) {
        imageObserver.observe(img)
      } else {
        img.classList.add('loaded')
      }
    })
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 20px 120px;
  background: linear-gradient(135deg, #faf8f5 0%, #f5f3f0 50%, #faf8f5 100%);
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(250, 248, 245, 0.4) 100%);
  z-index: 1;
  pointer-events: none;
}

.floral-decoration {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.floral-decoration.top-left {
  top: 40px;
  left: 40px;
  animation-delay: 0s;
}

.floral-decoration.bottom-right {
  bottom: 40px;
  right: 40px;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  position: relative;
}

.hero-text {
  margin-bottom: 60px;
}

.welcome-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  color: #8b6f5e;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.3s forwards;
  font-weight: 300;
}

.couple-names {
  font-size: 5.5rem;
  color: #8b6f5e;
  margin: 30px 0;
  font-weight: 400;
  line-height: 1.2;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.6s forwards;
  text-shadow: 2px 2px 8px rgba(139, 111, 94, 0.1);
}

.couple-names .name-line {
  display: inline-block;
  margin: 0 15px;
}

.couple-names .ampersand {
  font-size: 0.7em;
  color: #d4c4b0;
  margin: 0 10px;
  vertical-align: middle;
}

.divider {
  margin: 30px auto;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.9s forwards;
}

.wedding-date {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.8rem;
  color: #8b6f5e;
  font-weight: 400;
  letter-spacing: 12px;
  margin: 30px 0 20px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.2s forwards;
}

.wedding-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #7a6a5a;
  font-weight: 300;
  font-style: italic;
  margin-top: 20px;
  opacity: 0;
  animation: fadeIn 1s ease-out 1.5s forwards;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-images {
  position: relative;
  margin-top: 60px;
  opacity: 0;
  animation: fadeIn 1.5s ease-out 1.8s forwards;
}

.main-photo-container {
  position: relative;
  display: inline-block;
}

.main-photo {
  width: 100%;
  max-width: 800px;
  height: 600px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.main-photo:hover {
  transform: translateY(-5px);
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
  z-index: 1;
  pointer-events: none;
}

.main-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-border {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid rgba(139, 111, 94, 0.2);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  z-index: -1;
}

.overlay-photo {
  position: absolute;
  bottom: -50px;
  right: 5%;
  width: 280px;
  height: 220px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  border: 12px solid #faf8f5;
  z-index: 3;
  transition: transform 0.3s ease;
}

.overlay-photo:hover {
  transform: scale(1.05) rotate(2deg);
}

.overlay-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-border-small {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 1px solid rgba(139, 111, 94, 0.15);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  z-index: -1;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0;
  animation: fadeIn 1s ease-out 2s forwards;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid #8b6f5e;
  border-radius: 20px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 10px;
  background: #8b6f5e;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

.arrow {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.arrow span {
  width: 2px;
  height: 8px;
  background: #8b6f5e;
  display: block;
  animation: arrowDown 1.5s ease-in-out infinite;
}

.arrow span:nth-child(2) {
  animation-delay: 0.2s;
}

.arrow span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes arrowDown {
  0%, 100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(5px);
  }
}

@media (max-width: 968px) {
  .overlay-photo {
    position: relative;
    bottom: 0;
    right: 0;
    margin: 30px auto 0;
    width: 220px;
    height: 180px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 15px 100px;
  }
  
  .couple-names {
    font-size: 3.5rem;
  }
  
  .couple-names .name-line {
    display: block;
    margin: 10px 0;
  }
  
  .couple-names .ampersand {
    font-size: 0.6em;
    margin: 0;
  }
  
  .wedding-date {
    font-size: 2rem;
    letter-spacing: 6px;
  }
  
  .wedding-subtitle {
    font-size: 1.1rem;
  }
  
  .main-photo {
    max-width: 100%;
    height: 450px;
  }
  
  .overlay-photo {
    width: 180px;
    height: 150px;
    margin-top: 20px;
  }
  
  .floral-decoration {
    width: 100px;
    height: 100px;
  }
  
  .welcome-text {
    font-size: 1rem;
    letter-spacing: 2px;
  }
}
</style>



