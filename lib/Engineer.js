const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, type, githubUsername) {
        super(name, id, email, type);
        this.githubUsername = githubUsername;
    }
    getGithub() {return this.githubUsername}
};

module.exports = Engineer;