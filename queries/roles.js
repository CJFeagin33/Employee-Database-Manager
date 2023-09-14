const db = require('../initialize.js');

async function viewAllRoles() {
    const sql = "SELECT * FROM role";
    db.query(sql, (err, rows) => {
        console.table(rows);
    })
}

module.exports = {viewAllRoles}