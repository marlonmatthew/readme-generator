// function to generate markdown for README
function generateMarkdown(data) {
  return `Title: ${data.title}

License: ${data.license}

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

-------------------------------

## Description

${data.description}

-------------------------------

## Installation

${data.installationInstructions}

-------------------------------

## Usage

${data.usageInfo}

-------------------------------

## License

This application is covered under the ${data.license} license.

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
