const db = require('../initialize.js');

async function viewAllEmployees() {
    const sql = "SELECT * FROM employee JOIN role ON employee.role_id = role.id";

    db.query(sql, (err, rows) => {
        console.table(rows);
    })
}



module.exports = {viewAllEmployees}