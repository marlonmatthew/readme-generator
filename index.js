// adding what is required for the app
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the project: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the project: ",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "Enter the installation instructions: ",
  },
  {
    type: "input",
    name: "usageInfo",
    message: "Enter the usage information: ",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Enter the contribution guidelines: ",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Enter the test instructions: ",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license for the project: ",
    choices: ["APACHE", "BSD", "GPL", "MIT", "MPL", "CDDL", "EPL", "None"],
  },
  {
    type: "input",
    name: "githubName",
    message: "Enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address: ",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile("README.md", generateMarkdown({ ...responses }));
  });
}

// function call to initialize program
init();
