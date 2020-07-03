const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Jake", "1234", "jake@gmail.com", "UofU");

    expect(intern.name).toBe("Jake");
    expect(intern.id).toBe("1234");
    expect(intern.email).toBe("jake@gmail.com");
    expect(intern.school).toBe("UofU");
})