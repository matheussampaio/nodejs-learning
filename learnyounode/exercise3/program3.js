var fs = require('fs');

console.log(fs.readFileSync(process.argv[2], 'utf-8').split("\n").length - 1)