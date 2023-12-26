/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
//  import inquirer from 'inquirer';
 const inquirer = require('inquirer');
 var qr = require('qr-image');
 var fs = require('fs');

 
 inquirer
  .prompt([ 
    /* Pass your questions in here */
    {
        name: 'url',
        message: 'Enter url of website:'
      },
  ])
  .then((answer) => {
    // Use user feedback to create a qr image!!
    console.info('Answer:', answer.url);
    url = answer.url;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(`qr_img.png`));
    // create atext file
   // qr_svg.pipe(require('fs').createWriteStream(`text.txt`));
   fs.writeFileSync('URL.txt', url); 
    var svg_string = qr.imageSync(url, { type: 'png' });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });