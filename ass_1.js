/*function signature/sample */

function calculateTax(income, expenses) {
    if (
        (typeof income !== 'number' && typeof expenses !== 'number') &&  
        (income < 0 || expenses < 0)){
        return "Invalid Input";
    }
    else if (expenses > income)  {
        return "Invalid Input";
    }    
    else {
        netProfit = (income - expenses) * .20;
        return netProfit;
    }
}

const result = calculateTax(7000, 7000);
