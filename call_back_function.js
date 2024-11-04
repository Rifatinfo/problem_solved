const first = (a,b, callback) => {
   setTimeout(() => {
    console.log(a + b);
    callback() ;
   }, 2000);
}

const second = () => {
    console.log('second-2');
}

first(5, 6, second);


// 
function setTime(a, b, callback){
    setTimeout( () => {
        const sum = a + b ;
        console.log("Please set a time", sum);
    callback;        
    }, 2000);
}

function delayTime(){
    console.log('Why you delay');
}
setTime(4,5, delayTime());