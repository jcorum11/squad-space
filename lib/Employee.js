class Employee {
    constructor(name, id, email, type) {
        this.name = name
        this.id = id
        this.email = email
        this.type = type
    }
    getName() { return this.name }
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() { return this.type }
};

module.exports = Employee;