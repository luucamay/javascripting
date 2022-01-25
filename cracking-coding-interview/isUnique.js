// check if a string has all unique characters.
// What if you can not use additional data structures *in this case sort first then compare current and after
// Hints: #44, #177, #132
const isUnique = (xString) => {
  const dictionary = {}
  for (const char of xString) {
    if (dictionary.hasOwnProperty(char)) {
      return false;
    }
    dictionary[char] = 1;
  }
  return true;
}

const isUniqueAlphabet = (xString) => {
  const alphabet = new Array(128).fill(false);
  for (let i = 0; i < xString.length; i++) {
    const ascciValue = xString.charCodeAt(i);
    if (alphabet[ascciValue])
      return false;
    alphabet[ascciValue] = true;
  }
  return true;
}

const isUniqueSort = (xString) => {
  const xArray = xString.split('').sort();
  const size = xString.length;
  let unique = true;
  xArray.forEach((char, index) => {
    if (index < size - 1 && char === xArray[index + 1]) {
      unique = false;
    }
  });
  return unique;
}
const result = isUnique("asdfg");
const result = isUniqueAlphabet("asdfgzdZ");
const result2 = isUniqueSort("basdfg");
console.log(result, result2);