// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
  ${titleImage}
  # ${data.title}
   *${data.description}*

  ## Table of Contents
  1. Installation
  2. Usage
  3. Contributing
  4. Tests
  5. Questions/Contact
  6. License

  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Any questions?
  ${data.questions}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
