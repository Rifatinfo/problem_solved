let sentence = "I love bangladesh.";

function countingWord(sentence){
    let count = 0;
    let charCount =  sentence.length;
    
    for(let i = 0 ; i < charCount ; i++ ){
       let char = sentence[i];
      if( char == " " || char == "."){
         count++;
      }
    }
}

console.log(countingWord("I love bangladesh."));