const fs = require('fs');

const countLines = (err, data) => {
  if (err)
    return console.log(err);
  const lines = data.split('\n');
  console.log(lines.length - 1);
}

fs.readFile(process.argv[2], 'utf-8', countLines);