const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});