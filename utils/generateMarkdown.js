// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? 'badge1' : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseSection) {
  return licenseSection ? licenseSection : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, projectDesc } = data;
  var badge = renderLicenseBadge(data.license);
  return `
# ${title}
liscense

##${badge}

## Description
* ${projectDesc}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
Provide instructions and examples for use. Include screenshots as needed.

## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Badges
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer

## Tests
Go the extra mile and write tests for your application.

## Questions
If your project has a lot of features, list them here.

`;
}

module.exports = generateMarkdown;
