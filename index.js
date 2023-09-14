// required packages
const inquirer = require('inquirer');
const {viewAllRoles} = require('./queries/roles.js');
const {viewAllDepartments, addDepartment} = require('./queries/departments.js')
const {viewAllEmployees} = require('./queries/employee.js')

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
            addRole();
        } else if (data.initialChoice === 'Add an Employee') {
            addEmployee();
        } else if (data.initialChoice === "Update and Employee's Role") {
            updateEmployeeRole();
        }
    });

