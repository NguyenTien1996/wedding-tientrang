<template>
  <footer class="footer-section">
    <div class="floral-decoration bottom-left">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path d="M50,90 Q30,70 40,50 Q50,60 60,50 Q70,70 50,90" fill="#e8b4b8" opacity="0.6"/>
        <circle cx="35" cy="55" r="2" fill="#90c695"/>
        <circle cx="65" cy="55" r="2" fill="#90c695"/>
      </svg>
    </div>
    
    <div class="footer-content">
      <p class="copyright">
        © 2024 Wedding of Van Tien & Huyen Trang. All rights reserved.
      </p>
    </div>
    
    <div class="floral-decoration top-right">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path d="M50,10 Q30,30 40,50 Q50,40 60,50 Q70,30 50,10" fill="#e8b4b8" opacity="0.6"/>
        <circle cx="35" cy="45" r="2" fill="#90c695"/>
        <circle cx="65" cy="45" r="2" fill="#90c695"/>
      </svg>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer-section {
  background: #faf8f5;
  padding: 60px 20px 40px;
  text-align: center;
  position: relative;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.copyright {
  font-size: 1rem;
  color: #8b6f5e;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-section {
    padding: 40px 15px 30px;
  }
  
  .copyright {
    font-size: 0.9rem;
  }
}
</style>


