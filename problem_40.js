const height = [23, 56, 65, 45, 69, 43];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const max = getMax(height);
console.log(max);