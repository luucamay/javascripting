/**
 * @param {string} s
 * @return {boolean}

Plan:
1. convert to lowercase
2. remove non alphanumeric
3. check from start to end if the chars are the same

Complexity: O(n)
 */

var isPalindrome = function (s) {
  s = s.toLowerCase()
  s = removeNonAlphanumeric(s)
  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (s[start] !== s[end]) {
      return false
    }
    start++
    end--
  }
  return true
};

const removeNonAlphanumeric = (string) => {
  let processed = ''
  let code, i
  let length = string.length

  for (i = 0; i < length; i++) {
    code = string.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
      (code > 96 && code < 123)) { // lower alpha (a-z)

      processed += string[i]
    }
  }
  return processed
}

const s = "Race A Car"
console.log(isPalindrome(s))