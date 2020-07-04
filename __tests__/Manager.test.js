const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Jake", "1234", "jake@gmail.com", "manager", "91919");

    expect(manager.name).toBe("Jake");
    expect(manager.id).toBe("1234");
    expect(manager.email).toBe("jake@gmail.com");
    expect(manager.type).toBe("manager");
    expect(manager.officeNumber).toBe("91919");
});

