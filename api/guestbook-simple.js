import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const GUESTBOOK_KEY = 'wedding:guestbook:messages';

  try {
    // GET - Lấy tất cả messages
    if (req.method === 'GET') {
      const messages = await kv.get(GUESTBOOK_KEY) || [];
      // Sort by date, newest first
      messages.sort((a, b) => new Date(b.date) - new Date(a.date));
      return res.status(200).json(messages);
    }

    // POST - Thêm message mới
    if (req.method === 'POST') {
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
      const messages = (await kv.get(GUESTBOOK_KEY)) || [];

      // Tạo message mới
      const newMessage = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        date: new Date().toISOString()
      };

      // Thêm vào đầu array (newest first)
      messages.unshift(newMessage);

      // Lưu vào KV store
      await kv.set(GUESTBOOK_KEY, messages);

      return res.status(200).json({
        success: true,
        message: newMessage
      });
    }

    // Method not allowed
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in guestbook API:', error);
    return res.status(500).json({ error: 'Lỗi server khi xử lý yêu cầu' });
  }
}
