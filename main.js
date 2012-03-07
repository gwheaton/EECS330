var context;


// global vars to hold data for events and bubbles across category
var currentBubbles = new Array();
var eventInfo = new Array();


// global vars for interactivity mode and which bubble is enlarged for mouse click event handler
var interactiveMode = true;
var enlargedBubble;

// radius for bubbles
var smallRad = 40;
var largeRad = 80;


(document.getElementById( 'pForm' )).style.display = 'none';

function Bubble(x, y, event) {
	this.x = x;      // x coordinate
	this.y = y;      // y coordinate
	this.enlarged = false;
	this.event = event; // event class to store all event info for this bubble
	
	this.draw = function(context) {		
		
			context.save();
			
			if (!this.enlarged) {
				context.fillStyle = "rgba(0,100,180,0.5)";
				context.beginPath();			
				context.arc(this.x, this.y, smallRad, 0, Math.PI*2, true);
				context.closePath();
				context.fill();
			}
			else {
				context.fillStyle = "rgba(0,100,180,0.5)";
				context.beginPath();			
				context.arc(this.x, this.y, largeRad, 0, Math.PI*2, true);
				context.closePath();
				context.fill();
			}
			
			context.restore();
	}
}

function Event(name, date, time, descrip, food) {
	this.name = name; //  string
	this.date = date; // string
	this.time = time; // string
	this.descrip = descrip; // string
	this.food = food; // true or false
}

	
function mouseDown(e)
{
	var x; var y;
	
	if (e.pageX || e.pageY) {
		x = e.pageX;
		y = e.pageY;
	}	
	else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}

	x -= this.offsetLeft;
	y -= this.offsetTop;
		
	if (interactiveMode) {	
		var bubble = getClosestBubble(x, y);
	
		if ( withinBubble(bubble, x, y, interactiveMode) ) {
			
			bubble.enlarged = true;
			redraw();
		
			enlargedBubble = bubble; // set our global enlarged ptr to this bubble for now
		
			interactiveMode = false;
		}
	}
	else { // we have an enlarged bubble, if we click outside it return it to normal and reenter interactive mode
		var bubble = enlargedBubble; // grab our global
		
		if (withinBubble(bubble, x, y, interactiveMode)) {
			// do nothing yet
		}
		else {
		
			bubble.enlarged = false;
			redraw();
			
			interactiveMode = true;
			
		}
	}
}

function getClosestBubble(x, y)
{
	var mindist = 9000; var dist; var retBubble;
	
	for (var i in currentBubbles) {
		dist = distBetweenPoints(x, y, currentBubbles[i].x, currentBubbles[i].y);
		
		if (dist < mindist) {
			mindist = dist;
			retBubble = currentBubbles[i];
		}
	}
	
	return retBubble;
}		

function withinBubble(bubble, x, y, mode)
{
	var rad;
	
	if (mode)  { // small bubble
		rad = smallRad;
	}
	else { // larger
		rad = largeRad;
	}
	
	if ( distBetweenPoints(x, y, bubble.x, bubble.y) <= rad ) {
		return true;
	}
	else {
		return false;
	}
}
	

function distBetweenPoints(x1, y1, x2, y2)
{
	var x = 0;
	var y = 0;
	
	x = x2 - x1;
	x = x * x;
	
	y = y2 - y1;
	y = y * y;
	
	return Math.sqrt( x + y );
}

function redraw() {
// redraw the canvas bubbles

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	for (var i in currentBubbles) {
		currentBubbles[i].draw(context);
	}
}
		
function setup() {
	var element = document.getElementById('canvas');
	
	// event listeners for interaction
	element.addEventListener('click', mouseDown, false);
	//
	
	if (element && element.getContext) {
		var context = element.getContext('2d');
		
		if (context) {
		
			var bubble;
			var x;
			var y;
			var cont;
			
			do {
				x = Math.random()*500 + 50;
				y = Math.random()*650 + 50;
				cont = true;
				
				for (i in currentBubbles) {
					if (distBetweenPoints(x, y, currentBubbles[i].x, currentBubbles[i].y) < 70) {
						cont= false;
					}
				}
			} while (!cont);
				
			bubble = new Bubble(x, y)
			bubble.draw(context);
			
			currentBubbles.push(bubble);
		}
	}
}

function initprompt() {
var pf = document.getElementById( 'pForm' );
pf.style.display = 'none';
}
	
function prompt() {
// get field to be validated
var pf = document.getElementById( 'pForm' );
pf.style.display = 'block';
}

function getPdata( arg ) {
var f = document.getElementById( 'pForm' );
if ( 'cancel' == arg ) {
f.style.display = 'none';	// hide form
return;	// exit immediately
}

else {
var n = f.event.value;
var a = f.date.value;
var t = f.time.value;
f.style.display = 'none';	// hide form
alert( 'event: ' + n + '\n date: ' + a + '\n time: ' + t);
}
}