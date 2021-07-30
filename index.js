// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Every good project needs a name!');
            return false;
          }
        } 
      },
      {
        type: 'input',
        message: 'Please enter a description about your project:',
        name: 'description',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please tell us a little about your project!');
            return false;
          }
        }
      },
      {
       type: 'confirm',
       message: 'Does your project need instructions on how to install?',
       name: 'confirmInstall',
       default: true
      },
      {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installInput',
        when: ({ confirmInstall }) => {
          if (confirmInstall) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        message: 'Please explain how this project is used:',
        name: 'usage',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please let user know how best to use your project');
            return false;
          }
        }
      },
      {
        type: 'list',
        message: 'Which license does your project come under?',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC']
      },
      {
       type: 'confirm',
       message: 'Is your project open to contributors?',
       name: 'confirmContributors',
       default: true
      },
      {
        type: 'input',
        message: 'Please enter your contributor guidelines for this project',
        name: 'contributors',
        when: ({ confirmContributors }) => {
          if (confirmContributors) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Will your project need testing instructions?',
        default: true
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please input testing instructions for the user:',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false
            }
        }
      }, 
      {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'gitLink',
        message: 'Please enter your GitHub Profile Link:',
        validate: gitLinkInput => {
            if (gitLinkInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Link!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
      }
    ])
      .then((data) => {

        let readmeContent = markdown.generateMarkdown(data)

        fs.writeFile('Professional-README.md', readmeContent, (err) =>
          err ? console.error(err) : console.log('File Created!')
        )
      })
};

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();
