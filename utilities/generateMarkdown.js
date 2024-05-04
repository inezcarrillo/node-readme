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
  if (license !== 'None') {
    return `## License

    This project is covered under the ${license} license. Click the link above to learn more the license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}

  ##Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Licenses](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)
  
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Credits
  ${data.name}
`;
}


module.exports = generateMarkdown;
