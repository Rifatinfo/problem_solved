//basic function 
function add(x,y){
if(typeof x !== "number" || typeof y !== "number"){
    return "Please Enter a number";
}
return x + y;
}
console.log(add("4",7));