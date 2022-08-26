const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }
    getSchool() {
        return this.gitHub;
    }
    getRole() {
        return this.role;
    };
};

module.exports = Engineer;