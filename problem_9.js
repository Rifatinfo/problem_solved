function pandaCost (singara,samucha,jilapi){
if(typeof singara !== 'number' || typeof samucha !== 'number' || typeof jilapi !== 'number'){
  return "Please provided valid integer number";
}
else if(singara < 0 || samucha < 0 || jilapi < 0){
 return "all parameter should be positive number";
}
else{
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    
    const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapiPrice);
    return total;
}
  
}
const result = pandaCost (-34, '87', 98);
console.log(result);