const db = require('../config/connection');


function updateEmployeeRole(response) {
    db.query(`
    UPDATE employee SET role_id = ${response.updateRole} WHERE employee.id = ${response.updateEmployee}`, (err, res) => {
        if (err) throw err;
        console.log(`Employee Role Updated!`);
        const selectTask = require('./selectTask');
        selectTask();
    });
};


module.exports = updateEmployeeRole;