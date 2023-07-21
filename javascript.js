// this function creates a size * size grid by creating #size rows and adding #size cells to each row
function createGrid(size = 16) {
    const container = document.querySelector('.container');
    const sliderText = document.querySelector('.slider-text');
    sliderText.textContent = `Size: ${size} x ${size}`
    for (let rows = 0; rows < size; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let columns = 0; columns < size; columns++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = 500 / size + 'px';
            cell.style.height = 500 / size + 'px';
            row.appendChild(cell);
        }
    }
}

// this function paints the cells black if the mouse hovers over them
function paintCells(inputColor = 0) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            if (inputColor === 0) {
                cell.style.backgroundColor = 'black';
            }
            if (inputColor === 1) {
                cell.style.backgroundColor = 'white';
            }
            if (inputColor === 2) {
                cell.style.backgroundColor = generateRandomColor();
            }
        });
    });
}

function changeGrid() {
    const slider = document.querySelector('.slider');
    slider.oninput = function() {
        deleteGrid();
        createGrid(slider.value);
        paintCells();
    }
}

function deleteGrid() {
    const container = document.querySelector('.container');
    const row = document.querySelectorAll('.row');
    for (let rows = 0; rows < row.length; rows++) {
        container.removeChild(row[rows]);
    }
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

function generateRandomColor() {
    let random = function () {
        return Math.ceil(Math.random() * 256);
    }
    return `rgb(${random()}, ${random()}, ${random()})`;
}

createGrid();
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'black') paintCells();
        if (button.id === 'color') paintCells(2);
        if (button.id === 'grayscale') paintCells();
        if (button.id === 'eraser') paintCells(1);
        if (button.id === 'clear') clearGrid();
    });
});

changeGrid();
paintCells();