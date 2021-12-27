const mysql = require("mysql");
require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(`Db connection is failed, error ${err.stack}`);
  } else {
    console.log(`Db connection is success`);
    return;
  }
});

module.exports = db;
