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
    name: 'projectDesc',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Please choose a lisense',
    name: 'license',
    choices: [
      'Apache',
      'Cloud',
      'GNU',
      'NPM',
      'MIT',
      'OpenBSD',
      'Rust',
      'Wordpress',
      'None',
    ],
  },
  {
    type: 'input',
    message: 'How to contribute to this project?',
    name: 'contributing',
  },
  { type: 'input', message: 'What kind of tests user can run?', name: 'tests' },
  { type: 'input', message: 'GitHub Username', name: 'gitHubUserName' },
  { type: 'input', message: 'Email Address', name: 'email' },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markDown = generateMarkdown(data);
  fs.appendFile(fileName, markDown, (err) =>
    //if there is a error console error
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  //prompt user on start of application
  inquirer.prompt(questions).then((res) => {
    writeToFile('PROREADME.md', res);
  });
}

// Function call to initialize app
init();
