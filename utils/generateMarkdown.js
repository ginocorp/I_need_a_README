// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/${encodeURI(
    data.license)}-License-<color>)
    \n
## Description  
    \n
${data.description}
    \n
## Table of Contents
    \n
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)
    
## Installation  
    \n
${data.installation}
    \n
## Usage   
    \n
${data.usage}
    \n
## License 
    \n
${data.license}
    \n
## Contributors  
    \n
${data.contributors}
    \n
## Tests  
    \n
${data.tests}
    \n
## Questions  
For any questions or concerns, contact me at ${data.email}
    \n
[Github](https://www.Github.com/${data.github})
   
  `;
}

module.exports = generateMarkdown;
