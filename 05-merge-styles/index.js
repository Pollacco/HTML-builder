const fs = require('fs');
const path = require('path');

const rootFolder = path.join(__dirname, 'styles');
const outputFolder = path.join(__dirname, 'project-dist');

fs.readdir(rootFolder, (err, files) => {
    if (err) throw err;
    const list = files.filter(e => e.slice(e.lastIndexOf('.')) === '.css');
    let result = '';
    list.forEach(e => {
        fs.readFile(path.join(rootFolder, e), 'utf-8', (err, data) => {
            if (err) throw err;
            result += data;
            fs.writeFile(path.join(outputFolder, 'bundle.css'), result, (err) => {
                if (err) throw err;
            });
        });
    });
});