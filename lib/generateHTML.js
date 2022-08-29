const quotes = require('./quotes');
const placeholders = require('./placeholders');
const randomNumArray = require('./randomArray');


function generateHTML(theTeam) {
    let teamCards = [];
    let randomArray = randomNumArray(theTeam.length);
    let index = 0;


// generate each individual emplyee card
    theTeam.forEach(element => {
        console.log(`From the other function: ${element.name}`);
        let altInfo = '';
        let altInfoType = '';
        let quote = quotes[randomArray[index]];
        let placeholder = placeholders[randomArray[index]];

        switch (element.role) {
            case 'Manager':
                altInfo = element.roomNum;
                altInfoType = 'Room: ';
                altInfoHref = 'https://www.airbnb.com/';
                break;
            case 'Engineer':
                altInfo = element.github;
                altInfoType = 'GitHub: ';
                altInfoHref = 'https://github.com/' + element.github;
                break;
            case 'Intern':
                altInfo = element.school;
                altInfoType = 'School: ';
                altInfoHref = 'https://google.com/';
                break;
            default:
                altInfo = 'poop';
        }
        console.log(`${element.role}, ${element.name}, ${element.id}, ${element.email}, ${altInfo}`);

        teamCards.push(`<div class="card cool-background">
        <div class="card-content flex-container cool-background">
            <div class="card-header flex-container padding-bottom">
                <div class="card-role flex-container">
                    <p class="card-role-text">${element.role}</p>
                </div>
                <div class="card-name flex-container">
                    <h1 class="wrap"><p>${element.name}</p></h1>
                </div>
                <div class="card-id flex-container">
                    <p>id: </p>
                    <p class="card-id bold">${element.id}</p>
                </div>
            </div>
            <div class="card-photo flex-container justify-center padding-bottom">
                <div class="card-photo-image">
                    <img src="${placeholder}">
                </div>
            </div>
            <div class="card-body flex-container">
                <div class="card-email flex-container justify-center bold">
                    <a class="link" href = "mailto: ${element.email}">${element.email}</a>
                </div>
                <div class="card-quote flex-container">
                    <p class="quote-text">${quote.text}</p>
                    <p class="quote-author">-${quote.author}</p>
                </div>
                <div class="card-alt-info flex-container justify-center">
                    <p class="alt-info-name">${altInfoType}</p>
                    <a class="alt-info-text bold link" href="${altInfoHref}" target="_blank" rel="noreferrer noopener">${altInfo}</a>
                </div>
            </div>
        </div>
    </div>
    `);
    index++;
    });
// end of generating each individual emplyee card

// add the emplyees to the whole HTML document
let htmlDoc = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/reset.css" />
    <link rel="stylesheet" href="../src/stylesheet.css">
    <title>Developer Team</title>
</head>
<body>
    <header class="justify-center">
        <h1>
            <p>Super Stellar Developer Team</p> 
        </h1>
    </header>
    <section>
        <div class="team-cards flex-container wrap justify-center" id="cork-board">
        ${teamCards.join('')}
        </div>
    </section>
    <footer>blah blah blah</footer>
</body>
</html>
`
// html document complete
    return htmlDoc;
};

module.exports = generateHTML;
