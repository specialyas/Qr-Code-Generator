/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
//  import inquirer from 'inquirer';
 const inquirer = require('inquirer');
 var qr = require('qr-image');
 


 inquirer
  .prompt([ 
    /* Pass your questions in here */
    {
        name: 'faveReptile',
        message: 'What is your favorite reptile?'
      },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.info('Answer:', answers.faveReptile);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



