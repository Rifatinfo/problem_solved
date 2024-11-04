// [1,3,1]   =>  1,3  => [3,3,3]  

function arrayReplace(inputArray, elementToReplace, substituteElement){
    inputArray.forEach((element, index) => {
        if(element === elementToReplace){  
            inputArray[index] = substituteElement; 
        }
    });
    return inputArray;
}

const result = arrayReplace([1, 3, 1], 1, 3);
console.log(result);



