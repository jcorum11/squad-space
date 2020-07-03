const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");


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
            const intern = new Intern(employee.name, employee.id, employee.email, "");
            inquirer
                .prompt({
                    type: "input", 
                    name: "school", 
                    message: "What school did you go to?"
                })
                .then(school => {
                    intern.school = school;
                    fs.writeFile("./dist/squad-space.html", generateHTML(intern), err => {
                        if (err) throw err;
                    });
                });
        }
        else if (employee.type === "engineer") {
            const engineer = new Engineer(employee.name, employee.id, employee.email, "");
            inquirer
                .prompt({
                    type: "input", 
                    name: "githubUsername", 
                    message: "What is your GitHub username?"
                })
                .then(githubUsername => {
                    engineer.githubUsername = githubUsername;
                    fs.writeFile("./dist/squad-space.html", generateHTML(engineer), err => {
                        if (err) throw err;
                    });
                });
        }
        else if (employee.type === "manager") {
            const manager = new Manager(employee.name, employee.id, employee.email, "");
            inquirer
                .prompt({
                    type: "input", 
                    name: "officeNumber", 
                    message: "What is your office number?"
                })
                .then(officeNumber => {
                    manager.officeNumber = officeNumber
                    fs.writeFile("./dist/squad-space.html", generateHTML(manager), err => {
                        if (err) throw err;
                    });
                });
        }
    })