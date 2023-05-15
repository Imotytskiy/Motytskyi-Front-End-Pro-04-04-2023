// asynchronous

// function asyncForEach(array, cb) {
//     array.forEach(function()) {
//         setTimeout(cb, 0);
//     }
// }

// function rot13(str) {
//     const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
//     var strRot = '';
//     for( i = 0; i <= str.lenght; i++){
//       for (k = 0; k <= input.lenght; k++){
//         if (str[i] === input[k]){
//           strRot.concat(output[k]);
//         }
//         else if(!input.includes(str[i])){
//           strRot.concat(str[i]);
//         }
//       }
//     }
//     return str = strRot; 
//   } 

//   let str = "A";
//   console.log(rot13(str));

// function rot13(str) {
//     const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
//     let strRot = '';
//     for (let i = 0; i < str.length; i++) {
//       let found = false;
//       for (let k = 0; k < input.length; k++) {
//         if (str[i] === input[k]) {
//           strRot += output[k];
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         strRot += str[i];
//       }
//     }
//     return strRot;
//   }
  
//   let str = "1";
//   console.log(rot13(str));
const shops = [
  {rice: 500},
  {oil: 200},
  {bread:50},
];



const map = new Map();
map.set(shops[0],5000);
console.log(map);

map.keys( )