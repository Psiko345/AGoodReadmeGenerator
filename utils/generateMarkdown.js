// function to generate markdown for README
function generateMarkdown(data) {
  let installMd =
    data.install === ""
      ? "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
      : data.install;

  let titleImageMd =
    data.titleImage === ""
      ? ""
      : `![alt text](${data.titleImage} "${data.title} logo icon")`;

  let usageMd =
    data.usage === ""
      ? "Provide instructions and examples for use. Include screenshots as needed."
      : data.usage;

  return `
  ${titleImageMd}
  
  # ${data.title}
   *${data.description}*

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions/Contact](#questions/contact)
  6. [License](#license)

  ## Installation 
  ${installMd}

  ## Usage
  ${usageMd}

  ## Contributing
  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

  ## Tests
  ${data.tests}

  ## Questions/Contact
  ${data.questions}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
