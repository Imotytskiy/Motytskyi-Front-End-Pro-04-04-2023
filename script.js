"use strict";
// First level

// const someName =  window.prompt("What is your name","");
// window.alert("Hello, "+ someName +"! How are you?"); 

// Second level

// const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
// const someName = prompt("What is your name", "");

// if (nameRegex.test(someName)) {
//   alert("Hello, " + someName + "! How are you?");
// } else {
//   alert("Wrong name");
// }

// Third level
// https://www.webpages.uidaho.edu/cte419/Offline-Modules/M6/ARMA-12_Filing_Rules.htm

function getName() {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  let someName = prompt("What is your name?", "");
  let lowercaseName = someName.toLowerCase();

  if (nameRegex.test(someName) && lowercaseName.length < 30) {
    const upsomeName = lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);
    return upsomeName;
  } else {
    alert("Wrong name. Please try again.");
    return getName();
  }
}

let username = getName();
alert("Hello, " + username + "! How are you?");

// Fourth level
// use API and service which check it is could be human name
// async function main() {
//   const { name, gender } = await getName();
//   alert(`Hello, ${name}! How are you?`);
// }

// async function getName() {
//   const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
//   let someName = prompt("What is your name?", "");
//   let lowercaseName = someName.toLowerCase();

//   if (nameRegex.test(someName) && lowercaseName.length < 30) {
//     const upsomeName = lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);

//     //  API  genderize.io
//     const response = await fetch(`https://api.genderize.io/?name=${upsomeName}`);
//     const data = await response.json();

//     //  OK from service 
//     if (data.gender) {
//       return { name: upsomeName, gender: data.gender };
//     } else {
//       alert("Please use human name. Try again.");
//       return getName();
//     }
//   } else {
//     alert("Wrong name. Please try again.");
//     return getName();
//   }
// }

// main();