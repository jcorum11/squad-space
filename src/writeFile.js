const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

const writeFile = (object) => {
    let inqMessage = "";
    if (object.type === "intern") {
        inqMessage = "What school did you go to?";
    }
    else if (object.type === "engineer") {
        inqMessage = "What is your GitHub username?"
    }
    else if (object.type === "manager") {
        inqMessage = "What is your office number?"
    }
    inquirer
        .prompt({
            type: "input",
            name: "question",
            message: inqMessage
        })
        .then(response => {
            if (object.type === "intern") {
                object.school = response;
            }
            else if (object.type === "engineer") {
                object.githubUsername = response;
            }
            else if (object.type === "manager") {
                object.officeNumber = response;
            }
            fs.writeFile("./dist/squad-space.html", generateHTML(object), err => {
                if (err) throw err;
            });
        })
}

module.exports = writeFile;