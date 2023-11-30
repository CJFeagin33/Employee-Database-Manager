const db = require('../initialize.js');

async function viewAllEmployees() {
    const sql = "SELECT * FROM employee JOIN role ON employee.role_id = role.id";

//     WHEN I choose to view all employees 
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to X

    db.query(sql, (err, rows) => {
        console.table(rows);
    })
};

async function addEmployee(newEmployeeFirstName, newEmployeeLastName, newEmployeeRoleID, newEmployeeManagerID) {
    const sql = "INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    const params = [newEmployeeFirstName, newEmployeeLastName, newEmployeeRoleID, newEmployeeManagerID]
    db.query(sql, params, () => {
        viewAllEmployees();
    })
};

async function updateEmployee(updatedEmployeeID, updatedEmployeeRoleID) {
    const sql = "UPDATE employee SET role_id = ? WHERE id = ?";
    const params = [updatedEmployeeRoleID, updatedEmployeeID]
    db.query(sql, params, () => {
        viewAllEmployees();
    })
};

module.exports = {viewAllEmployees, addEmployee, updateEmployee}