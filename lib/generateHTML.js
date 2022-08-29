{/* <div class="team-cards flex-container wrap justify-center">
            <div class="card cool-background">
                <div class="card-content flex-container cool-background">
                    <div class="card-header flex-container padding-bottom">
                        <div class="card-role flex-container">
                            <p class="card-role-text">Manager</p>
                        </div>
                        <div class="card-name flex-container">
                            <h1 class="wrap"><p>Pikachu John</p></h1>
                        </div>
                        <div class="card-id flex-container">
                            <p>id: </p>
                            <p class="card-id bold">21244</p>
                        </div>
                    </div>
                    <div class="card-photo flex-container justify-center padding-bottom">
                        <div class="card-photo-image">
                            <img src="https://www.placecage.com/g/300/200">
                        </div>
                    </div>
                    <div class="card-body flex-container">
                        <div class="card-email flex-container justify-center bold">
                            <a class="link" href = "mailto: abc@example.com">pikachu@gmail.com</a>
                        </div>
                        <div class="card-quote flex-container">
                            <p class="quote-text">There are no stupid questions, but there are a lot of inquisitive idiots!</p>
                            <p class="quote-author">-Justin Sewell</p>
                        </div>
                        <div class="card-alt-info flex-container justify-center">
                            <p class="alt-info-name">Room:</p>
                            <a class="alt-info-text bold link" href="" target="_blank" rel="noreferrer noopener">143A</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}



function generateHTML(theTeam) {
    let teamCards = [];

// generate each individual emplyee card
    theTeam.forEach(element => {
        console.log(`From the other function: ${element.name}`);
        // element.name;
        // element.id;
        // element.email;
        // element.role;
        let altInfo = '';
        let altInfoType = '';

        switch (element.role) {
            case 'Manager':
                altInfo = element.roomNum;
                altInfoType = 'Room: ';
                break;
            case 'Engineer':
                altInfo = element.github;
                altInfoType = 'GitHub: ';
                break;
            case 'Intern':
                altInfo = element.school;
                altInfoType = 'School: ';
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
                    <img src="https://www.placecage.com/g/300/200">
                </div>
            </div>
            <div class="card-body flex-container">
                <div class="card-email flex-container justify-center bold">
                    <a class="link" href = "mailto: ${element.email}">${element.email}</a>
                </div>
                <div class="card-quote flex-container">
                    <p class="quote-text">There are no stupid questions, but there are a lot of inquisitive idiots!</p>
                    <p class="quote-author">-Justin Sewell</p>
                </div>
                <div class="card-alt-info flex-container justify-center">
                    <p class="alt-info-name">${altInfoType}</p>
                    <a class="alt-info-text bold link" href="" target="_blank" rel="noreferrer noopener">${altInfo}</a>
                </div>
            </div>
        </div>
    </div>
    `);
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
