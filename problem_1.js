// //  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)


function persistence(num) {
    let convertString = num.toString() ;
    let total = 1;
    let persistenceCount = 0;


while(convertString.length > 1){
    total = 1;
    convertString = findNumber(convertString).toString();
    persistenceCount ++;
}
    return persistenceCount;


    function  findNumber(newNum) {

        for(const num of newNum){
        total  *= parseInt(num);
        } 
        return total
    }
}
console.log( persistence(39));