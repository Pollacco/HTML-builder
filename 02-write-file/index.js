const fs = require('fs');
const path = require('path');
const readline = require('readline');

const stream = new fs.createWriteStream(path.join(__dirname, 'Text.txt'));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Hello! Type your text and i write it to file.. ', (userInput) => {
    if (userInput === 'exit') {
       rl.close();
    } else {
    rl.setPrompt('Wanna write something more? ');
    stream.write(userInput+'\n');
    rl.prompt();
    rl.on('line', (userInput) => {
        if (userInput === 'exit') {
            rl.close();
        } else {
        stream.write(userInput+'\n');
        rl.prompt();
        }});
    }   
});


rl.on('close', () => {
  console.log('Bye-bye! Write your text in the file "Text.txt"');
});