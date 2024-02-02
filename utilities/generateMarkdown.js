// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === MIT) {
    return `(https://opensource.org/licenses/MIT)`
  };
  if (license === Apache) {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === SIL) {
    return `(https://opensource.org/licenses/OFL-1.1)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `##License 
  This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
