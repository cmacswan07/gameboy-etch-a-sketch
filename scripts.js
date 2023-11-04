const container = document.querySelector('#container');
const row = document.createElement('div');
const cell = document.createElement('div');
const resizeButton = document.querySelector('#resize');
const documentBody = document.getElementById('document-body');

let gridSize = 20;

/* creates grid */
function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');

    row.setAttribute("style", `
      height : ${300/gridSize}px; 
      width : 300px;
    `);

    row.classList.add('row');
    container.appendChild(row);

    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');

      cell.setAttribute("style", `
        display : table-cell; 
        height : ${300/gridSize}px; 
        width : ${300/gridSize}px; 
        opacity : 0; 
        background-color : #000
      `);

      cell.addEventListener("mouseover", darkenCell);
      cell.classList.add('cell');
      row.appendChild(cell); 
    }
  }
}

/* Increases opacity of cells. */
function darkenCell () {
  let cellOpacity = this.style.opacity++;

  if (cellOpacity < 1) {
    cellOpacity += 0.1;
  }

  this.style.opacity = cellOpacity;
}

resizeButton.onclick = () => { 
  container.innerHTML = "";
  gridSize = Number(prompt("Select a new size for grid, pick a number between 0 and 100. (Size X Size)"));

  while (isNaN(gridSize) || gridSize <= 0 || gridSize >= 100) {
    console.log(gridSize);
    gridSize = prompt("Please enter a valid number between 0 and 100.");
  }

  createGrid();
}

createGrid();