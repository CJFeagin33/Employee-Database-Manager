// required packages
const inquirer = require('inquirer');
const {viewAllRoles, addRole} = require('./queries/roles.js');
const {viewAllDepartments, addDepartment} = require('./queries/departments.js')
const {viewAllEmployees, addEmployee, updateEmployee} = require('./queries/employee.js')

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Welcome to employees_db!\nWhat would you like to do?',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', "Update an Employee's Role"],
            name: 'initialChoice'
        }
    ]).then(data => {
        if (data.initialChoice === 'View all Departments') {
            viewAllDepartments();
        } else if (data.initialChoice === 'View all Roles') {
            viewAllRoles();
        } else if (data.initialChoice === 'View all Employees') {
            viewAllEmployees();
        } else if (data.initialChoice === 'Add a Department') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the name of the new Department you would like to add?',
                        name: 'newDepartment'
                    }
                ]).then(data => {addDepartment(data.newDepartment)});
        } else if (data.initialChoice === 'Add a Role') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the name of the new Role you would like to add?',
                        name: 'newRoleTitle'
                    },
                    {
                        type: 'input',
                        message: 'What is the Salary associated with the new role?',
                        name: 'newRoleSalary'
                    },
                    {
                        type: 'input',
                        message: 'What is the Department ID that this role belongs to?',
                        name: 'newRoleDepartmentID'
                    }
                ]).then(data => {addRole(data.newRoleTitle, data.newRoleSalary, data.newRoleDepartmentID)});
        } else if (data.initialChoice === 'Add an Employee') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the First Name of the new Employee?',
                        name: 'newEmployeeFirstName'
                    },
                    {
                        type: 'input',
                        message: 'What is the Last Name of the new Employee?',
                        name: 'newEmployeeLastName'
                    },
                    {
                        type: 'input',
                        message: 'What is the RoleID associated with this new Employee?',
                        name: 'newEmployeeRoleID'
                    },
                    {
                        type: 'input',
                        message: 'What is the ManagerID of the Manager the new Employee reports to?',
                        name: 'newEmployeeManagerID'
                    }
                ]).then(data => {addEmployee(data.newEmployeeFirstName, data.newEmployeeLastName, data.newEmployeeRoleID, data.newEmployeeManagerID)});
        } else if (data.initialChoice === "Update an Employee's Role") {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the EmployeeID of the Employee whose role you would like to update?',
                        name: 'updatedEmployeeID'
                    },
                    {
                        type: 'input',
                        message: 'What is the new RoleID you would like to assign to the employee?',
                        name: 'updatedEmployeeRoleID'
                    },
                ]).then(data => {updateEmployee(data.updatedEmployeeID, data.updatedEmployeeRoleID)});
        }
    });

