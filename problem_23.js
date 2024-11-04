/*

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

function isogram(str){

   const newArr = str.toLowerCase().split('');

   const uniqueArr = [];
   for(const element of str){
    if(!uniqueArr.includes(element)){
        uniqueArr.push(element);
    }
   }
       return str.length === 0 ? true : newArr.length === uniqueArr.length ;
}

const result = isogram("");
console.log(result);