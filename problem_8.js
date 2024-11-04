// function order(words){
//     const convertArray = words.split(' ');
//     convertArray.sort((a, b) => {
//         const numA = parseInt(a.match(/\d+/)[0]);
//         const numB = parseInt(b.match(/\d+/)[0]);
//         return numA - numB;
//     });
//     return convertArray.join(' ');
  
//   }
//   const sorting = order("is2 Thi1s T4est 3a");
//   console.log(sorting);



// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"


function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
        for(j = 0; j < array.length; j++) {
            if(array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
              }  
        }
    }
    return sortedArray.join(' ');
  }

     const sorting = order("is2 Thi1s T4est 3a");
     console.log(sorting);

     