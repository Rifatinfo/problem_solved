function getRandomValue(n){
   let randomArray = []; // random value array without duplicate
   let count = 0 ;
   let duplicateArray = [];  // duplicate value array 
   
   for(let i = 0 ; i < n ; i++){
      let getRandomValue = Math.round(Math.random() * n);
    //  console.log(getRandomValue);
    if(randomArray.indexOf(getRandomValue) > -1){
       count++;
       duplicateArray.push();
    } else{
        randomArray.push(getRandomValue);
    }
   }
   console.log(randomArray);
   console.log(count);
   console.log(duplicateArray);
}
const result = getRandomValue(10);
console.log(result);