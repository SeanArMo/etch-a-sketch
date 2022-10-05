let gridSize = 16;

const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const clearButton = document.querySelector('#clear');
const sizeSlider = document.querySelector('#size');


function fill (gridSize){
    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.style.width = `${(1/gridSize) * 100}%`;
        cell.style.height = `${(1/gridSize) * 100}%`;
        grid.appendChild(cell);
    }
}

fill(gridSize);

let cells = document.querySelectorAll('.cell');

function setCellListener () {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            let path = e['path'];
            let targetCell = path[0];
            targetCell.setAttribute('id', 'filled')
        })
    });
}

function clear () {
    cells.forEach(cell => {
        grid.removeChild(cell);
    })
    fill(gridSize);
    cells = document.querySelectorAll('.cell');
    setCellListener();
}

sizeSlider.addEventListener('change', (e) => {
    gridSize = Number(e.target.value);
    clear();
})

clearButton.addEventListener('click', clear)
clearButton.addEventListener('click', () => {
    clearButton.classList.add('animation');
})
clearButton.addEventListener('transitionend', () => {
    clearButton.classList.remove('animation');
})
setCellListener();