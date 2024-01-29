// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utilities/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt ([
    {
        message: "What is the name of your project?",
        title: "title",
        type: "input",
        validate: titleInput => {
            if ("titleInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE ENTER A TITLE");
            };
        }
    },
    {
        message: "What is your name?",
        name: "name",
        type: "input",
        validate: nameInput => {
            if ("nameInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE ENTER YOUR NAME");
            };
        }
    },
    {
        message: "Enter a description of your project.",
        name: "discription",
        type: "input",
        validate: discriptionInput => {
            if ("discriptionInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE ENTER A DISCRIPTION");
            };
        }
    },
    {
        message: "Enter installation instructions.",
        name: "installation",
        type: "input",
        validate: installtionInput => {
            if ("installationInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE ENTER AN INSTALLATION");
            };
        }
    },
    {
        message: "Enter usage information.",
        name: "usage",
        type: "input",
        validate: usageInput => {
            if ("usageInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE ENTER USAGE INFORMATION");
            };
        }
    },
    {
        message: "Please choose what license you would like to use.",
        name: "list",
        choices: ["MIT", "GPL", "BSL", "Ms-PL"],
        type: "input",
        validate: listInput => {
            if ("listInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE CHOOSE WHAT LICENSE TO USE");
            };
        }
    },
    {
        message: "What is your GitHub username?",
        name: "username",
        type: "input",
        validate: usernameInput => {
            if ("usernameInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE ENTER YOUR USERNAME");
            };
        }
    },
    {
        message: "What is your email?",
        name: "email",
        type: "input",
        validate: emailInput => {
            if ("emailInput") {
            return true;
            console.log("SUCCESS"); 
            }else {
            console.log("PLEASE ENTER YOUR EMAIL");
            };
        }
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
