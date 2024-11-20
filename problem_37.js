function addAverage(numbers){
   const odds = [];
   for(const number of numbers){
       if(number % 2 === 1){
          odds.push(number);
       }
   }
   let sum = 0;
   for(const number of odds){
      sum = sum + number;
   }
   const count = odds.length;
   console.log(sum, count);
   const avg = sum / count;
   return avg;
}

const numbers = [43, 13, 45, 67, 45, 40];
const avg = addAverage(numbers);
console.log('average of the odd number is : ', avg);