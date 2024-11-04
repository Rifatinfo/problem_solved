/* 
Word Frequency Counter
Create a function that takes a string and returns an object representing the frequency of each word in the string.
 */

function wordFrequencyCounter(str) {
   if(str.length === 0){
      return {};
   }

   let output = {};

   let strArr = str.split(" ");
   strArr.map(word => {
    if(output[word]){
       output[word]++;
    } 
    else{
        output[word] = 1;
    }
   })
   return output;
}
const result = wordFrequencyCounter("Hello, world! Hello everyone. Welcome to the world of JavaScript.");
console.log(result);
