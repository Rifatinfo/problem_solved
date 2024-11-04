const mixArr =["lws",undefined,"Md Rifat Hossain", false, "", "apple",40, "k",true, "thanks all", NaN];

const trueSArray = mixArr.filter(function(element){
   if(element){
     return true;
   }
   else{
    return false;
   }
});

console.log(trueSArray);
// const trueSArray = mixArr.filter(Boolean);


const objMixArr ={
    a :"lws",
    b : undefined,
    c : "Md Rifat Hossain", 
    d : false,
    f : "", 
    j : "apple",
    k : 40,
    l : "k",
    t : true, 
    o : "thanks all",
    p : NaN };

    const truthyObject = function(objects) {
        for(let object in objects){
           if(objects[object]){
               delete objects[object];
           }
        }
        return objects;
    }

    const result = truthyObject(objMixArr);
    console.log(result);