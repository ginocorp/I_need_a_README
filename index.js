// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for the user
const questions = [
  {
    type: "input",
    message: "What is your GitHub",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your readme?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your application?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the instructions for installation of your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "What did you use to create this?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed in this project?",
    name: "contributors",
  },
  {
    type: "input",
    message: "How do you test this project?",
    name: "tests",
  },
  {
    type: "list",
    message: "Which license do you want to use?",
    name: "license",
    choices: ["MIT", "Mozilla Public License", "GPL", "Apache License", "GNU AGPLv3"] 
  }
]
inquirer.prompt(questions)

    .then(function (data) {
      const fileName = "sampleREADME.md";
      console.log(data);
      writeToFile(fileName, data);
    });

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), null, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Your sampleREADME.md file has been generated");
  });
}