/**
 * The string has the following conditions to be alphanumeric:
   At least one character ("" is not valid)  // false 
  Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
   No whitespaces / underscore  // false 
 */

   const alphanumeric = (str) => {
      if(!str.length) return false;
      const ALLOWED_CHARS = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM0123456789';
      for(const char of str){
           if(!ALLOWED_CHARS.includes(char)) return false;
      }
      return true;

   }

   const result = alphanumeric("oighiogji_ioi"); 
   console.log(result);