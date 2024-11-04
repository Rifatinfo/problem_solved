

/**
 * 
 * The string has the following conditions to be alphanumeric:

   At least one character ("" is not valid)  // false 
  Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
   No whitespaces / underscore  // false 
 
 */

const alphanumeric = (str) => {
    if (!str.length) return false;
    const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let char of str) {
        console.log(char);
        if (!ALLOWED_CHARS.includes(char)) return false;
    }
     return true;
  }

const result = alphanumeric("fuohfoehfoe_wh");
console.log(result);




  //     for(const str of string){
//         // console.log(typeof str);
//         if(str === ' ' || str === "_"){
//            return false ;
//         }
//     }
//     return (string === '') ? false : true ;