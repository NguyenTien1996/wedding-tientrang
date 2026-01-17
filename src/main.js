import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.mount('#app')

// Initialize AOS after mount with smoother settings
if (typeof window !== 'undefined') {
  // Wait for both DOM and AOS to be ready
  const initAOS = () => {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1200,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        delay: 0,
        anchorPlacement: 'top-bottom',
        // Disable animations on mobile for better performance
        disable: window.innerWidth < 768 ? 'mobile' : false,
      })
      
      // Refresh AOS on scroll for smoother animations
      let ticking = false
      const refreshAOS = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            AOS.refresh()
            ticking = false
          })
          ticking = true
        }
      }
      
      // Throttle scroll events
      window.addEventListener('scroll', refreshAOS, { passive: true })
    } else {
      // Retry if AOS not loaded yet
      setTimeout(initAOS, 100)
    }
  }
  
  // Initialize after page load
  if (document.readyState === 'loading') {
    window.addEventListener('load', initAOS)
  } else {
    initAOS()
  }
}


