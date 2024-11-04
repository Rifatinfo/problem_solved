function findLargestNumber(values){
    if(!Array.isArray(values)){
       return "provide an array";
    }
    else{
        let max = values[0];
        for(let i = 0 ; i < values.length ; i++){
            if(typeof values[i] !== "number"){
              return "all values should be number";
            }else{
                if(values[i] > max){
                    max = values[i];
                }
      
            }
           
        }
        return max;
    }
    }
const numbers = [1,2,34,567,8,9,88];
const result = findLargestNumber(numbers);
console.log(result);


