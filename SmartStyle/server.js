const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// Ensure Raw directory exists
const uploadDir = path.join(__dirname, 'Raw');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup to save files in the Raw folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

app.use(cors()); // Enable CORS for frontend requests
app.use(express.static(path.join(__dirname, '../build'))); // Serve React build in production

// Upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({ message: 'Image uploaded successfully', filePath: `/Raw/${req.file.filename}` });
});

// Serve React frontend in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../SmartStyle/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
