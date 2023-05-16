const parentElement = document.querySelector('body');
parentElement.style.backgroundColor = '#89CFF0';
parentElement.style.marginTop = '10%';
parentElement.style.display = 'flex';
parentElement.style.justifyContent = 'center';
parentElement.style.alignItems = 'center';

function makeColumnsRows(Columns = 10, Rows = 10) {
  const table = document.createElement('table');
    parentElement.appendChild(table);
    table.style.position = 'absolute';
    table.style.top = '50%';
    table.style.left = '50%';
    table.style.transform = 'translate(-50%, -50%)';
    table.style.border = `2px solid blue`;

    let cellNumber = 0;

        for (let i = 0; i < Rows; ++i) {
                setTimeout(() => {
                    const tr = document.createElement('tr');
                    table.appendChild(tr);
                        for (let j = 0; j < Columns; ++j) {
                            setTimeout(() => {
                                const td = document.createElement('td');
                                tr.appendChild(td);
                                td.style.color = 'white';
                                td.style.fontSize = '22px';
                                td.style.border = `2px solid blue`;
                                td.style.padding = '10px';
                                cellNumber++;
                                td.textContent = cellNumber;
                            }, 100 * j);
                        }
                },100 * i);
        }
}

makeColumnsRows();
