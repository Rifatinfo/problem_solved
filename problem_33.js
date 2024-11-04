/*
Sum of Digits
Create a function that takes a non-negative integer and returns the sum of its digits. If the sum is a single digit, return it; otherwise, continue summing the digits of the result until a single digit is obtained. 
*/ 

function sumOfDigits(num) {
    // Calculate the sum of digits
    let numStr = num.toString();
    let sum = 0;
    for (let digit of numStr) {
      sum += parseInt(digit);
    }
  
    // If the sum is 10 or greater, recursively sum the digits
    if (sum >= 10) {
      return sumOfDigits(sum);
    }
  
    // Return the single-digit sum
    return sum;
  }
  

console.log(sumOfDigits(123));    // Output: 6 (1 + 2 + 3 = 6)
console.log(sumOfDigits(9875));   // Output: 2 (9 + 8 + 7 + 5 = 29 -> 2 + 9 = 11 -> 1 + 1 = 2)
console.log(sumOfDigits(5));      // Output: 5 (5 is already a single digit)
console.log(sumOfDigits(99999));  // Output: 9 (9 + 9 + 9 + 9 + 9 = 45 -> 4 + 5 = 9)
console.log(sumOfDigits(0));      // Output: 0 (0 is already a single digit)
