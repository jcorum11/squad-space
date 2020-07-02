const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Jake", "12345", "jake@gmail.com", "jcorum11");

    expect(engineer.name).toBe("Jake");
    expect(engineer.id).toBe("12345");
    expect(engineer.email).toBe("jake@gmail.com");
    expect(engineer.githubUsername).toBe("jcorum11");
});