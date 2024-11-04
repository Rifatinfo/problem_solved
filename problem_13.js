
function longeString(names){
    let longerstWord = '';

    for(const name of names){
         if(name.length > longerstWord){
           longerstWord = name;
         }
    }
    return [longerstWord, names.indexOf(longerstWord)];
}
const result = longeString(['md rifat hossain', 'Zara islam','Nabila islam', 'Zare Tina']);
console.log(result);