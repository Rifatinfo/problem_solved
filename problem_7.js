function digPow(n, p){
    let basePower = 0;
    const toString = n.toString();
    for(let i = 0 ; i < toString.length; i++){
        basePower += toString[i] ** p; 
       p++;
    }
    return (basePower % n === 0)? basePower / n : -1 ;
    
}
 const result = digPow(695, 2);  // n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
 console.log(result);

 // n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 
 // n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51