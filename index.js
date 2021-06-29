const inquirer = require("inquirer");
const mysql = require('mysql2');
const { db } = require('./db/connection');
// const deptOptions = require('./lib/script');
const consoleTable = require('console.table');
let addReportsTo;

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
                addEmployee();
                break;
            case 'Update an Employee':
                updatePosition();
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

const addPosition = () => {
    db.query('SELECT * FROM departments', (err, rows) => {
        if (err) throw err;
        let currentDepts = rows.map(x => x.dept_name)
        inquirer.prompt([
            {
                type: "input",
                message: "What is the name of the position to add?",
                name: "jobTitle",
                validate: newPosName => {
                    if (newPosName) {
                        return true;
                    } else {
                        console.log("Please enter a valid name.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the salary for this new position?",
                name: "salary",
                validate: newPosSalary => {
                    if (newPosSalary) {
                        return true;
                    } else {
                        console.log("Please enter a valid salary.");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                message: "Is this new position in management?",
                name: "isMgr",
                default: false,
            },
            {
                type: "list",
                message: "In which department do you wish to add the new position?",
                name: "posDept",
                choices: currentDepts,
            },
            {
                type: "list",
                message: "To whom does this position report?",
                name: "reports",
                choices: [
                    'Punk Rock Warlord',
                    'Sales Lead',
                    'Lead Engineer',
                    'Legal Team Lead'
                ]
            },
        ])
            .then(answer => {
                let sal = parseInt(answer.salary);
                let dept = answer.posDept;
                let deptId;
                for (const row of rows) {
                    if (row.dept_name === dept) {
                        deptId = row.id;
                    }
                }

                let reportsToIndex = 0;
                switch (answer.reports) {
                    case 'Punk Rock Warlord':
                        addReportsTo = reportsToIndex + 1;
                        break;
                    case 'Sales Lead':
                        addReportsTo = reportsToIndex + 2;
                        break;
                    case 'Lead Engineer':
                        addReportsTo = reportsToIndex + 3;
                        break;
                    case 'Legal Team Lead':
                        addReportsTo = reportsToIndex + 4;
                        break;
                };

                let sql = `INSERT INTO positions (job_title, salary, is_mgr, dept_id, reports_to) VALUES (?, ?, ?, ?, ?)`
                let params = [answer.jobTitle, sal, answer.isMgr, deptId, addReportsTo];
                db.query(sql, params, (err, rows) => {
                    if (err) throw err;
                    console.log("New position successfully added.")
                    posOptions();
                })
            })
    })
}

const addEmployee = () => {
    db.query('SELECT * FROM positions', (err, rows) => {
        if (err) throw err;
        let currentPositions = rows.map(x => x.job_title);
        inquirer.prompt([
            {
                type: "input",
                message: "What is the employee's first name?",
                name: "firstName",
                validate: firstNameInput => {
                    if (firstNameInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid first name.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "What is the employee's last name?",
                name: "lastName",
                validate: lastNameInput => {
                    if (lastNameInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid last name.");
                        return false;
                    }
                }
            },
            {
                type: "list",
                message: "What role would you like to assign to the new employee?",
                name: "positions",
                choices: currentPositions,
            }
        ])
            .then(answer => {
                let position = answer.positions;
                let posId;
                for (const row of rows) {
                    if (row.job_title === position) {
                        posId = row.id
                    }
                }

                let sql = `INSERT INTO employees (first_name, last_name, position_id) VALUES (?, ?, ?)`
                let params = [answer.firstName, answer.lastName, posId];
                db.query(sql, params, (err, rows) => {
                    if (err) throw err;
                    console.log("New employee successfully added.")
                    empOptions();
                })
            })
    })
}

function updatePosition() {


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
    }).then(answer => {
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
        .then(answer => {
            switch (answer.posOptions) {
                case "View Positions":
                    viewPositions();
                    break;
                case "Add Position":
                    addPosition();
                    break;
                case "Go Home":
                    homePrompt();
                    break;
            }
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
        .then(answer => {
            switch (answer.empOptions) {
                case "View Employees":
                    viewEmps();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Go Home":
                    homePrompt();
                    break;
            }
        })
}