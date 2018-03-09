var clear = document.getElementById("clear");
var stop = document.getElementById("stop");
var svg = document.getElementById("svg");

var id;

//for dvd

var clearCallback = function(e){
    svg.innerHTML = "";
};

var stopCallback = function(e){
    clearInterval(id);
};


var dvdCallback = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var diffX, diffY;
    diffX = 2;
    diffY = 1;

    var run = function(){
	clearCallback();
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 10);
	svg.appendChild(c);
	if (x <= 0){
	    diffX = 2;
	}
	else if (x >= parseInt(svg.getAttribute("width"))){
	    diffX = -2;
	}
	if (y <= 0){
	    diffY = 1;
	}
	else if (y >= parseInt(svg.getAttribute("height"))){
	    diffY = -1;
	}
	x += diffX;
	y += diffY;
    };
    id = setInterval(run, 10);
};

clear.addEventListener("click", clearCallback);
stop.addEventListener("click", stopCallback);
svg.addEventListener("click", dvdCallback);
