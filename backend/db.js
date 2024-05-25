const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',      // Dockerの場合、サービス名を指定することもあります。例: 'db'
  user: 'root',
  password: 'example',
  database: 'task_manager'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
