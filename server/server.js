import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const DATA_DIR = path.join(__dirname, '..', 'data');
const GUESTBOOK_FILE = path.join(DATA_DIR, 'guestbook.json');

// Middleware
app.use(cors());
app.use(express.json());

// Đảm bảo folder data tồn tại
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Khởi tạo file guestbook.json nếu chưa tồn tại
if (!fs.existsSync(GUESTBOOK_FILE)) {
  fs.writeFileSync(GUESTBOOK_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Helper function để đọc messages
function readMessages() {
  try {
    const data = fs.readFileSync(GUESTBOOK_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading messages:', error);
    return [];
  }
}

// Helper function để ghi messages
function writeMessages(messages) {
  try {
    fs.writeFileSync(GUESTBOOK_FILE, JSON.stringify(messages, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing messages:', error);
    return false;
  }
}

// API Routes

// Lấy tất cả messages
app.get('/api/guestbook', (req, res) => {
  try {
    const messages = readMessages();
    // Sort by date, newest first
    messages.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(messages);
  } catch (error) {
    console.error('Error getting messages:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

// Thêm message mới
app.post('/api/guestbook', (req, res) => {
  try {
    const { name, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Vui lòng nhập tên của bạn' });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Vui lòng nhập lời chúc' });
    }

    if (name.length > 160) {
      return res.status(400).json({ error: 'Tên không được vượt quá 160 ký tự' });
    }

    if (message.length > 3000) {
      return res.status(400).json({ error: 'Lời chúc không được vượt quá 3000 ký tự' });
    }

    // Đọc messages hiện tại
    const messages = readMessages();

    // Tạo message mới
    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString()
    };

    // Thêm vào đầu array (newest first)
    messages.unshift(newMessage);

    // Lưu vào file
    if (writeMessages(messages)) {
      res.json({ 
        success: true, 
        message: newMessage 
      });
    } else {
      res.status(500).json({ error: 'Lỗi khi lưu lời chúc' });
    }
  } catch (error) {
    console.error('Error adding message:', error);
    res.status(500).json({ error: 'Lỗi server khi thêm lời chúc' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server đang hoạt động' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server đang chạy tại http://localhost:${PORT}`);
  console.log(`📁 Dữ liệu được lưu tại: ${GUESTBOOK_FILE}`);
});
