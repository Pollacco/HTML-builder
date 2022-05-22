const fs = require('fs');
const path = require('path');

const file = path.join(__dirname,'../01-read-file/text.txt');
const sr = new fs.ReadStream(file, 'utf-8');

sr.on('readable', () => {
  const data = sr.read();
  data ? console.log(data) : '';
});