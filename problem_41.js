const products = [
    {name : 'shampoo', price: 300},
    {name : 'chiruni', price: 300},
    {name : 'pant', price: 300},
    {name : 'shart', price: 300},
]

function getShoppingTotal (products){
    let total = 0;
   for(const product of products){
       total = total + product.price;
   }
   return total;
} 
const total = getShoppingTotal(products);
console.log(total);