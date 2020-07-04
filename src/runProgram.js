const { generateHTML, generateCard } = require("../src/generateHTML");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

// string to concatenate employee cards to 
let employeeCardsHtml = "";

// main program
const runProgram = () => {
    // main questions
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
                type: "input", // only run if employee is intern
                name: "school", 
                message: "What school did they go to?", 
                when: function(answers) {
                    return answers.type === "intern";
                }
            },
            {
                type: "input", // only run if employee is engineer
                name: "githubUsername", 
                message: "What is their GitHub username?", 
                when: function(answers) {
                    return answers.type === "engineer";
                }
            },
            {
                type: "input", // only run if employee is manager
                name: "officeNumber", 
                message: "What is their office number?", 
                when: function(answers) {
                    return answers.type === "manager";
                }
            },
            {
                type: "confirm", // if yes then will rerun program
                name: "addAnother",
                message: "Would you like to add other team members?"
            }
        ])
        .then(answers => {
            // if intern then create intern object and add intern card to html string
            if (answers.type === "intern") {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.type, answers.school);
                employeeCardsHtml += generateCard(intern);
            }
            // if engineer then create engineer object and add engineer card to html string
            else if (answers.type === "engineer") {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.type, answers.githubUsername);
                employeeCardsHtml += generateCard(engineer);
            }
            // if manager then create manager object and add manager card to html string
            else if (answers.type === "manager") {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.type, answers.officeNumber);
                employeeCardsHtml += generateCard(manager);
            }

            // if confirm question is yes then will rerun program else it will write html
            if (answers.addAnother) {
                runProgram();
            }
            else {
                fs.writeFile("./dist/squad-space.html", generateHTML(employeeCardsHtml), err => {if (err) throw err});
            }
        })
};

module.exports = runProgram;