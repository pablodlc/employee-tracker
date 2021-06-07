// const exit = require('../db/connection')

// function deptOptions() {
//     inquirer.prompt({
//         type: 'list',
//         name: 'deptOptions',
//         message: 'You\'re viewing all departments. What would you like to do?',
//         choices: [
//             'Add a Department',
//             'Go Home',
//             'Exit',
//         ]
//     }).then(function (answer) {
//         console.log(answer);
//         switch (answer.deptOptions) {
//             case 'Add a Department':
//                 addDept();
//                 break;
//             case 'Go Home':
//                 homePrompt();
//                 break;
//             default:
//                 exit();
//                 break
//         }
//     })
// }

// module.exports = { deptOptions }