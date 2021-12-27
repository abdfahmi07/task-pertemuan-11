const db = require("../config/database");

class Students {
  static all() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";

      db.query(query, (err, results) => {
        if (results) {
          resolve(results);
        } else {
          reject("Data gagal");
        }
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const query = "INSERT INTO students SET ?";

      db.query(query, data, (err, results) => {
        if (results) {
          resolve(results.insertId);
        } else {
          reject("Data gagal");
        }
      });
    });

    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";
      db.query(query, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

module.exports = Students;
