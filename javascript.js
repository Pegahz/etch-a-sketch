// this function creates a size * size grid by creating #size rows and adding #size cells to each row
function createGrid(size = 16) {
    const container = document.querySelector('.container');
    for (let rows = 0; rows < size; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let columns = 0; columns < size; columns++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = 100 / size + '%';
            cell.style.paddingTop = 100 / size + '%';// aspect ratio
            row.appendChild(cell);
        }
    }
}

// this function paints the cells black if the mouse hovers over them
function paintCells () {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}

createGrid();
paintCells();