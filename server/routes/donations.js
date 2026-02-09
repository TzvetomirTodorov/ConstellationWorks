const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { auth, adminAuth } = require('../middleware/auth');

// Get all donations (admin only)
router.get('/', adminAuth, async (req, res) => {
  try {
    const donations = await pool.query('SELECT * FROM donations ORDER BY created_at DESC');
    res.json(donations.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Record a donation
router.post('/', async (req, res) => {
  try {
    const { donor_name, donor_email, amount, method, message, is_anonymous } = req.body;
    
    const donation = await pool.query(
      `INSERT INTO donations (donor_name, donor_email, amount, method, message, is_anonymous) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [donor_name, donor_email, amount, method, message, is_anonymous || false]
    );
    
    res.status(201).json(donation.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get donation stats (admin only)
router.get('/stats', adminAuth, async (req, res) => {
  try {
    const total = await pool.query('SELECT COALESCE(SUM(amount), 0) as total FROM donations');
    const count = await pool.query('SELECT COUNT(*) as count FROM donations');
    const recent = await pool.query('SELECT * FROM donations ORDER BY created_at DESC LIMIT 5');
    
    res.json({
      totalAmount: total.rows[0].total,
      totalCount: count.rows[0].count,
      recentDonations: recent.rows
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
