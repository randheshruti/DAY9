const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',          
  password: 'SHRUTIRANDHE22', // <-- PUT YOUR MYSQL PASSWORD HERE. (Leave empty '' if you use XAMPP/WAMP)
  database: 'my_test_db'
});

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}/users`);
});