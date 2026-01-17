<template>
  <div id="message" class="relative" data-aos="fade-up" data-aos-delay="200">
    <div class="relative">
      <section id="sangtrong-message-id" class="relative bg-white">
        <img 
          src="/assets/decor.png" 
          class="absolute top-0 left-0 md:w-[429px] md:h-[363px] w-[179px] h-[151px]" 
          loading="lazy"
          alt="decoration"
          style="opacity: 0; transform: translateX(-50px);"
        >
        <img 
          src="/assets/watercolor-boho-card-with-hand-painted-tropical-orchid-flowers-dried-palm-leaves-branches-pampas-flowers-illustration 2.png" 
          class="absolute bottom-0 right-0 md:w-[429px] md:mb-18 md:h-[363px] w-[179px] h-[151px]" 
          loading="lazy"
          alt="decoration"
          style="opacity: 0; transform: translateX(50px);"
        >
        
        <section class="z-1 relative max-w-[1443px] mx-auto overflow-hidden flex flex-col justify-center items-center pt-[56px] pl-[18px] pr-[24px] lg:pt-[164px] lg:pl-[304px] lg:pr-[302px]">
          <div class="relative max-w-[837px] max-h-[1059px] w-full md:min-w-[335px] min-h-[912px]">
            <div class="md:px-[40px] md:pb-[127px] full:pl-[108px] full:pr-[109px] grid text-center items-center w-full h-full">
              <h1 class="text-center text-[48px] md:text-[72px] md:leading-[90px] font-pinyonScript" style="color: rgb(161, 47, 12);">
                Sổ lưu bút
              </h1>
              
              <div class="font-svn-sans z-10 mt-[55px] space-y-6">
                <input 
                  placeholder="Tên của bạn (tối đa 160 ký tự) *" 
                  class="w-full h-12 ps-4 border-[1px] border-dark-300 placeholder-[#555]" 
                  v-model="form.name"
                  name="name"
                  required
                >
                
                <div class="relative">
                  <textarea 
                    name="content" 
                    placeholder="Nhập lời chúc của bạn (tối đa 3000 ký tự) *" 
                    class="w-full h-[140px] ps-4 pt-3 border-[1px] border-dark-300 resize-none placeholder-[#555]"
                    v-model="form.message"
                    required
                  ></textarea>
                  
                  <div class="absolute bottom-2 right-2 space-x-3">
                    <button type="button"><!-- Emoji buttons can be added here --></button>
                  </div>
                </div>
                
                <div class="flex justify-center">
                  <button 
                    type="submit"
                    class="uppercase rounded-full text-white font-prata text-sm md:text-[18px] min-w-[180px] md:min-w-[250px] p-3 md:p-6" 
                    style="background-color: rgb(161, 47, 12);"
                    @click.prevent="submitWish"
                  >
                    Gửi lời chúc
                  </button>
                </div>
              </div>
              
              <div class="z-0 mt-10 mb-8 w-full h-[2px] bg-dark-300"></div>
              
              <div class="z-0 max-h-[360px] overflow-y-auto font-svn-sans text-base text-start flex flex-col gap-6 custom-scrollbar">
                <div v-if="messages.length === 0" class="text-center text-gray-400 py-8">
                  Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc nhé!
                </div>
                <div 
                  v-for="(message, index) in messages" 
                  :key="index" 
                  class="message-item p-4 border-b border-gray-200 last:border-b-0"
                >
                  <div class="font-semibold text-gray-800 mb-2" style="color: rgb(161, 47, 12);">
                    {{ message.name }}
                  </div>
                  <div class="text-gray-700 whitespace-pre-wrap">{{ message.message }}</div>
                  <div class="text-xs text-gray-400 mt-2">{{ formatDate(message.date) }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuestbookSection',
  data() {
    return {
      form: {
        name: '',
        message: ''
      },
      messages: [],
      loading: false
    }
  },
  mounted() {
    // Load messages from API
    this.loadMessages()
  },
  methods: {
    async loadMessages() {
      this.loading = true
      try {
        const response = await fetch('/api/guestbook')
        if (response.ok) {
          this.messages = await response.json()
        } else {
          console.error('Error loading messages:', response.statusText)
          this.messages = []
        }
      } catch (error) {
        console.error('Error loading messages:', error)
        // Fallback to localStorage nếu API không khả dụng
        this.loadMessagesFromLocalStorage()
      } finally {
        this.loading = false
      }
    },
    loadMessagesFromLocalStorage() {
      try {
        const savedMessages = localStorage.getItem('weddingGuestbookMessages')
        if (savedMessages) {
          this.messages = JSON.parse(savedMessages)
          this.messages.sort((a, b) => new Date(b.date) - new Date(a.date))
        }
      } catch (error) {
        console.error('Error loading from localStorage:', error)
        this.messages = []
      }
    },
    async submitWish() {
      // Validation
      if (!this.form.name || !this.form.name.trim()) {
        alert('Vui lòng nhập tên của bạn')
        return
      }
      
      if (!this.form.message || !this.form.message.trim()) {
        alert('Vui lòng nhập lời chúc')
        return
      }
      
      // Check character limits
      if (this.form.name.length > 160) {
        alert('Tên không được vượt quá 160 ký tự')
        return
      }
      
      if (this.form.message.length > 3000) {
        alert('Lời chúc không được vượt quá 3000 ký tự')
        return
      }
      
      // Gửi lời chúc lên server
      try {
        const response = await fetch('/api/guestbook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name.trim(),
            message: this.form.message.trim()
          })
        })

        const result = await response.json()

        if (response.ok && result.success) {
          // Thêm message mới vào đầu danh sách
          this.messages.unshift(result.message)
          
          // Reset form
          this.form = { name: '', message: '' }
          
          // Show success message
          alert('Cảm ơn bạn đã gửi lời chúc! 💕')
          
          // Scroll to see the new message
          this.$nextTick(() => {
            const messagesContainer = this.$el.querySelector('.max-h-\\[360px\\]')
            if (messagesContainer) {
              messagesContainer.scrollTop = 0
            }
          })
        } else {
          alert(result.error || 'Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại.')
        }
      } catch (error) {
        console.error('Error submitting wish:', error)
        alert('Không thể kết nối đến server. Vui lòng thử lại sau.')
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const now = new Date()
      const diffTime = Math.abs(now - date)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays === 1) {
        return 'Hôm nay'
      } else if (diffDays === 2) {
        return 'Hôm qua'
      } else if (diffDays <= 7) {
        return `${diffDays - 1} ngày trước`
      } else {
        return date.toLocaleDateString('vi-VN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })
      }
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.bg-white {
  background-color: white;
}

.z-1 {
  z-index: 1;
}

.z-10 {
  z-index: 10;
}

.z-0 {
  z-index: 0;
}

.max-w-\[1443px\] {
  max-width: 1443px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.text-center {
  text-align: center;
}

.pt-\[56px\] {
  padding-top: 56px;
}

.lg\:pt-\[164px\] {
  @media (min-width: 1024px) {
    padding-top: 164px;
  }
}

.pl-\[18px\] {
  padding-left: 18px;
}

.pr-\[24px\] {
  padding-right: 24px;
}

.lg\:pl-\[304px\] {
  @media (min-width: 1024px) {
    padding-left: 304px;
  }
}

.lg\:pr-\[302px\] {
  @media (min-width: 1024px) {
    padding-right: 302px;
  }
}

.max-w-\[837px\] {
  max-width: 837px;
}

.max-h-\[1059px\] {
  max-height: 1059px;
}

.w-full {
  width: 100%;
}

.md\:min-w-\[335px\] {
  @media (min-width: 768px) {
    min-width: 335px;
  }
}

.min-h-\[912px\] {
  min-height: 912px;
}

.grid {
  display: grid;
}

.h-full {
  height: 100%;
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

.mt-\[55px\] {
  margin-top: 55px;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.w-full {
  width: 100%;
}

.h-12 {
  height: 3rem;
}

.ps-4 {
  padding-left: 1rem;
}

.border-\[1px\] {
  border-width: 1px;
}

.border-dark-300 {
  border-color: #d1d5db;
}

.placeholder-\[#555\]::placeholder {
  color: #555;
}

.h-\[140px\] {
  height: 140px;
}

.pt-3 {
  padding-top: 0.75rem;
}

.resize-none {
  resize: none;
}

.bottom-2 {
  bottom: 0.5rem;
}

.right-2 {
  right: 0.5rem;
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

.mt-10 {
  margin-top: 2.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.h-\[2px\] {
  height: 2px;
}

.bg-dark-300 {
  background-color: #d1d5db;
}

.max-h-\[360px\] {
  max-height: 360px;
}

.overflow-y-auto {
  overflow-y: auto;
}

.text-base {
  font-size: 1rem;
}

.text-start {
  text-align: start;
}

.gap-6 {
  gap: 1.5rem;
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

.md\:w-\[429px\] {
  @media (min-width: 768px) {
    width: 429px;
  }
}

.md\:h-\[363px\] {
  @media (min-width: 768px) {
    height: 363px;
  }
}

.w-\[179px\] {
  width: 179px;
}

.h-\[151px\] {
  height: 151px;
}

input, textarea {
  border: 1px solid #d1d5db;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: rgb(161, 47, 12);
}

button {
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.message-item {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgb(161, 47, 12);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgb(140, 40, 10);
}

.font-semibold {
  font-weight: 600;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}

.last\:border-b-0:last-child {
  border-bottom: 0;
}
</style>
