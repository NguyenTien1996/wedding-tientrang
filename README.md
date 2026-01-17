# Wedding Landing Page - Van Tien & Huyen Trang

Trang web landing page đám cưới được xây dựng với Vue.js, bao gồm đầy đủ các tính năng lazy loading và smooth scrolling.

## Tính năng

- ✨ **Lazy Loading**: Tất cả hình ảnh được tải một cách thông minh khi người dùng scroll đến
- 🎯 **Smooth Scrolling**: Cuộn trang mượt mà với hiệu ứng fade-in
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị
- 🎨 **Beautiful UI**: Thiết kế đẹp mắt với màu sắc và typography phù hợp
- ⏰ **Countdown Timer**: Đếm ngược thời gian đến ngày cưới
- 📸 **Photo Gallery**: Album ảnh với lightbox
- 💌 **Guestbook**: Form gửi lời chúc
- 🎁 **Gift Section**: Thông tin tài khoản ngân hàng

## Cài đặt

```bash
npm install
```

## Chạy dự án

```bash
npm run dev
```

Dự án sẽ chạy tại `http://localhost:3000`

## Build cho production

```bash
npm run build
```

## Cấu trúc dự án

```
wedding-demo/
├── src/
│   ├── components/
│   │   ├── HeroSection.vue          # Phần hero với tên và ảnh chính
│   │   ├── CeremonySection.vue       # Thông tin lễ cưới và countdown
│   │   ├── CoupleSection.vue         # Giới thiệu cô dâu chú rể
│   │   ├── PhotoAlbumSection.vue     # Album ảnh cưới
│   │   ├── LoveStorySection.vue      # Câu chuyện tình yêu
│   │   ├── MilestonesSection.vue     # Các cột mốc quan trọng
│   │   ├── EventsSection.vue         # Timeline các sự kiện
│   │   ├── GuestbookSection.vue      # Sổ lưu bút
│   │   ├── GiftSection.vue           # Thông tin mừng cưới
│   │   └── FooterSection.vue         # Footer
│   ├── App.vue                       # Component chính
│   ├── main.js                       # Entry point
│   └── style.css                     # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Tùy chỉnh

### Thay đổi thông tin cô dâu chú rể
Chỉnh sửa trong các component tương ứng, đặc biệt là `HeroSection.vue` và `CoupleSection.vue`

### Thay đổi ngày cưới
Cập nhật trong `CeremonySection.vue`:
```javascript
targetDate: new Date('2026-01-28T17:00:00')
```

### Thay đổi hình ảnh
Thay thế các URL từ Unsplash bằng hình ảnh thực tế của bạn trong các component

### Thay đổi thông tin ngân hàng
Cập nhật trong `GiftSection.vue`

## Công nghệ sử dụng

- Vue.js 3
- Vite
- CSS3 với animations
- Intersection Observer API (cho lazy loading)
- Google Fonts (Dancing Script, Playfair Display)

## Lưu ý

- Hình ảnh hiện tại đang sử dụng placeholder từ Unsplash, bạn nên thay thế bằng hình ảnh thực tế
- QR code hiện tại là placeholder, bạn cần thay thế bằng QR code thực tế
- Form guestbook hiện tại chỉ log ra console, bạn cần tích hợp với backend để lưu dữ liệu


