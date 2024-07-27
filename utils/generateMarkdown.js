// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
      return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)(https://opensource.org/licenses/${license})`;
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