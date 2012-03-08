var context;

// global vars to hold data for events and bubbles across category
var currentBubbles;
var currentCategory;
var currentEventList;

var abubble;

var eventInfo1 = new Array();
var myEvents = new Array();
// just set some preset events, although in reality this would draw from some database
var event1 = new Event("github training", "03/06/12", "12:00 PM", "learn github so you can program more efficiently!", true);
var event2 = new Event("blah", "03/07/12", "1:00 PM", "yo", false);
var event3 = new Event("bleh", "03/08/12", "12:00 AM", "fosho", true);
var event4 = new Event("meh", "03/09/12", "3:00 PM", "when does the narwhal bacon?", true);
var event5 = new Event("partywoooooooooooooo", "03/06/24", "12:00 PM", "at midnight!", true);
var event6 = new Event("fosho", "05/16/12", "12:00 PM", "balhabldlaadjadadiasmcw", true);
eventInfo1.push(event1);
eventInfo1.push(event2);
eventInfo1.push(event3);
eventInfo1.push(event4);
eventInfo1.push(event5);
eventInfo1.push(event6);
			
// global vars for interactivity mode and which bubble is enlarged for mouse click event handler
var interactiveMode = true;
var enlargedBubble;

// radius for bubbles
var smallRad = 60;
var largeRad = 290;

// coords for middle of canvas
var xmid = 300;
var ymid = 400;

function Bubble(x, y, event) {
	this.x = x;      // x coordinate
	this.y = y;      // y coordinate
	this.enlarged = false;
	this.event = event; // event class to store all event info for this bubble
	
	this.popped = false; // for popping animation
	this.children = new Array(); // little bubbles for poppping animation to be updated
	
	this.draw = function(context) {		
		
			context.save();
			
			if (!this.enlarged && !this.popped) {
				context.fillStyle = "rgba(0,100,180,0.5)";
				context.beginPath();			
				context.arc(this.x, this.y, smallRad, 0, Math.PI*2, true);
				context.closePath();
				context.fill();
				
				// fill in tag		
				context.fillStyle = "rgba(255, 255, 255, .9)";
				context.textBaseline = "middle";
				context.textAlign = "center";
				context.font = "14px arial, sans-serif";
				context.fillText(this.event.name.substr(0,15), this.x, this.y);
				
			}
			else if (this.enlarged && !this.popped) {
				context.fillStyle = "rgba(0,100,180,.9)";
				context.beginPath();			
				context.arc(xmid, ymid, largeRad, 0, Math.PI*2, true);
				context.closePath();
				context.fill();
				
				// fill in the info for the event
				context.fillStyle = "rgba(255, 255, 255, 1)";
				context.textBaseline = "middle";
				context.textAlign = "center";
				context.font = "14px arial, sans-serif";
				context.fillText(this.event.name.substr(0,15), xmid, ymid-200);
				context.fillText("Date:", xmid-120, ymid-150);
				context.fillText(this.event.date.substr(0,15), xmid-50, ymid-150);
				context.fillText("Time:", xmid+50, ymid-150);
				context.fillText(this.event.time.substr(0,15), xmid+120, ymid-150);
				context.fillText("Description:", xmid, ymid-100);
				context.fillText(this.event.descrip.substr(0,15), xmid, ymid-50);
				context.fillText("Add to My Events", 210, 615);
				context.fillText("Pop Bubble", 390, 615);
				if (this.event.food) {
					context.fillText("*Food will be provided", xmid-100, ymid+150);
					}
				var ctx = canvas.getContext('2d');
				ctx.fillStyle= "rgba(0, 0, 0, .2)";
				//ctx.strokeRect(150,600,120,30);  
				//ctx.strokeRect(330,600,120,30);
				ctx.fillRect(150,600,120,30);  
				ctx.fillRect(330,600,120,30); 
			}
			else {
				// popping animation
				// don't draw big bubble, just its children as they are updated repeatedly
				for (var i = 0; i < this.children.length ; i++) {
					this.children[i].draw(context);
				}
			}
			
			context.restore();
	}
}

function LilBubble(x, y, vx, vy, size) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.size = size;
	
	this.draw = function(context) {
		context.save();
		context.fillStyle = "rgba(0,100,170,0.4)";
		context.beginPath();			
		context.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
		context.closePath();
		context.fill();
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
		
			enlargedBubble = bubble; // set our global enlarged ptr to this bubble for now
			
			// look for the enlargedBubble and splice it from array and then push it so it's last
			// this is so the enlarged bubble will be drawn last and overshadow the other's text
			for (var i = 0; i < currentBubbles.length; i++) {
				if (currentBubbles[i].enlarged) {
					currentBubbles.splice(i, 1);
					break;
				}
			}
			currentBubbles.push(bubble);
				
			redraw();
		
			interactiveMode = false;
		}
	}
	else { // we have an enlarged bubble, if we click outside it return it to normal and reenter interactive mode
		var bubble = enlargedBubble; // grab our global
		
		if ( withinBubble(bubble, x, y, interactiveMode) ) {
			if ( y <= 630 && y >= 600 )  { // possibly within one of the two buttons
				if ( x <= 270 && x >= 150 ) { // within add to events button
					saveBubble(bubble);
				}
				else if ( x <= 450 && x >= 330) { // within pop button
					popBubble(bubble, x, y);
				}
				else {
					// do nothing
				}
			}
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
	
	for (var i = 0; i < currentBubbles.length ; i++) {
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
		
		if ( distBetweenPoints(x, y, bubble.x, bubble.y) <= smallRad ) {
			return true;
		}
	}
	else { // larger
	
		if ( distBetweenPoints(x, y, xmid, ymid) <= largeRad ) {
			return true;
		}			
	}
	
	return false;
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

function saveBubble(bubble) {
	// animation
	
	// add event to event list for My Events
	myEvents.push(bubble.event);
	
	// remove event from eventInfo
	for (var i = 0; i < currentEventList.length; i++) {
		if (currentEventList[i] == bubble.event) {
			currentEventList.splice(i, 1);
			break;
		}
	}
	
	// remove bubble from currentBubbles
	for (var j = 0; i < currentBubbles.length; j++) {
		if (currentBubbles[j].enlarged) {
			currentBubbles.splice(j, 1);
			break;
		}
	}
			
	// return to interactiveMode
	redraw();
	interactiveMode = true;
}

function popBubble(bubble, xc, yc) {
	// animation
	bubble.popped = true;
	
	var lilBubbles = new Array();
	var lilBub; var x; var y; var vx; var vy; var size;
	for ( var k = 0; k < 12; k++ ) {
		x = xc;
		y = yc;
		vx = Math.random()*20 - 5;
		vy = -(Math.random()*8 );
		size =  Math.random()*100;
		lilBub = new LilBubble(x, y, vx, vy, size);
		bubble.children.push(lilBub);
	}
	
	abubble = bubble;
	setInterval(animateBubbles, 40);
		
	// remove event from eventInfo
	for (var i = 0; i < currentEventList.length; i++) {
		if (currentEventList[i] == bubble.event) {
			currentEventList.splice(i, 1);
			break;
		}
	}
	
	// return to interactiveMode
	//redraw();
	interactiveMode = true;
}

function animateBubbles() {
	for (var j = 0; j < abubble.children.length ; j++) {
		abubble.children[j].x += abubble.children[j].vx;
		abubble.children[j].y += abubble.children[j].vy;
		abubble.children[j].vx /= 1.05;
		abubble.children[j].vy += 0.5;
		abubble.children[j].size /= 1.1;
	}
	redraw();
}

function redraw() {
// redraw the canvas bubbles

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	for (var i = 0; i < currentBubbles.length; i++) {
		currentBubbles[i].draw(context);
	}
}
		
function setup(category) {
	var element = document.getElementById('canvas');
	(document.getElementById( 'pForm' )).style.display = 'none';
	
	// event listeners for interaction
	element.addEventListener('click', mouseDown, false);
	//
	
	currentCategory = category;
	
	switch (category) {	
		case "category1":
			currentEventList = eventInfo1;
			setupByCategory(eventInfo1, element);
			break;
		case "myEvents":
			currentEventList = myEvents;
			setupByCategory(myEvents, element);
			break;
		default: alert("error");
	}
}

function setupByCategory(eventInfo, element) {
	
	if (element && element.getContext) {
		var context = element.getContext('2d');
		
		// erase current canvas
		context.clearRect(0, 0, element.width, element.height);
		
		// erase currentBubbles
		currentBubbles = new Array();
		
		if (context) {
		
			var bubble;
			var x;
			var y;
			var cont;
			
			for (var i = 0; i < eventInfo.length; i++) {
			
				do {
					x = Math.random()*500 + 50;
					y = Math.random()*650 + 50;
					cont = true;
				
					for (j in currentBubbles) {
						if (distBetweenPoints(x, y, currentBubbles[j].x, currentBubbles[j].y) < 70) {
							cont= false;
						}
					}
				} while (!cont);
				
				bubble = new Bubble(x, y, eventInfo[i]);
				bubble.draw(context);
			
				currentBubbles.push(bubble);
			}
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
		var d = f.script.value;
		var food = f.food.checked;
		var category = "category1"; // need to fix this
		
		f.style.display = 'none';	// hide form

		var newEvent = new Event(n, a, t, d, food);
		// use category selected to put into a category's event list
		switch (category) {	
				case "category1":
					eventInfo1.push(newEvent);
					break;
				default: alert("error");
		}
		
		if (category == currentCategory) { // draw new event to current window
			var x; var y; var cont;
			
			do {
					x = Math.random()*500 + 50;
					y = Math.random()*650 + 50;
					cont = true;
				
					for (j in currentBubbles) {
						if (distBetweenPoints(x, y, currentBubbles[j].x, currentBubbles[j].y) < 70) {
							cont= false;
						}
					}
				} while (!cont);
				
			var bubble = new Bubble(x, y, newEvent);
			
			var element = document.getElementById('canvas');
			var context = element.getContext('2d');
			
			bubble.draw(context);
			currentBubbles.push(bubble);
		}
	}
}