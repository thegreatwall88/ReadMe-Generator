function renderLicenseBadge(license) {
  if (license === 'None') {
      return '';
  }  
  let licenseLink;
  switch (license) {
      case 'MIT':
          licenseLink = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
          break;
      case 'GPLv3':
          licenseLink = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
          break;
      case 'Apache 2.0':
          licenseLink = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
          break;
      case 'BSD 3-Clause':
          licenseLink = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
          break;
      default:
          licenseLink = '';
          break;
  }
  return licenseLink;   

}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
      return '';
  }
  let licenseLink;
  switch (license) {
      case 'MIT':
          licenseLink = 'https://opensource.org/licenses/MIT';
          break;
      case 'GPLv3':
          licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
          break;
      case 'Apache 2.0':
          licenseLink = 'https://opensource.org/licenses/Apache-2.0';
          break;
      case 'BSD 3-Clause':
          licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
          break;
      default:
          licenseLink = '';
          break;
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  }
  return `## License

This project is licensed under the ${license} license. For more information, see the [license documentation](${renderLicenseLink(license)}).`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, please reach out to me:

GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;