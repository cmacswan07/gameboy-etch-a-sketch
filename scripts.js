const container = document.querySelector('#container');

const row = document.createElement('div');
const cell = document.createElement('div');
cell.setAttribute('style', 'display : inline-block; border : 1px solid black; height : 25px; width : 25px; ');
row.setAttribute('style', 'width : 400px;')

container.appendChild(row)


for (a=0; a<16; a++) {
	const row = document.createElement('div');
	row.setAttribute('style', 'width : 400px;');
	container.appendChild(row);
	console.log('made row');

		for (i=0; i<16; i++) {
			const cell = document.createElement('div');
			cell.setAttribute("style", 
			'display : inline-block; border : .25px solid black; height : 25px; width : 25px; box-sizing : border-box; ');	
			row.appendChild(cell); }
}



/*

*/



