const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'emptrack'
    }
);

const exit = () => {
    db.end();
}

module.exports = { db, exit };