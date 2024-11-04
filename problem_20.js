// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"

// function generateHashtag (str) {

//   const stringLetters = str.toLowerCase().split(" ");
//   console.log(stringLetters);
// for(let i = 0 ; i < stringLetters.length ; i++){
//     stringLetters[i] = stringLetters[i].charAt(0).toUpperCase() + stringLetters[i].slice(1);     
// }

//  return '#' + stringLetters.join(" ").replace(/ /g, "").trim();
 
// }
// const result = generateHashtag ("     hello there thanks for trying my Kata"); 
// console.log(result);



// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
function generateHashtag (str) {
  
    let sentence = '#';
    const wordArray = str.trim().split(' ');

    for(let word of wordArray){
        if(word !== ""){
           sentence += word.charAt(0).toUpperCase() + word.slice(1);
           }
      }
  
      return (sentence.length > 140 || !str.trim()) ? false : sentence ;
  
}
 const result = generateHashtag (""); 
 console.log(result);
