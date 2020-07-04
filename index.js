const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const writeFile = require("./src/writeFile");

const runProgram = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "list",
                name: "type",
                choices: ["manager", "intern", "engineer"]
            },
            {
                type: "input",
                name: "id",
                message: "What is your work id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?"
            }
        ])
        .then(employee => {
            if (employee.type === "intern") {
                // needs to be made into a function
                const intern = new Intern(employee.name, employee.id, employee.email, employee.type, "");
                writeFile(intern);
            }
            else if (employee.type === "engineer") {
                const engineer = new Engineer(employee.name, employee.id, employee.email, employee.type, "");
                writeFile(engineer);
            }
            else if (employee.type === "manager") {
                const manager = new Manager(employee.name, employee.id, employee.email, employee.type, "");
                writeFile(manager);
            }
        })
}
runProgram();