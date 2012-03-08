var context;

// global vars to hold data for events and bubbles across category
var currentBubbles;
var currentCategory;
var currentEventList;

var abubble;

var eventInfo1 = new Array();
var eventInfo2 = new Array();
var eventInfo3 = new Array();
var eventInfo4 = new Array();
var eventInfo5 = new Array();
var myEvents = new Array();
// just set some preset events, although in reality this would draw from some database
var event1 = new Event("github training", "03/06/12", "12:00 PM", "learn github so you can program more efficiently! @ tech m234213 ", false);
var event2 = new Event("EECS 330 Study", "03/07/12", "1:00 PM", "Come study for the EECS 330 final with us! Free food! =/ MAIN LIBS ROOM 5", true);
var event3 = new Event("chess club meeting", "03/08/12", "12:00 AM", "Informational meeting about the best and coolest team at Northwestern, Tech LR4", false);
var event4 = new Event("Design Comp", "03/09/12", "3:00 PM", "when does the narwhal bacon?", true);
var event5 = new Event("Math Tutoring", "03/06/24", "12:00 PM", "I can teach you all the things! @Your House", true);
var event6 = new Event("Engineering Stuffs", "05/16/12", "12:00 PM", "Build robots, drink milk, get women @ Ford ITW-3450", true);
var event7 = new Event("SPG Improv Workshop", "07/10/25", "3:30 AM", "I don't really know what this event is since I stole it from Plan-it-purple", false);
var event8 = new Event("Indoor Writing", "10/14/90", "5:00 AM", "Finish your essays here, it's indoors, safe, and fun. Snacks included, LOCATION: indoors, why did the makers of this site forget this?", true);
eventInfo1.push(event1);
eventInfo1.push(event2);
eventInfo1.push(event3);
eventInfo1.push(event4);
eventInfo1.push(event5);
eventInfo1.push(event6);
eventInfo1.push(event7);
eventInfo1.push(event8);

var event9 = new Event("Lax Bros", "03/06/12", "12:00 PM", "Lax it up with us dude!", false);
var event10 = new Event("1v1 basketball", "03/06/12", "12:00 PM", "Bobb courts, see you there", false);
var event11 = new Event("Running in place", "03/06/12", "12:00 PM", "location: wherever you are", false);
var event12 = new Event("Standing up", "03/06/12", "12:00 PM", "Pretty much self explanatory", false);
var event13 = new Event("Frisbee", "03/06/12", "12:00 PM", "Come to Long Field and play with us!", false);
var event14 = new Event("football", "03/06/12", "12:00 PM", "Ryan Field, be there", false);
var event15 = new Event("Mud wrestlin", "03/06/12", "12:00 PM", "A b c d e f g h i j k l m n o p q r s t u  v w x y z", false);
var event16 = new Event("Touch Soccer", "03/06/12", "12:00 PM", "Soccer but more safe", false);
var event17 = new Event("volleyball", "03/06/12", "12:00 PM", "Northwestern beaches", false);
var event18 = new Event("Freeze tag", "03/06/12", "12:00 PM", "Tag but with freezing", false);
eventInfo2.push(event9);
eventInfo2.push(event10);
eventInfo2.push(event11);
eventInfo2.push(event12);
eventInfo2.push(event13);
eventInfo2.push(event14);
eventInfo2.push(event15);
eventInfo2.push(event16);
eventInfo2.push(event17);
eventInfo2.push(event18);

var event19 = new Event("Band", "03/06/12", "12:00 AM", "generic description goes here", false);
var event20 = new Event("Guitar lessons", "03/06/12", "12:00 AM", "generic description goes here", false);
var event21 = new Event("banjo duel", "03/06/12", "12:00 AM", "generic description goes here", false);
var event22 = new Event("double bass", "03/06/12", "12:00 AM", "generic description goes here", false);
var event23 = new Event("concert", "03/06/12", "12:00 AM", "generic description goes here", true);
var event24 = new Event("the flute and you", "03/06/12", "12:00 AM", "generic description goes here", false);
var event25 = new Event("acoustics", "03/06/12", "12:00 AM", "generic description goes here", false);
var event26 = new Event("guitar hero", "03/06/12", "12:00 AM", "generic description goes here", false);
eventInfo3.push(event19);
eventInfo3.push(event20);
eventInfo3.push(event21);
eventInfo3.push(event22);
eventInfo3.push(event23);
eventInfo3.push(event24);
eventInfo3.push(event25);
eventInfo3.push(event26);

var event27 = new Event("Marley & You", "03/06/12", "12:00 AM", "generic description goes here", false);
var event28 = new Event("Rush Hour 4", "03/06/12", "12:00 AM", "generic description goes here", false);
var event29 = new Event("Da Ali G Show", "03/06/12", "12:00 AM", "generic description goes here", false);
var event30 = new Event("Wicked", "03/06/12", "12:00 AM", "generic description goes here", false);
var event31 = new Event("Ballet", "03/06/12", "12:00 AM", "generic description goes here", false);
eventInfo4.push(event27);
eventInfo4.push(event28);
eventInfo4.push(event29);
eventInfo4.push(event30);
eventInfo4.push(event31);

var event32 = new Event("Ham Social", "03/06/12", "12:00 AM", "BYOH....all kinds of ham!", false);
var event33 = new Event("Muppeteering", "03/06/12", "12:00 AM", "generic description goes here", false);
var event34 = new Event("Free food", "03/06/12", "12:00 AM", "generic description goes here", true);
var event35 = new Event("Forging checks", "03/06/12", "12:00 AM", "generic description goes here", false);
var event36 = new Event("Pokemon party", "03/06/12", "12:00 AM", "generic description goes here", false);
var event37 = new Event("Bieberfest", "03/06/12", "12:00 AM", "generic description goes here", false);
var event38 = new Event("bowtying", "03/06/12", "12:00 AM", "generic description goes here", false);
var event39 = new Event("Star Trek Convention", "03/06/12", "12:00 AM", "generic description goes here", false);
var event40 = new Event("shirt swap", "03/06/12", "12:00 AM", "generic description goes here", false);
var event41 = new Event("canadian tuxedos", "03/06/12", "12:00 AM", "bring your jeans", false);
var event42 = new Event("Halo Bro", "03/06/12", "12:00 AM", "brooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo", false);
eventInfo5.push(event32);
eventInfo5.push(event33);
eventInfo5.push(event34);
eventInfo5.push(event35);
eventInfo5.push(event36);
eventInfo5.push(event37);
eventInfo5.push(event38);
eventInfo5.push(event39);
eventInfo5.push(event40);
eventInfo5.push(event41);
eventInfo5.push(event42);


// global vars for interactivity mode and which bubble is enlarged for mouse click event handler
var interactiveMode = true;
var enlargedBubble;

// radius for bubbles
var smallRad = 60;
var largeRad = 250;

// coords for middle of canvas
var xmid = 511;
var ymid = 250;

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
				context.fillText(this.event.name.substring(0,15), xmid, ymid-200);
				context.fillText("Date:", xmid-120, ymid-150);
				context.fillText(this.event.date.substring(0,15), xmid-50, ymid-150);
				context.fillText("Time:", xmid+50, ymid-150);
				context.fillText(this.event.time.substring(0,15), xmid+120, ymid-150);
				context.fillText("Description:", xmid, ymid-100);
				context.fillText(this.event.descrip.substring(0,50), xmid, ymid-50);
				context.fillText(this.event.descrip.substring(50,100), xmid, ymid-25);
				context.fillText(this.event.descrip.substring(100,150), xmid, ymid);
				context.fillText(this.event.descrip.substring(150,200), xmid, ymid+25);
				context.fillText(this.event.descrip.substring(200,250), xmid, ymid+50);
				context.fillText("Add to My Events", 430, 415);
				context.fillText("Pop Bubble", 610, 415);
				if (this.event.food) {
					context.fillText("*Food will be provided", xmid-130, ymid+120);
					}
				var ctx = canvas.getContext('2d');
				ctx.fillStyle= "rgba(0, 0, 0, .2)";
				ctx.fillRect(370,400,120,30);  
				ctx.fillRect(550,400,120,30); 
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
		
		}
		interactiveMode = false;
	}
	else { // we have an enlarged bubble, if we click outside it return it to normal and reenter interactive mode
		var bubble = enlargedBubble; // grab our global
		
		if ( withinBubble(bubble, x, y, interactiveMode) ) {
			if ( y <= 430 && y >= 400 )  { // possibly within one of the two buttons
				if ( x <= 490 && x >= 370 ) { // within add to events button
					saveBubble(bubble);
				}
				else if ( x <= 770 && x >= 550) { // within pop button
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
	
	for (var i = 0; i < 500; i++) {}
	
	clearInterval();
	
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

function animateBubbles() {
	for (var j = 0; j < abubble.children.length ; j++) {
		abubble.children[j].x += abubble.children[j].vx;
		abubble.children[j].y += abubble.children[j].vy;
		abubble.children[j].vx /= 1.05;
		abubble.children[j].vy += 0.5;
		abubble.children[j].size /= 1.05;
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
		case "myEvents":
			currentEventList = myEvents;
			setupByCategory(myEvents, element);
			break;
		case "academics":
			currentEventList = eventInfo1;
			setupByCategory(eventInfo1, element);
			break;
		case "athletics":
			currentEventList = eventInfo2;
			setupByCategory(eventInfo2, element);
			break;
		case "music":
			currentEventList = eventInfo3;
			setupByCategory(eventInfo3, element);
			break;
		case "theatre":
			currentEventList = eventInfo4;
			setupByCategory(eventInfo4, element);
			break;
		case "miscellaneous":
			currentEventList = eventInfo5;
			setupByCategory(eventInfo5, element);
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
					x = Math.random()*900 + 50;
					y = Math.random()*400 + 50;
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
		
		var category = "";
		for (var i = 0; i < f.category.length; i++) {
			if (f.category[i].checked) {
				category = f.category[i].value;
			}
		}
		if (category == "") {
			alert('Please choose a category for the event.');
		}
		
		f.style.display = 'none';	// hide form

		var newEvent = new Event(n, a, t, d, food);
		// use category selected to put into a category's event list
		switch (category) {	
				case "academics":
					eventInfo1.push(newEvent);
					break;
				case "athletics":
					eventInfo2.push(newEvent);
					break;
				case "music":
					eventInfo3.push(newEvent);
					break;
				case "theatre":
					eventInfo4.push(newEvent);
					break;
				case "miscellaneous":
					eventInfo5.push(newEvent);
					break;
				default: alert("error");
		}
		
		if (category == currentCategory) { // draw new event to current window
			var x; var y; var cont;
			
			do {
					x = Math.random()*900 + 50;
					y = Math.random()*400 + 50;
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