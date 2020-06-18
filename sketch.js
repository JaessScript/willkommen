let canvas;
let next;

let germany;
let x_ge;
let y_ge;

// Resive the canvas when the size of the browser changes
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.position(windowWidth / 2, 5);
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	germany = select('#germany');
	x_ge = windowWidth / 3;
	y_ge = 0;
	setInterval(changePositionGermany, 300);

}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function changePositionGermany() {
	germany.position(x_ge, y_ge);
	if(y_ge<windowHeight){
		y_ge += 10;
	} else {
		y_ge = 0;
	}
}

function draw() {
	background(255, 132, 100);
}