// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
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
  {
    type: 'input',
    message: 'Why did you build this project',
    name: 'why',
  },
  { type: 'input', message: 'What problem does it solve?', name: 'solved' },
  { type: 'input', message: 'What did you learn?', name: 'learned' },
  { type: 'input', message: 'Installation Steps', name: 'installsteps' },
  { type: 'input', message: 'Usage', name: 'usage' },
  { type: 'input', message: 'Credits', name: 'credit' },
  { type: 'input', message: 'License', name: 'license' },
  {
    type: 'checkbox',
    message: 'Please choose a lisense',
    name: 'stack',
    choices: ['HTML', 'MIT', 'JavaScript', 'MySQL'],
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
  },
];

inquirer.prompt(questions).then((res) => {
  console.log(res);
  writeToFile('READMETEST.md', res);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markDown = generateMarkdown(data);
  fs.appendFile(fileName, markDown, (err) =>
    //if there is a error console error
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
