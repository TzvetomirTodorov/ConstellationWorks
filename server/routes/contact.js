const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { adminAuth } = require('../middleware/auth');

// Get all contacts (admin only)
router.get('/', adminAuth, async (req, res) => {
  try {
    const contacts = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(contacts.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit contact form (public)
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const contact = await pool.query(
      `INSERT INTO contacts (name, email, subject, message) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, subject, message]
    );
    
    res.status(201).json({ message: 'Message sent successfully', contact: contact.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark as read (admin only)
router.put('/:id/read', adminAuth, async (req, res) => {
  try {
    const contact = await pool.query(
      'UPDATE contacts SET is_read = true WHERE id = $1 RETURNING *',
      [req.params.id]
    );
    res.json(contact.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete contact (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    await pool.query('DELETE FROM contacts WHERE id = $1', [req.params.id]);
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
