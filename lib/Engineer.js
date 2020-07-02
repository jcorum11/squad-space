const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(githubUsername) {
        super();
        this.githubUsername = githubUsername;
    }
};

module.exports = Engineer;