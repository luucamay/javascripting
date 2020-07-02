// Challenge description here: https://gist.github.com/luucamay/c08847f73d1890385c24cc05d2238feb
// Original challenge: https://www.codewars.com/kata/5b358a1e228d316283001892/train/python

const getStrings = (city) => {
  let answer = '';
  city = city.toLowerCase();
  const dict = {};
  const stringSize = city.length;
  
  for (let i=0; i<stringSize; i++){
    // char is a letter?
    const currChar = city[i];
    if (currChar.match(/[a-z]/i)){
      if (currChar in dict)
        dict[currChar] += '*';
      else
        dict[currChar] = '*';
    }
  }

  for (let char in dict){
    const cityStar = char + ':' + dict[char];
    answer = answer + cityStar + ',';
  }

  return answer.slice(0, -1);
}

console.log(getStrings('Chicago'));
