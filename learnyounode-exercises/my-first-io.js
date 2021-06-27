const fs = require('fs');
const text = fs.readFileSync(process.argv[2], 'utf-8');
const lines = text.split('\n');
console.log(lines.length - 1);
