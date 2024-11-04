function getRandomNumber(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = getRandomNumber(1, 6);
console.log(result);

// problem - 11 
const roll_number = [2,34,5,6,7,8,9];
console.log(roll_number.sort(function (a,b) {
    return a - b;
}))


// problem - 12 ;

const vowels = ["a", "e","i","o","u","A","E","I","O","U"];

function countVowel (sentence){
   let count = 0;
   const letters = Array.from(sentence);
   letters.forEach(function (value , index,  array){
       if(vowels.includes(value)){
          count++;
       }
   });
   return count;
}
const countVowelResult = countVowel ("I Love Bangladesh");
console.log(countVowelResult);