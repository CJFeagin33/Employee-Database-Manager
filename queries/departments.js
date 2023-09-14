const db = require('../initialize.js');

async function viewAllDepartments() {
    const sql = "SELECT DISTINCT * FROM department";
    db.query(sql, (err, rows) => {
        console.table(rows);
    })
};

async function addDepartment(departmentName) {
    const sql = "INSERT INTO department (name) VALUES (?)";
    db.query(sql, departmentName, () => {
        viewAllDepartments();
    })
};

module.exports = {viewAllDepartments, addDepartment}