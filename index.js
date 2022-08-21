const inquirer = require('inquirer');

const questionsManager = [
    {
        name: 'officeNum',
        message: 'Office number: ',
    },
];

const questionsNextAction = [
    {
        type: 'list',
        name: 'nextStep',
        message: 'I would like to: ',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building my team',
        ],
    },
];

const questions = [
    {
        name: 'name',
        message: 'Name: ',
    },
    {
        name: 'employeeId',
        message: 'Employee ID: ',
    },
    {
        name: 'email',
        message: 'Email: ',
    },
];

const questionsEngineer = [
    {
        name: 'github',
        message: 'GitHub username: ',
    },
];

const questionsIntern = [
    {
        name: 'school',
        message: 'Intern\'s school: ',
    },
];

function buildTeam() {
    let myTeam = [];
    const askQuestions = () => {
        inquirer
            .prompt(questions)
            .then(answers => {
                myTeam = answers;
                console.info('answers: ', answers);
            });
    };
    const askQuestionsNextStep = () => {
        inquirer.prompt(questionsNextAction)
        .then(answers => {
            if (answers.nextStep === 'Add an engineer') {
                askQuestions();
                askQuestionsNextStep();
            }
            else if (answers.nextStep === 'Add an intern') {
                askQuestions();
                askQuestionsNextStep();
            }
            else if (answers.nextStep === 'Finish building my team') {
                console.log('Team complete');
            }
        })
    };
    askQuestions();
    askQuestionsNextStep();
    /// is there when logic that can go here?
    // askQuestionsNextStep();
};

const team = buildTeam();
