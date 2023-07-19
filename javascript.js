// this function creates a 16 * 16 grid by creating 16 rows and adding 16 cells to each row
function createGrid() {
    const container = document.querySelector('.container');
    for (let rows = 0; rows < 16; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let columns = 0; columns < 16; columns++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = 100 / 16 + '%';
            cell.style.paddingTop = 100 / 16 + '%';// aspect ratio
            row.appendChild(cell);
        }
    }
}

createGrid();