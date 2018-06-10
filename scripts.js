const container = document.querySelector('#container');

const row = document.createElement('div');
const cell = document.createElement('div');
cell.setAttribute('style', 'display : inline-block; border : 1px solid black; height : 25px; width : 25px; ');
row.setAttribute('style', 'width : 400px;')

container.appendChild(row)



for (i=0; i<16; i++) {
	const cell = document.createElement('div');
	cell.setAttribute("style", 
		'display : inline-block; border : 1px solid black; height : 25px; width : 25px; box-sizing : border-box; ');	
	row.appendChild(cell); }




