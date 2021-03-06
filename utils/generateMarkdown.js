//Function to generate markdown for README
function generateMarkdown(data) {

  switch (data.license) {

    // Switch function to determine the licence badge from what was chosen in the licence list.
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GNU':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Apache':
      licenseBadge = `[![License : Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD':
      licenseBadge = `[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'ISC':
      licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    default:
      break;
  }

  return `
  # ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [How to Contribute](#how-to-contribute)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation
  ${data.installInput}

  ## Usage
  ${data.usage}

  ## License
  This application is covered under the ${data.license} license.

  ## How to Contribute
  ${data.contributors}

  ## Testing
  ${data.testing}

  ## Questions
  Created by [${data.githubUsername}](${data.gitLink})

  If you have any questions please contact me at [${data.email}](${data.email})

`;
}

module.exports = {
  generateMarkdown,
};
