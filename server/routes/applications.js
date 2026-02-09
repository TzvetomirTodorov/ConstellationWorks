const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { adminAuth } = require('../middleware/auth');

// Get all applications (admin only)
router.get('/', adminAuth, async (req, res) => {
  try {
    const applications = await pool.query('SELECT * FROM applications ORDER BY created_at DESC');
    res.json(applications.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit application (public)
router.post('/', async (req, res) => {
  try {
    const { type, name, email, phone, message } = req.body;
    
    const application = await pool.query(
      `INSERT INTO applications (type, name, email, phone, message) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [type, name, email, phone, message]
    );
    
    res.status(201).json(application.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update application status (admin only)
router.put('/:id/status', adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    
    const application = await pool.query(
      'UPDATE applications SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );
    
    if (application.rows.length === 0) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    res.json(application.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete application (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    await pool.query('DELETE FROM applications WHERE id = $1', [req.params.id]);
    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
