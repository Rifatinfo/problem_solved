
function chooseBestSum(ls) {
       let arr = [];
    for(let i = 0 ; i < ls.length - 2  ; i++){
        for(let j = i + 1 ; j <ls.length - 1 ; j++ ){
           for(let k = j+ 1 ; k < ls.length; k++){
               arr.push([arr[i], arr[j], arr[k]]);
           }
        }
    }
    return arr;
}

const result = chooseBestSum([91, 74, 73, 85, 73, 81, 87]);
console.log(result);