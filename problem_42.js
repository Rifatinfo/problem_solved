function add(num1, num2){
    add = num1 + num2;
    return add;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b)
        return result;
    }
}

const result = calculator(5, 7, 'add');
console.log(result);