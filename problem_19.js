// alphabetPosition("The sunset sets at twelve o' clock.") 
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let convertedString = '';

    for (let i = 0; i < text.length; i++) {
        let index = alphabet.indexOf(text[i].toUpperCase());
        if (index >= 0) { // Change this condition to check if index is greater than or equal to 0
            convertedString += index + 1 + ' ';
        }  
    }
    return convertedString.trim();
  }
const result = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(result);





