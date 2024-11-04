/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' 
\*/

function FirstLatterUpper(str){
   
    const convertArr = str.split(' ');
    let upperCase= '';
    // console.log(convertArr);
    for(const item of convertArr){
        upperCase += item[0].toUpperCase() + item.slice(1) + ' ';
    }
    
    return upperCase ;

}

const result = FirstLatterUpper('the quick brown fox');
console.log(result);





// const wordArray = str.split(" ").map((word) => (word[0].toUpperCase() + word.slice(1)));

//     return wordArray