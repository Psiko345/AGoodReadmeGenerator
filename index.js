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
    message: "A title image is a good idea, paste a hyperlink of an image here",
    name: "titleImage",
  },
  {
    type: "input",
    message:
      "Write a brief description of your repository, one or two sentences max",
    name: "description",
  },
  {
    type: "input",
    message: "Provide a quick overview of your installation instructions",
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
    choices: [
      "MIT",
      "GNU GPLv3",
      "Apache 2.0",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message: "If you would like to contribute to my project...",
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
