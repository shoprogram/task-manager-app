const express = require('express');
const app = express();
const port = 3000;
const db = require('./src/db');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// タスク一覧を取得するAPIエンドポイント
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
