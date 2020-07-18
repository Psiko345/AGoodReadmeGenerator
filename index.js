const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Please enter your Github Username:",
    name: "username",
  },
  {
    type: "input",
    message: "E-mail address:",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your repository:",
    name: "title",
  },
  {
    type: "input",
    message:
      "A title image is a good idea, paste a hyperlink of an image here:",
    name: "titleImage",
  },
  {
    type: "input",
    message:
      "Write a brief description of your repository, one or two sentences max:",
    name: "description",
  },
  {
    type: "input",
    message:
      "URL of Repository, if you have one already, else leave blank and add in later:",
    name: "URL",
  },
  {
    type: "input",
    message: "What Node packages are needed to run your code:",
    name: "packages",
  },
  {
    type: "input",
    message: "Provide a quick overview of your installation instructions:",
    name: "install",
  },
  {
    type: "input",
    message: "Please provide an example of usage:",
    name: "usage",
  },
  {
    type: "list",
    message: "What license do you wish to use:",
    name: "license",
    choices: [
      "MIT",
      "GNU GPLv3",
      "Apache 2.0",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
    ],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
  });
}

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
