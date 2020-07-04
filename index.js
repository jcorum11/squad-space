const inquirer = require("inquirer");
const runProgram = require("./src/runProgram");

inquirer
    .prompt([
        {
            type: "confirm",
            name: "welcome",
            message: "Welcome to Squad-Space! Lets make your employee directory"
        },
        {
            type: "confirm",
            name: "welcome2",
            message: "First, we'll need some info about your team members. Then we'll do the heavy lifting for you. Lets get started!"
        }
    ])
    .then(questions => runProgram());