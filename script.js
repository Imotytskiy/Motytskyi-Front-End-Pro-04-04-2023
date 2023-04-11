
// Переписати код нижче з використанням конструкції switch…case

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

"use strict";
   
let numOrStr = +prompt('input number or string');

   switch (isNaN(numOrStr)) {
      case true:
          console.log("string");
          break;
      case false:
          console.log("number");
          break;
      default:
         console.log("unknown type");
         break;
    }
   