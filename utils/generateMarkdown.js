// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)
  `;
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
  console.log(data);
  const {
    title,
    projectDesc,
    installation,
    usage,
    license,
    contributing,
    tests,
    gitHubUserName,
    email,
  } = data;
  const badge = renderLicenseBadge(license);
  return `
# ${title}

##${badge}

## Description
* ${projectDesc}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).


## How to Contribute
${contributing}

## Tests
${tests}

## Questions
Please contact me via GitHub <a href="https://github.com/${gitHubUserName}">https://github.com/${gitHubUserName}</a>

You can also email me at <a href="mailto:${email}">${email}</a>

`;
}

module.exports = generateMarkdown;
