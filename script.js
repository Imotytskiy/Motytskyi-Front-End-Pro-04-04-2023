function sum(){
    let  all = 0;
         return function(num){
             all =  all + num;
             return all;
         }
}

const sumFn = sum();  

console.log (sumFn(3)); 

console.log (sumFn(5)); 

console.log (sumFn(20));
