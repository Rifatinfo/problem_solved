function AnaToVori(Ana){
     if(typeof Ana !== 'number' || Ana < 0){
        return "please provided a valid number";
     }
     else{
        const Vori = Ana * 0.0625;
        return Vori;    
     }
}
const result = AnaToVori(-5);
console.log(result);