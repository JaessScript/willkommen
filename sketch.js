let canvas;
let next;
let copyrights;

let germany;
let x_ge;
let y_ge;

let merkel;
let x_me;
let y_me;

let currywurst;
let x_cu;
let y_cu;

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
	// next.position(windowWidth / 2, 5);
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	copyrights = select('#copyrights');
	// copyrights.position(100 + windowWidth / 3, windowHeight-50);

	germany = select('#germany');
	x_ge = windowWidth / 3;
	y_ge = 0;
	setInterval(changePositionGermany, 300);

	merkel = select('#merkel');
	x_me = windowWidth / 2;
	y_me = windowHeight;
	setInterval(changePositionMerkel, 200);

	currywurst = select('#currywurst');
	x_cu = (2 * windowWidth) / 3;
	y_cu = 0;
	setInterval(changePositionCurrywurst, 300);
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function changePositionGermany() {
	germany.position(x_ge, y_ge);
	if (y_ge < windowHeight) {
		y_ge += 10;
	} else {
		y_ge = 0;
	}
}

function changePositionMerkel() {
	merkel.position(x_me, y_me);
	if (y_me <= windowHeight) {
		y_me -= 10;
	}
	if (y_me < 0) {
		y_me = windowHeight;
	}
}

function changePositionCurrywurst() {
	currywurst.position(x_cu, y_cu);
	if (y_cu < windowHeight) {
		y_cu += 10;
	} else {
		y_cu = 0;
	}
}

function draw() {
	background(255, 132, 100);
}