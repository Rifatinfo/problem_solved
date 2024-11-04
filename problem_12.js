function linearSearch(arr, value){
  const length = arr.length;
for(let i = 0; i < length ; i++){
    if(arr[i] === value){
      return i;
    }
}
return 'not found';
}
const result = linearSearch(['a', 'b', 'c','d','c'],'c');
console.log(result);