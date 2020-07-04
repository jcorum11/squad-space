const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, type, officeNumber) {
        super(name, id, email, type);
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {return this.officeNumber}
};

module.exports = Manager