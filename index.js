const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer= require('./lib/engineer');

function getEmployeeInfo(type) {
    let questions = [];
    questions = [
        {
            name: 'name',
            message: `${type}\'s name: `,
        },
        {
            name: 'employeeId',
            message: `${type}\'s employee ID: `,
        },
        {
            name: 'email',
            message: `${type}\'s email: `,
        },
    ];

    switch (type) {
        case 'Engineer':
            questions.push({
                name: 'github',
                message: 'Engineer\'s GitHub username: ',
            });
            break;
        case 'Intern':
            questions.push({
                name: 'school',
                message: 'Intern\'s school: ',
            });
            break;
        case 'Manager':
            questions.push({
                name: 'roomNumber',
                message: 'Manager\'s room number: ',
            });
            break;
    };

    questions.push({
        type: 'list',
        name: 'nextStep',
        message: 'I would like to: ',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building my team',
        ],
    });

    inquirer
        .prompt(questions)
        .then(answers => {
            switch (type) {
                case 'Manager':
                    // need to construct the manager, maybe pass the type and answers into a function that constructs
                    const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.roomNumber);
                    theTeam.push(manager);
                    break;
                case 'Intern':
                    // need to construct the Intern, maybe pass the type and answers into a function that constructs
                    const newIntern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
                    theTeam.push(newIntern);
                    break;
                case 'Engineer':
                    // need to construct the Engineer, maybe pass the type and answers into a function that constructs
                    const newEngineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
                    theTeam.push(newEngineer);
                    break;
            };
            if (answers.nextStep === 'Add an engineer') {
                getEmployeeInfo('Engineer');
            }
            else if (answers.nextStep === 'Add an intern') {
                getEmployeeInfo('Intern');
            }
            else if (answers.nextStep === 'Finish building my team') {
                console.log('Team complete');
                console.log(theTeam);
            };
        });
};

const theTeam = [];
const buildTeam = getEmployeeInfo('Manager');
buildTeam;

