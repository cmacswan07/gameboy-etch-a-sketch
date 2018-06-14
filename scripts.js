const container = document.querySelector('#container');
const row = document.createElement('div');
const cell = document.createElement('div');

let gridSize = 50;


let resizeButton = document.querySelector('#resize');

resizeButton.onclick = () => { 
	container.innerHTML = "";
	gridSize = prompt("Select a new size for grid. (Size X Size)");
	createGrid();

}

createGrid();

function createGrid() {
	for (a=0; a<gridSize; a++) {
		const row = document.createElement('div');
		row.setAttribute('style', 'height :' + 400/gridSize + 'px; width : 400px;');
		row.classList.add('row');
		container.appendChild(row);

			for (i=0; i<gridSize; i++) {
				const cell = document.createElement('div');
				cell.setAttribute("style", 
				'display : table-cell; height :' + 400/gridSize + 'px; width :' + 400/gridSize + 'px; ');
				cell.addEventListener("mouseover", () => { cell.style.backgroundColor = "pink"; });
				cell.classList.add('cell');	
				row.appendChild(cell); }
	}
}


