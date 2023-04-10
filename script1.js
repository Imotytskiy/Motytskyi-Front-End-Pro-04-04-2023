const axios = require('axios');
const countries = require('countries-list');

axios.get('http://13.49.221.127')
  .then(response => {
    console.log(countries.US.name); // United States
    console.log(countries.CA.capital); // Ottawa
  })
  .catch(error => {
    console.error(error);
  });