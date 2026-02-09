const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/blog', require('./routes/blog'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✦ Constellation Works server running on port ${PORT}`);
});
