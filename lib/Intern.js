const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, type , school) {
        super(name, id, email, type );
        this.school = school
    }
    getSchool() {return this.school}
};

module.exports = Intern;