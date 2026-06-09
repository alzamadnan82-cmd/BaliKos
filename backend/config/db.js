const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "balikos"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database Connected");
    }
});

module.exports = db;