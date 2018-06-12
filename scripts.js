const container = document.querySelector('#container');
const row = document.createElement('div');
const cell = document.createElement('div');


/* Creates grid. */
for (a=0; a<16; a++) {
	const row = document.createElement('div');
	row.setAttribute('style', 'height : 25px; width : 400px; box-sizing : border-box;');
	container.appendChild(row);

		for (i=0; i<16; i++) {
			const cell = document.createElement('div');
			cell.setAttribute("style", 
			'display : inline-block; border : .25px solid black; height : 25px; width : 25px; box-sizing : border-box; ');
			cell.addEventListener("mouseover", () => { cell.style.backgroundColor = "pink"; });
			cell.classList.add('cell');	
			row.appendChild(cell); }
}

function darkenCell() {
	let currentDarkness = this.style.opacity;
	let newDarkness = Number(currentDarkness) + 0.1;
	this.style.currentDarkness = newDarkness;
}

/*

			cell.style.backgroundColor = "red";
*/




