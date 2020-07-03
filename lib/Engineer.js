const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }
};

module.exports = Engineer;