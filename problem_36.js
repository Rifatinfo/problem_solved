/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
 
let PARCHES;
if(PARCHES >= 500){
    console.log('free Coke')
}
else{
    console.log('Coke: 30tk');
}


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 43 ;
let height = 44 ;

const squeryValue = height * height;
const BMI = weight / squeryValue ;

if(BMI < 18.5){
   console.log("you are underweight.")
}
else if(BMI >= 18.5 || BMI <=24.9){
    console.log("you are normal.")
}
else if(BMI >=25  || BMI <= 29.9){
    console.log("you are overweight")
}
else{
    console.log("you are obese.")
}


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const ticketPrice = 800;
let age = 50;
const student = true;
if(age < 10){
    console.log("You are Children : Free");
} else if(student == true){
     console.log(ticketPrice * 50/100); 
} else if(age >= 60){
    console.log(ticketPrice * 15/100); 
}  else {
    console.log('Otherwise Regular ticket fare 800 tk');
}