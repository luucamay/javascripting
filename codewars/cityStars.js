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
        dict[currChar] += 1;
      else
        dict[currChar] = 1;
    }
  }

  for (let char in dict){
    const numStars = dict[char];
    let stars = '';
    for (let i=0; i<numStars; i++){
      stars += '*';
    }
    const cityStar = char + ':' + stars;
    answer = answer + cityStar + ',';
  }

  return answer.slice(0, -1);
}

console.log(getStrings('Chicago'));
