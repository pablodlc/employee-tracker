const inquirer = require("inquirer");
const mysql = require('mysql2');
const { db, exit } = require('./db/connection');
const deptOptions = require('./lib/script');
const consoleTable = require('console.table');

db.connect(function (err) {
    if (err) throw err;
    homePrompt();
})

function homePrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'homepage',
        message: 'You\'re Home. What would you like to do?',
        choices: [
            'View All Departments',
            'View All Positions',
            'View All Employees',
            'Add a Department',
            'Add a Position',
            'Add an Employee',
            'Update an Employee'
        ]
    }).then((answers) => {
        console.log(answers);
        switch (answers.homepage) {
            case { homepage: 'View All Departments' }:
                viewDepts();
                break;
            case 'View All Positions':
                viewPositions();
                break;
            case 'View All Employees':
                viewEmps();
                break;
            case 'Add a Department':
                addDept();
                break;
            case 'Add a Position':
                addPosition();
                break;
            case 'Add an Employee':
                addEmp();
                break;
            case 'Update an Employee':
                updateEmp();
                break;
            case 'EXIT':
                exit();
                break;
            default:
                break;
        }
    })
}

const viewDepts = () => {
    let sql = `SELECT * FROM DEPARTMENTS`
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        homePrompt();
        // }).then(function () {
        //     deptOptions();
        // })
    })
}

const addDept = () => {

}