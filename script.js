const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = '#89CFF0';
parentElement.style.marginTop = '10%';
parentElement.style.display = 'flex';
parentElement.style.justifyContent = 'center';
parentElement.style.alignItems = 'center';

function makeColumnsRows(Columns = 10, Rows = 10) {
  const table = document.createElement('table');
  parentElement.appendChild(table);

    for (let i = 0; i < Rows; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < Columns; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.style.color = 'white';
            td.style.fontSize = '16';
            td.textContent = 'CELL';
        }
    }
}

makeColumnsRows();
