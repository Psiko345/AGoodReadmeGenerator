// function to generate markdown for README
function generateMarkdown(data) {
  let titleImageMd =
    data.titleImage === ""
      ? ""
      : `![alt text](${data.titleImage} "${data.title} logo icon")`;

  let packagesMd =
    data.packages === ""
      ? "You shouldn't need anything! Although I recommend running: npm i , as a default."
      : data.packages;

  let installMd =
    data.install === ""
      ? "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
      : data.install;

  let usageMd =
    data.usage === ""
      ? "Provide instructions and examples for use. Include screenshots as needed."
      : data.usage;

  let licenses = {
    MIT: "https://choosealicense.com/licenses/mit/",
    "GNU GPLv3": "https://choosealicense.com/licenses/gpl-3.0/",
    "Apache 2.0": "https://choosealicense.com/licenses/apache-2.0/",
    "GNU LGPLv3": "https://choosealicense.com/licenses/lgpl-3.0/",
    "Mozilla Public License 2.0":
      "https://choosealicense.com/licenses/mpl-2.0/",
  };

  let licenseURL = licenses[data.license];
  let licenseMd = `[${data.license}](${licenseURL})`;

  return `
  ${titleImageMd}
  
  # ${data.title}
   *${data.description}*

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  6. [License](#license)

  ## Installation
  You will need the following Node.js packages: ${packagesMd} 
  ${installMd}

  ## Usage
  ${usageMd}

  ## Contributing
  If you have created an application or package and don't mind other developers contributing to it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

  ## Tests
  Go the extra mile and write tests for your application. Then provide examples on how to run them.

  ## Questions
  If you have and questions regarding the code, feel free to contact me @ ${data.username} on github, or email me @ ${data.email}
  

  ## License
  ${licenseMd}
`;
}

module.exports = generateMarkdown;
