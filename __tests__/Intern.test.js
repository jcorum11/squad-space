const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("Jake", "12345", "jake@gmail.com", "intern", "UofU");

    expect(intern.name).toBe("Jake");
    expect(intern.id).toBe("12345");
    expect(intern.email).toBe("jake@gmail.com");
    expect(intern.type).toBe("intern");
    expect(intern.school).toBe("UofU");

    expect(intern.getName()).toBe("Jake");
    expect(intern.getId()).toBe("12345");
    expect(intern.getEmail()).toBe("jake@gmail.com");
    expect(intern.getRole()).toBe("intern");
    expect(intern.getSchool()).toBe("UofU");
})