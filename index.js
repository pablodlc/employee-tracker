const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require('mysql2');
const db = require('./db/connection')

const homePrompt = () => {
    return inquirer.prompt([
        {
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
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case 'View All Departments':
                console.log('looking for departments...');
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
                break;
            default:
                break;
        }
    })
}

function viewDepts() {
    db.query(`SELECT * FROM departments`, (err, res) => {
        if (err) throw err;
        console.table(res)
    })

}

homePrompt();