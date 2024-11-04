// function findUniq(arr) {
//    let uniqNumber = []
//    for(let i = 0 ; i < arr.length ; i++){
//        if(uniqNumber.indexOf(arr[i]) !== true){
//           uniqNumber.push(arr[i]);
//        }
//    }
//    return uniqNumber;
//   }
//   const result = findUniq([ 1, 1, 1 ,1, 1,8]);
//   console.log(result);


  function stray(numbers) {
   const  numbers = numbers.sort((a, b) => a - b);
    console.log(numbers);
    if (numbers[0] !== numbers[1]) {
      return numbers[0];
    }
    else {
      return numbers[numbers.length - 1];
    }
  }
  console.log(stray([17, 17, 17, 17, 17, 17, 30]));