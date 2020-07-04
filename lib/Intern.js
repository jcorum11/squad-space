const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, type , school) {
        super(name, id, email, type );
        this.school = school
    }
};

module.exports = Intern;