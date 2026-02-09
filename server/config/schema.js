const pool = require('./db');

const initDB = async () => {
  try {
    // Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Donations table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS donations (
        id SERIAL PRIMARY KEY,
        donor_name VARCHAR(255),
        donor_email VARCHAR(255),
        amount DECIMAL(10,2) NOT NULL,
        method VARCHAR(100),
        message TEXT,
        is_anonymous BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Applications table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Contact submissions
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Blog posts
    await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author_id INTEGER REFERENCES users(id),
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('✦ Database tables initialized');
  } catch (err) {
    console.error('Database initialization error:', err.message);
  }
};

initDB();

module.exports = initDB;
