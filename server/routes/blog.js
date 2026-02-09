const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { auth, adminAuth } = require('../middleware/auth');

// Get all published posts (public)
router.get('/', async (req, res) => {
  try {
    const posts = await pool.query(`
      SELECT p.*, u.name as author_name 
      FROM posts p 
      LEFT JOIN users u ON p.author_id = u.id 
      WHERE p.published = true 
      ORDER BY p.created_at DESC
    `);
    res.json(posts.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all posts (admin only)
router.get('/all', adminAuth, async (req, res) => {
  try {
    const posts = await pool.query(`
      SELECT p.*, u.name as author_name 
      FROM posts p 
      LEFT JOIN users u ON p.author_id = u.id 
      ORDER BY p.created_at DESC
    `);
    res.json(posts.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single post
router.get('/:id', async (req, res) => {
  try {
    const post = await pool.query(`
      SELECT p.*, u.name as author_name 
      FROM posts p 
      LEFT JOIN users u ON p.author_id = u.id 
      WHERE p.id = $1
    `, [req.params.id]);
    
    if (post.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    res.json(post.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create post (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const { title, content, published } = req.body;
    
    const post = await pool.query(
      `INSERT INTO posts (title, content, author_id, published) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, content, req.user.id, published || false]
    );
    
    res.status(201).json(post.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update post (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const { title, content, published } = req.body;
    
    const post = await pool.query(
      `UPDATE posts SET title = $1, content = $2, published = $3, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $4 RETURNING *`,
      [title, content, published, req.params.id]
    );
    
    if (post.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    res.json(post.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete post (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    await pool.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
