const db = require('../initialize.js');

async function viewAllRoles() {
    const sql = "SELECT * FROM role";
    db.query(sql, (err, rows) => {
        console.table(rows);
    })
}

async function addRole(newRoleTitle, newRoleSalary, newRoleDepartmentID) {
    const sql = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
    const params = [newRoleTitle, newRoleSalary, newRoleDepartmentID]
    db.query(sql, params, () => {
        viewAllRoles();
    })
};

module.exports = {viewAllRoles, addRole}