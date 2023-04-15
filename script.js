// Перше завдання 

function outNumbers(event) {
  event.preventDefault(); 

  let from = parseFloat(document.getElementById("from").value);
  const to = parseFloat(document.getElementById("to").value);
  const step = parseFloat(document.getElementById("step").value);
  let arr = [];
  while (from <= to) {
      arr.push(from);
      from += step;
  }
  document.getElementById("output").value = arr.join(', ');
}
// Друге завдання

function dollarCost(event) {
    event.preventDefault();
    let kurs = parseFloat(document.getElementById("kurs").value);
    const max = parseFloat(document.getElementById("max").value);
    const stepDollar = parseFloat(document.getElementById("stepDollar").value);
    let arrDol = [];
    for (let i = stepDollar; i <= max; i+=stepDollar){
        let res = i*kurs;
        arrDol.push(res);
    }
    document.getElementById("out").value = arrDol.join(', ');
}
// Третє завдання

function intOut(event) {
  event.preventDefault();
  let max = parseFloat(document.getElementById("NumberN").value);
  let toNumber = parseFloat(document.getElementById("toNumber").value);
  let i = parseFloat(document.getElementById("input").value);
    let arrSqr = [];
    while (i <= toNumber) {
         if ((i*i) <=  max) {
            arrSqr.push(i);
            i++;
         }
         else{
            break;
         }
    }
    document.getElementById("outNumber").value = arrSqr.join(', ');
}
// Четверте завдання

function primeNum(event) {
  event.preventDefault();
  let num = parseFloat(document.getElementById("prNum").value);
  let answer = `${num}, є простим числом`;
   if (num === 1 || num === 0) {
      answer = `${num}, не є простим числом`;
   } else {
      for(let i = 2; i < num; ++i ){
         if (num % i === 0){
            answer = `${num}, не є простим числом`;
            break;
         }
      }
   }
   document.getElementById("primeNumber").value = answer; 
}
//  П'яте завдання

 function exponentNum(event) {
   event.preventDefault();
   let num = parseFloat(document.getElementById("exponent").value);
   let answer = `можна`;
   while(num !== 1 || num % 1 !== 0){
         if ( num % 3 !== 0  ){
           answer = `не можна`;
           break;
         }
          num = num / 3;
   }
   document.getElementById("outExponent").value = answer; 
 }