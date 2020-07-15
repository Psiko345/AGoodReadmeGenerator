const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your repository?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a brief description of your repository",
    name: "description",
  },
  {
    type: "input",
    message:
      "For the table of conents, what are the sections of your repository?",
    name: "tableOfContents",
  },
  {
    type: "input",
    message:
      "Provide a quick overview of your installation instructions, including a requirements subsection if necessary",
    name: "install",
  },
  {
    type: "input",
    message: "Please provide an example of usage",
    name: "usage",
  },
  {
    type: "list",
    message: "What license do you wish to use?",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0"],
  },
  {
    type: "input",
    message: "Provide directions for people who wish to contribute",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "If you want, include more in-depth technical detail on your code and/or technologies here",
    name: "tests",
  },
  {
    type: "input",
    message:
      "If people have questions, where should they contact you? (github username and email)",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    let mkdn = generateMarkdown(response);
    console.log(mkdn);
    writeToFile("README.md", mkdn);
  });
}

// function call to initialize program
init();
