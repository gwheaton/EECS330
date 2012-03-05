var context;
var currentBubbles = new Array();

function Bubble(x, y) {
	this.x = x;      // x coordinate
	this.y = y;      // y coordinate
	this.enlarged = false;
	
	this.draw = function(context) {		
		
			context.save();
			
			if (!this.enlarged) {
				context.fillStyle = "rgba(0,100,180,0.5)";
				context.beginPath();			
				context.arc(this.x, this.y, 40, 0, Math.PI*2, true);
				context.closePath();
				context.fill();
			}
			else {
				context.fillStyle = "rgba(0,100,180,0.5)";
				context.beginPath();			
				context.arc(this.x, this.y, 80, 0, Math.PI*2, true);
				context.closePath();
				context.fill();
			}
			
			context.restore();
	}
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
	
	var bubble = getClosestBubble(x, y);
	
	bubble.enlarged = true;
	redraw();	
}

function getClosestBubble(x, y)
{
	var mindist = 100000; var dist; var retBubble;
	
	for (var i in currentBubbles) {
		dist = distBetweenPoints(x, y, currentBubbles[i].x, currentBubbles[i].y);
		
		if (dist < mindist) {
			mindist = dist;
			retBubble = currentBubbles[i];
		}
	}
	
	return retBubble;
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