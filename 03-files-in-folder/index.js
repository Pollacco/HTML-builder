const fs = require('fs');
const path = require('path');
const { stat } = require('fs');

const currentPath = path.join(__dirname, 'secret-folder');
fs.readdir(currentPath,  {withFileTypes: true}, (err, data) => {
    if (err) throw err;
    data.forEach(e => {
        if (e.isFile()) {
            const fileName  = e.name.substring(0, e.name.indexOf('.'));
            const extension = path.extname(path.join(currentPath, e.name)).substring(1);
            let size;
            fs.stat(path.join(currentPath, e.name), (err, stats) => {
                if (err) throw err;
                size  = Math.round(stats.size / 1024);
                console.log(`${fileName} — ${extension} — ${size} Kb`);
            });            
        }
    })
})