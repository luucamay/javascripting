let challenge = ' 30 Days Of JavaScript ';
console.log(challenge);
console.log(challenge.length);
let challengeUpper = challenge.toUpperCase();
let challengeLower = challenge.toLowerCase();
//challenge = challenge[0,4] // does it works?
console.log(challenge.includes('Script'));
let challengeArray = challenge.split('');
challengeArray = challenge.split(' ');
// Falta reto 6,7 y 10 en adelante
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(',');
// print char at 15 position
console.log(challenge.charAt(15));
// print character code of 11 char
console.log(challenge.charCodeAt(11));
// indexOf to determine the position of the first 'a'
console.log(challenge.indexOf('a'));
// lastIndexOf to determine the position of the last 'a'
console.log(challenge.lastIndexOf('a'));
// indexOf
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
// javascript string search vs indexof (search is for regular expressions)
console.log(sentence.search('because'));
// use trim
challenge = challenge.trim();
// startsWith()
console.log(challenge.startsWith('30 Days Of JavaScript'));
// endsWith()
console.log(challenge.endsWith('30 Days Of JavaScript'));
// match() uses always regular expressions
console.log(challenge.match(/[a]/g));
// concat()
let string1 = '30 Days of';
let string2 = 'JavaScript';
string1 = string1.concat(string2);
// repeat()
console.log(string1.repeat(2));
/* Nivel 2*/
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');
// typeof
let num = '10';
let number = 10;
console.log(typeof num == typeof String(number));
// parseFloat()
console.log(parseInt(parseFloat('9.8')));