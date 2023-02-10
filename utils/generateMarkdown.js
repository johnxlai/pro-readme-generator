// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license != 'None'
    ? `![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`
    : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license != 'None' ? `- [License](#license)` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license != 'None'
    ? `## License
* This project is under the ${license} license.
* If you want to get more details about the license, please visit [Choose License](https://choosealicense.com "Choose License")`
    : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `
# ${title}

${badge}

## Description
* ${projectDesc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)
${licenseLink}

## Installation
* ${installation}

## Usage
* ${usage}

${licenseSection}

## How to Contribute
* ${contributing}

## Tests
* ${tests}

## Questions
* Please contact me via my [Github Username](https://github.com/${gitHubUserName})

* You can reach me with additional questions <a href="mailto:${email}">${email}</a>

`;
}

module.exports = generateMarkdown;
