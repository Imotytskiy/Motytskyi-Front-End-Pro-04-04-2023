"use strict";

// const num = +prompt("Число, яке підноситься до ступеня","");
// let degree = +prompt("Ступінь","");

// const funcExponent = (num, degree) =>{
   
//     if (degree == 1) {
//         return num;
//       } else {
//         return num * funcExponent(num, degree - 1);
//       }
//     }

//     alert(funcExponent(num, degree));


    function pow (num, degree) {
        return (degree == 1) ? num : (num * pow (num, degree - 1));
      }
    alert(funcExponent(+prompt("Число, яке підноситься до ступеня",""), +prompt("Ступінь","")));


// не рекурсія
    // const result = Math.pow(
    //     +prompt("Число, яке підноситься до ступеня", ""),
    //     +prompt("Ступінь", "")
    //   );
    //   alert(result);


//четвертий варіант цикл, не рекурсія

// (function(){
//     const num = +prompt("Число яке підноситься до ступеня","");
//     let degree = +prompt("Ступінь","");
//     let result = 1;
//     for ( i = 1; i <= degree; i++){
//         result *= num;
//     }
//     return (alert (result));
// })()