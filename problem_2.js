// function createPhoneNumber(numbers){

//      let result ='(' + numbers.slice(0,3).join('') + ')' + ' ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
//      return result;
// }

// const pNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890";
// console.log(pNumber);


function createPhoneNumber(numbers){
    let format = "(xxx) x-xxx-xxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
 const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
 console.log(result);