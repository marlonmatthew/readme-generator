function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `## ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

-------------------------------

## Installation

${data.installationInstructions}

-------------------------------

## Usage

${data.usageInfo}

-------------------------------

${renderLicenseSection(data.license)}

-------------------------------
  
## Contributing

${data.contributionGuidelines}

-------------------------------

## Tests

${data.testInstructions}

-------------------------------

## Questions

My email: ${data.email}

My GitHub: https://github.com/${data.githubName}/

`;
}

module.exports = generateMarkdown;
