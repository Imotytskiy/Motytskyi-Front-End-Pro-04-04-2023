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