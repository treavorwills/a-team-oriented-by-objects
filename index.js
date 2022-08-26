const inquirer = require('inquirer');

// const questionsManager = [
//     {
//         name: 'officeNum',
//         message: 'Office number: ',
//     },
// ];

// const questionsNextAction = [
//     {
//         type: 'list',
//         name: 'nextStep',
//         message: 'I would like to: ',
//         choices: [
//             'Add an engineer',
//             'Add an intern',
//             'Finish building my team',
//         ],
//     },
// ];

// const questions = [
//     {
//         name: 'name',
//         message: 'Name: ',
//     },
//     {
//         name: 'employeeId',
//         message: 'Employee ID: ',
//     },
//     {
//         name: 'email',
//         message: 'Email: ',
//     },
// ];

// const questionsEngineer = [
//     {
//         name: 'github',
//         message: 'GitHub username: ',
//     },
// ];

// const questionsIntern = [
//     {
//         name: 'school',
//         message: 'Intern\'s school: ',
//     },
// ];

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
                    console.log(type);
                    break;
                case 'Intern':
                    // need to construct the Intern, maybe pass the type and answers into a function that constructs
                    console.log(type);
                    break;
                case 'Engineer':
                    // need to construct the Engineer, maybe pass the type and answers into a function that constructs
                    console.log(type);
                    break;
            };
            console.info('answers: ', answers);
            if (answers.nextStep === 'Add an engineer') {
                console.log('Add engineer');
                getEmployeeInfo('Engineer');
            }
            else if (answers.nextStep === 'Add an intern') {
                console.log('add an intern');
                getEmployeeInfo('Intern');
            }
            else if (answers.nextStep === 'Finish building my team') {
                console.log('Team complete');
            };
        });
};

const buildTeam = getEmployeeInfo('Manager');

buildTeam;
