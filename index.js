const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Vulnerable: Hardcoded credentials
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass12345', // Hardcoded secret
  database: 'testdb'
});

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

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

// Vulnerable: XSS
app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello, ${name}</h1>`); // XSS if input is not sanitized
});

// Vulnerable: Command Injection (if using child_process)
const { exec } = require('child_process');
app.get('/ping', (req, res) => {
  const host = req.query.host;
  exec(`ping -c 1 ${host}`, (err, stdout, stderr) => { // Command injection
    if (err) return res.status(500).send(stderr);
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
