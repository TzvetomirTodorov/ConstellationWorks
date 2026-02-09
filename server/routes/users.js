const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { auth, adminAuth } = require('../middleware/auth');

// Get all users (admin only)
router.get('/', adminAuth, async (req, res) => {
  try {
    const users = await pool.query('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user role (admin only)
router.put('/:id/role', adminAuth, async (req, res) => {
  try {
    const { role } = req.body;
    const { id } = req.params;
    
    const user = await pool.query(
      'UPDATE users SET role = $1 WHERE id = $2 RETURNING id, name, email, role',
      [role, id]
    );
    
    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
