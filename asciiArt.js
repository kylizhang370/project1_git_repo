const figlet = require('figlet');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// in the case of command line arugment
if (process.argv.length > 2) {
    const inputString = process.argv[2];
    figlet(inputString, (error, inputData) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log(inputData);
      }

      rl.close();
      process.exit();
    });
  // if there is no command line 
} else {
  rl.question('Enter an input string to turn into ASCII art: ', (inputString) => {
    figlet(inputString, (error, inputData) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log(inputData);
      }
    });

    // Close the readline here 
    rl.close();
  });
}
