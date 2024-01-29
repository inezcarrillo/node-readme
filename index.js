// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utilities/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt ([
    {
        message: "What is the name of your project?",
        title: "title",
        type: "input",
    },
    {
        message: "What is your name?",
        name: "name",
        type: "input",
    },
    {
        message: "Enter a description of your project.",
        name: "discription",
        type: "input",
    },
    {
        message: "Enter installation instructions.",
        name: "discription",
        type: "input",
    },
    {
        message: "Enter usage information.",
        name: "discription",
        type: "input",
    },
    {
        message: "Please choose what license you would like to use.",
        name: "list",
        choices: ["MIT", "GPL", "BSL", "Ms-PL"],
        type: "input",
    },
    {
        message: "What is your GitHub username?",
        name: "username",
        type: "input",
    },
    {
        message: "What is your email?",
        name: "email",
        type: "input",
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
