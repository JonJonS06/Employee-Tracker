const retrieveDepartments = require('./retrieveDepartments');
const retrieveRole = require('./retrieveRole');
const retrieveEmployee = require('./retrieveEmployee');


const prompts = [
    {
        name: 'task',
        type: 'list',
        message: 'SELECT A TASK:',
        choices: ['View all employees', 'View all roles', 'View all departments', 'Add an employee', 'Add a role', 'Add a department', 'Update an employee role', 'EXIT']
    },
    {
        name: 'employeeFirstName',
        type: 'input',
        message: 'ENTER FIRST NAME:',
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
        },
        validate: (response) => {
            if (response === '') {
                return console.log('TRY AGAIN');
            }
            return true;
        }
    },
    {
        name: 'employeeLastName',
        type: 'input',
        message: 'ENTER LAST NAME:',
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
        },
        validate: (response) => {
            if (response === '') {
                return console.log('Try Again')
            }
            return true;
        }
    },
    {
        name: 'employeeRole',
        type: 'list',
        message: 'SELECT EMPLOYEE ROLE:',
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        }
    },
    {
        name: 'employeeManager',
        type: 'list',
        message: 'SELECT AN EMPLOYEE MANAGER:',
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            }
            return false;
        }
    },
    {
        name: 'roleTitle',
        type: 'input',
        message: 'ENTER A NEW ROLE TITLE:',
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                return console.log('Try Again');
            }
            return true;
        }
    },
    {
        name: 'roleSalary',
        type: 'input',
        message: 'ENTER ROLE SALARY:',
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                return console.log('Try Again');
            }
            return true;
        }
    },
    {
        name: 'roleDepartment',
        type: 'list',
        message: 'SELECT ROLE DEPARTMENT:',
        choices: retrieveDepartments,
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            }
            return false;
        }
    },
    {
        name: 'department',
        type: 'input',
        message: 'ENTER A NEW DEPARTMENT NAME:',
        when: (response) => {
            if (response.task === 'Add a department') {
                return true;
            }
            return false;
        },
        validate: (response) => {
            if (response === '') {
                return console.log(' Try Again');
            }
            return true;
        }
    },
    {
        name: 'updateEmployee',
        type: 'list',
        message: 'SELECT EMPLOYEE:',
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Update and employee role') {
                return true;
            }
            return false;
        }
    },
    {
        name: 'updateRole',
        type: 'list',
        message: 'SELECT A NEW ROLE:',
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Update and employee role') {
                return true;
            }
            return false;
        }
    }
];

module.exports = prompts;