const db = require('./config/connection');
const selectTask = require('./lib/selectTask');


db.connect(function (err) {
    if (err) throw err;
    init();
});

function init() {
    selectTask();
};