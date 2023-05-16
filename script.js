const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = 'black';

const table = document.createElement('table');
parentElement.appendChild(table);
table.style.marginTop = '5%';
table.style.display = 'flex';
table.style.justifyContent = 'center';
table.style.alignItems = 'center';