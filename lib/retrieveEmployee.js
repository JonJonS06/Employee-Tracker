const db = require('../config/connection');


async function retrieveEmployee(response) {
    let employeeList;
    let returnedValue = await db.promise().query(`
    SELECT * FROM employee`)
    .then( (data) => {
        employeeList = data[0].map(data => {
            return {
                name: data.first_name + ' ' + data.last_name,
                value: data.id
            }
        })
        return employeeList
    })
    .catch(err => {
        console.log(err);
    })
    return returnedValue
};


module.exports = retrieveEmployee;