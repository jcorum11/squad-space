const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Jake", "12345", "jake@gmail.com", "manager", "91919");

    expect(manager.name).toBe("Jake");
    expect(manager.id).toBe("12345");
    expect(manager.email).toBe("jake@gmail.com");
    expect(manager.type).toBe("manager");
    expect(manager.officeNumber).toBe("91919");

    expect(manager.getName()).toBe("Jake");
    expect(manager.getId()).toBe("12345");
    expect(manager.getEmail()).toBe("jake@gmail.com");
    expect(manager.getRole()).toBe("manager");
    expect(manager.getOfficeNumber()).toBe("91919");
});

