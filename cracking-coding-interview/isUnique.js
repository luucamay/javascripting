// check if a string has all unique characters.
// What if you can not use additional data structures
const isUnique = (xString) => {
  const dictionary = {}
  for (const char of xString) {
    if (!dictionary.hasOwnProperty(char)) {
      dictionary[char] = 1;
    } else {
      return false;
    }
  }
  return true;
}

const result = isUnique("asdfg");
console.log(result);