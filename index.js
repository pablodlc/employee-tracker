const inquirer = require("inquirer");
const mysql = require('mysql2');
const { db } = require('./db/connection');
// const deptOptions = require('./lib/script');
const consoleTable = require('console.table');

db.connect(function (err) {
    if (err) throw err;
    homePrompt();
})

function homePrompt() {

    inquirer.prompt({
        type: 'list',
        name: 'homepage',
        message: 'You\'re Home. What would you like to do? Press CTRL+C to exit.',
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
            case 'View All Departments':
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
        }
    })
}

const viewDepts = () => {
    let sql = `SELECT * FROM departments`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        deptOptions();
    })
}

const viewPositions = () => {
    let sql = `SELECT * FROM positions`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        posOptions();
    })
}

const viewEmps = () => {
    let sql = `SELECT * FROM employees`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        empOptions();
    })
}


const addDept = () => {
    inquirer.prompt({
        type: "input",
        message: "What is the name of the department to add?",
        name: "newDept",
        validate: newDeptName => {
            if (newDeptName) {
                return true;
            } else {
                console.log("Please enter a valid name.");
                return false;
            }
        }
    })
        .then(answer => {
            let sql = `INSERT INTO departments (dept_name) VALUES (?)`
            let params = answer.newDept;
            db.query(sql, params, (err, rows) => {
                if (err) throw err;
                console.log("New department successfully added.")
                deptOptions();
            })
        })
}

function deptOptions() {
    inquirer.prompt({
        type: 'list',
        name: 'deptOptions',
        message: 'What would you like to do? Or press CTRL+C to exit.',
        choices: [
            'View Departments',
            'Add a Department',
            'Go Home',
        ]
    }).then(function (answer) {
        console.log(answer);
        switch (answer.deptOptions) {
            case 'View Departments':
                viewDepts();
                break;
            case 'Add a Department':
                addDept();
                break;
            case 'Go Home':
                homePrompt();
                break;
        }
    })
}

const addPosition = () => {
    inquirer.prompt({
        type: "input",
        message: "What is the name of the position to add? Or press CTRL+C to exit.",
        name: "newPosition",
        validate: newPosName => {
            if (newPosName) {
                return true;
            } else {
                console.log("Please enter a valid name.");
                return false;
            }
        }
    })
        .then(answer => {
            let sql = `INSERT INTO positions (job_title) VALUES (?)`
            let params = answer.newPosition;
            db.query(sql, params, (err, rows) => {
                if (err) throw err;
                console.log("New position successfully added.")
                posOptions();
            })
        })
}

function posOptions() {
    inquirer.prompt({
        type: "list",
        name: "posOptions",
        message: "What would you like to do? Or press CTRL+C to exit.",
        choices: [
            "View Positions",
            "Add Position",
            "Go Home",
        ]
    })
        .then(function (answer) {
            switch (answer.posOptions) {
                case "View Positions":
                    viewPositions();
                case "Add Position":
                    addPosition();
                    break;
                case "Go Home":
                    homePrompt();
            }
        })
}

const addEmployee = () => {
    inquirer.prompt({
        type: "input",
        message: "What is the name of the position to add? Or press CTRL+C to exit.",
        name: "newEmployee",
        validate: newPosName => {
            if (newPosName) {
                return true;
            } else {
                console.log("Please enter a valid name.");
                return false;
            }
        }
    })
        .then(answer => {
            let sql = `INSERT INTO employees (first_name, last_name, position_id, reportsTo) VALUES (?, ?, ?, ?)`
            let params = [answer.newPosition;
            db.query(sql, params, (err, rows) => {
                if (err) throw err;
                console.log("New position successfully added.")
                posOptions();
            })
        })
}

function empOptions() {
    inquirer.prompt({
        type: "list",
        name: "empOptions",
        message: "What would you like to do? Or press CTRL+C to exit.",
        choices: [
            "View Employees",
            "Add Employee",
            "Go Home",
        ]
    })
        .then(function (answer) {
            switch (answer.posOptions) {
                case "View Employees":
                    viewEmps();
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee":
                    updateEmployee();
                case "Go Home":
                    homePrompt();
            }
        })
}