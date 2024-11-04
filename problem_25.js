/*
    foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

 */



function incrementString (strng) {

  const match = strng.match(/(\d*)$/);
  const numberString = match[0];
  console.log(numberString);
  return (numberString === '') ? strng + 1 :  strng.slice(0,-numberString.length) + (Number(numberString) + 1).toString().padStart(numberString.length, '0'); 
}


const result = incrementString("foo");
console.log(result);