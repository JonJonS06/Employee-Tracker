const inquirer = require('inquirer');
const prompts = require('./prompts');
const handleTask = require('./handleTask');


function selectTask() {
    inquirer.prompt(prompts)
    .then((Response => {
        handleTask(response)
    }))
    .catch(err => {
        console.log(err)
    });
};


module.exports = selectTask;