const fs = require('fs');
const path = require('path');

const current = path.join(__dirname, 'files');
const copy = path.join(__dirname, 'files-copy');

fs.mkdir(copy, { recursive: true }, (err) => {
    if (err) throw err;
});

fs.readdir(copy,{ withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(e => {
        if (e.isFile()) {
            let folder = path.join(__dirname, 'files-copy', e.name);
            fs.unlink(folder, err => {
                if (err) throw err;
            });
        }
    });
});

fs.readdir(current, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(e => {
        if (e.isFile()) {
            let src = path.join(__dirname, 'files', e.name);
            let folder = path.join(__dirname, 'files-copy', e.name);
            fs.copyFile(src, folder, callback);
        }
    });
});

function callback(err) {
    if (err) throw err;
}