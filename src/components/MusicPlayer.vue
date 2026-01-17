<template>
  <div class="music-player-container">
    <button 
      id="musicToggleBtn" 
      class="music-toggle-btn" 
      :class="{ 'playing': isPlaying }"
      :title="isPlaying ? 'Tắt nhạc' : 'Bật nhạc'"
      @click="toggleMusic"
    >
      <span id="musicIcon">{{ isPlaying ? '⏸' : '▶' }}</span>
    </button>
    <!-- SoundCloud Widget (hidden) -->
    <iframe 
      id="soundcloudWidget" 
      ref="soundcloudWidget"
      width="0" 
      height="0" 
      scrolling="no" 
      frameborder="no" 
      allow="autoplay" 
      :src="soundcloudUrl"
      style="display: none;"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',
  data() {
    return {
      isPlaying: false,
      widget: null,
      widgetReady: false,
      soundcloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1798324489&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false'
    }
  },
  mounted() {
    // Wait for SoundCloud API to load
    this.initializeWidget()
    
    // Auto-play on first user interaction
    document.addEventListener('click', this.autoPlayMusic, { once: true })
  },
  beforeUnmount() {
    document.removeEventListener('click', this.autoPlayMusic)
    if (this.widget && this.widgetReady) {
      try {
        this.widget.unbind(SC.Widget.Events.READY)
        this.widget.unbind(SC.Widget.Events.PLAY)
        this.widget.unbind(SC.Widget.Events.PAUSE)
        this.widget.unbind(SC.Widget.Events.FINISH)
      } catch (error) {
        console.error('Error unbinding widget events:', error)
      }
    }
  },
  methods: {
    initializeWidget() {
      // Check if SoundCloud API is loaded
      const checkAPI = () => {
        if (typeof SC !== 'undefined' && SC.Widget) {
          const iframe = this.$refs.soundcloudWidget
          if (iframe) {
            try {
              this.widget = SC.Widget(iframe)
              this.setupWidgetEvents()
            } catch (error) {
              console.error('Error initializing SoundCloud widget:', error)
            }
          }
        } else {
          // Retry after 100ms
          setTimeout(checkAPI, 100)
        }
      }
      
      // Start checking after a short delay to ensure DOM is ready
      setTimeout(checkAPI, 100)
    },
    setupWidgetEvents() {
      if (!this.widget) return
      
      // Listen to play progress
      this.widget.bind(SC.Widget.Events.READY, () => {
        console.log('SoundCloud widget ready')
        this.widgetReady = true
        // Set loop
        try {
          this.widget.setLoop(true)
          
          // Check initial state
          this.widget.isPaused((paused) => {
            this.isPlaying = !paused
          })
        } catch (error) {
          console.error('Error setting up widget:', error)
        }
      })
      
      // Listen to play/pause events
      this.widget.bind(SC.Widget.Events.PLAY, () => {
        this.isPlaying = true
      })
      
      this.widget.bind(SC.Widget.Events.PAUSE, () => {
        this.isPlaying = false
      })
      
      this.widget.bind(SC.Widget.Events.FINISH, () => {
        // Auto replay when finished (loop)
        if (this.isPlaying) {
          this.widget.play()
        }
      })
    },
    autoPlayMusic() {
      if (!this.widget || !this.widgetReady) {
        // Widget not ready yet, try again after a short delay
        setTimeout(() => {
          if (this.widget && this.widgetReady && !this.isPlaying) {
            try {
              this.widget.play()
            } catch (error) {
              console.error('Error auto-playing music:', error)
            }
          }
        }, 500)
        return
      }
      
      if (!this.isPlaying) {
        try {
          this.widget.play()
        } catch (error) {
          console.error('Error auto-playing music:', error)
        }
      }
    },
    toggleMusic() {
      if (!this.widget || !this.widgetReady) {
        console.error('SoundCloud widget not ready')
        return
      }
      
      try {
        this.widget.isPaused((paused) => {
          try {
            if (paused) {
              this.widget.play()
            } else {
              this.widget.pause()
            }
          } catch (error) {
            console.error('Error toggling music:', error)
          }
        })
      } catch (error) {
        console.error('Error checking pause state:', error)
      }
    }
  }
}
</script>

<style scoped>
.music-player-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
}

.music-toggle-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: rgb(161, 47, 12);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.music-toggle-btn:hover {
  background: rgb(140, 40, 10);
  transform: scale(1.1);
}

.music-toggle-btn.playing {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(161, 47, 12, 0.3);
  }
  50% {
    box-shadow: 0 4px 25px rgba(161, 47, 12, 0.6);
  }
}

@media (max-width: 768px) {
  .music-player-container {
    bottom: 15px;
    right: 15px;
  }
  
  .music-toggle-btn {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
}
</style>

