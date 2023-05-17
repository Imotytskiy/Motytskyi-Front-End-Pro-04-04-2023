const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = '#89CFF0';
parentElement.style.marginTop = '10%';
parentElement.style.display = 'flex';
parentElement.style.justifyContent = 'center';
parentElement.style.alignItems = 'center';

let cellCounter = 0;

function makeColumnsRows( columns = 10, rows = 10) {
  const table = document.createElement('table');
    parentElement.appendChild(table);
    table.style.position = 'absolute';
    table.style.top = '50%';
    table.style.left = '50%';
    table.style.transform = 'translate(-50%, -50%)';
    table.style.border = `2px solid blue`;

        for (let i = 0; i < rows; ++i) {
                setTimeout(() => {
                    const tr = document.createElement('tr');
                    table.appendChild(tr);
                        for (let j = 0; j < columns; ++j) {
                            setTimeout(() => {
                                const td = document.createElement('td');
                                tr.appendChild(td);
                                td.style.color = 'white';
                                td.style.fontSize = '22px';
                                td.style.border = `2px solid blue`;
                                td.style.width = '50px';
                                td.style.padding = '10px';
                                cellCounter++;
                                td.textContent = cellCounter;
                            }, 100 * j);
                        }
                },100 * i);
        }
}

makeColumnsRows();
