// Переписати код нижче з використанням конструкції switch…case
// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

let numOrStr = prompt('input number or string').trim();
console.log(numOrStr);
console.log(typeof numOrStr);
console.log(+numOrStr);
console.log(Boolean.numOrStr);

switch (numOrStr) {
  case (null):
    console.log('ви скасували');
    break;
  case (""):
    console.log('Empty String');
    break;
  case (!Number):
    console.log('number is Ba_NaN');  
    break;
  default:
    console.log('OK!');
}
