// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the project title?',
    name: 'projectname',
  },
  {
    type: 'input',
    message: 'Please enter project description?',
    name: 'projectdescr',
  },
  {
    type: 'input',
    message: 'What was your motivation?',
    name: 'motivation',
  },
  { type: 'input', message: 'Why did you build this project', name: 'why' },
  { type: 'input', message: 'What problem does it solve?', name: 'solved' },
  { type: 'input', message: 'What did you learn?', name: 'learned' },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
