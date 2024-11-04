
function moveZeros(arr) {
    const replaceNumber = [];
    const remainArr = [];
    for(const item of arr){
       if(item === 0){
          replaceNumber.push(item);
       }
       else{
         remainArr.push(item);
       }
    }
    let array = [...remainArr,  ...replaceNumber]
    return  array ;
}

const result = moveZeros([ 1, 2, 1, 1, 3, 1, +0, +0, +0, +0 ]);   //  // returns[false,1,1,2,1,3,"a",0,0]
console.log(result);