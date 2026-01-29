const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// خدمة الملفات الثابتة من المجلد الحالي
app.use(express.static(path.join(__dirname)));

// المسار الرئيسي - إرسال الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// بدء السيرفر
app.listen(PORT, () => {
  console.log(`السيرفر يعمل على: http://localhost:${PORT}`);
});
