const express = require('express');
const mysql = require('mysql');
const app = express();

// Vulnerable: Hardcoded credentials
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass12345', // Hardcoded secret
  database: 'testdb'
});

// Vulnerable: SQL Injection
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = '${userId}'`; // SQL injection risk
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('DB error');
    }
    res.send(results);
  });
});
