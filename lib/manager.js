const Employee = require('./employee');

// something like manager extends employee
class Manager extends Employee {
    constructor(name, id, email, roomNum) {
        super(name, id, email);
        this.roomNum = roomNum;
        this.role = 'Manager'; 
    }
    getRoomNum() {
        return this.roomNum;
    }
};

module.exports = Manager;