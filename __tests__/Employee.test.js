const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee("Jake", "12345", "jake@gmail.com");

    expect(employee.name).toBe("Jake");
    expect(employee.id).toBe("12345");
    expect(employee.email).toBe("jake@gmail.com");
    
});