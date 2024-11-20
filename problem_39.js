// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.round(Math.random()*10));


// specificData.setMonth(10);
// console.log(specificData.toLocalString('en-GB'));


let x = 4
let y = 7;

console.log(x,y);
[x,y] = [y,x];
console.log(x,y);

for(let i = 0; i <5; i++){
  setTimeout(function() {
    console.log(i);
  }, 200);
}
