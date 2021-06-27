let args = process.argv;
args = args.slice(2);
//const nums = args.map(num => parseInt(num));
const nums = args.map(Number);
const sum = nums.reduce((a, b) => a + b);
console.log(sum);