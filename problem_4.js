function details(info){
    if(typeof info !== "object" ){
         return "please enter a object";
    }
    else if(!info.name || !info.age){
        return "please enter a object";
    }
    else if(typeof info.name !== "string" || typeof info.age !== "number"){
        return "name should be string, age should be a number";
    }
    else if(info.age <= 0){
         return "age should be a positive number";
    }
    return `my name is : ${info.name}. my age is ${info.age}`;
}
// console.log(details({name : "mehedy", age : 26}));
console.log(details({name : "mehedy", age : -90}));
// console.log(details("xyz"))