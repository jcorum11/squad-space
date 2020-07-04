const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Jake", "12345", "jake@gmail.com", "engineer", "jcorum11");

    expect(engineer.name).toBe("Jake");
    expect(engineer.id).toBe("12345");
    expect(engineer.email).toBe("jake@gmail.com");
    expect(engineer.type).toBe("engineer");
    expect(engineer.githubUsername).toBe("jcorum11");

    expect(engineer.getName()).toBe("Jake");
    expect(engineer.getId()).toBe("12345");
    expect(engineer.getEmail()).toBe("jake@gmail.com");
    expect(engineer.getRole()).toBe("engineer");
    expect(engineer.getGithub()).toBe("jcorum11");
});
