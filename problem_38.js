const name = ['asif', 'zahid', 'zara', 'tina', 'pina', 'kina', 'zahid', 'zara'];
// const numbers = [1,2,3,4,5,6,7,89,4,5,6,73,33,66,88,3,4];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
       if(unique.includes(item) === false){
          unique.push(item);
       }
    }
    return unique;
}
const uniqueArray = noDuplicate(name);
console.log(uniqueArray);