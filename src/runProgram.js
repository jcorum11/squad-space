const { generateHTML, generateCard } = require("../src/generateHTML");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

let HtmlString = "";
let employeeCardsHtml = "";

const runProgram = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "list",
                name: "type",
                message: "What type of employee are they?",
                choices: ["intern", "engineer", "manager"]
            },
            {
                type: "input",
                name: "id",
                message: "What is their work ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their work email?"
            },
            {
                type: "input", 
                name: "school", 
                message: "What school did they go to?", 
                when: function(answers) {
                    return answers.type === "intern";
                }
            },
            {
                type: "input", 
                name: "githubUsername", 
                message: "What is their GitHub username?", 
                when: function(answers) {
                    return answers.type === "engineer";
                }
            },
            {
                type: "input", 
                name: "officeNumber", 
                message: "What is their office number?", 
                when: function(answers) {
                    return answers.type === "manager";
                }
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add other team members?"
            }
        ])
        .then(answers => {
            if (answers.type === "intern") {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.type, answers.school);
                employeeCardsHtml += generateCard(intern);
                // fs.appendFile("./dist/squad-space.html", generateHTML(intern), err => {
                //     if (err) fs.writeFile("./dist/squad-space.html", generateHTML(intern), err => {if (err) throw err});
                // });
            }
            else if (answers.type === "engineer") {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.type, answers.githubUsername);
                employeeCardsHtml += generateCard(engineer);
                // fs.appendFile("./dist/squad-space.html", generateHTML(engineer), err => {
                //     if (err) fs.writeFile("./dist/squad-space.html", generateHTML(engineer), err => {if (err) throw err});
                // });
            }
            else if (answers.type === "manager") {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.type, answers.officeNumber);
                employeeCardsHtml += generateCard(manager);
                // fs.appendFile("./dist/squad-space.html", generateHTML(manager), err => {
                //     if (err) fs.writeFile("./dist/squad-space.html", generateHTML(manager), err => {if (err) throw err});
                // });
            }
            if (answers.addAnother) {
                runProgram();
            }
            else {
                fs.writeFile("./dist/squad-space.html", generateHTML(employeeCardsHtml), err => {if (err) throw err});
            }
        })
};

module.exports = runProgram;