const numbers = [1,2,3,4,5,6,7,7,8,1,2,3,4,5,6,7,8];

const dublicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
});

console.log(dublicates);