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

var makeCircle = function(e){
    var x = Math.random() * 500;
    var y = Math.random() * 500;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    svg.appendChild(c);
    return c;
}

var dvdCallback = function(e){

    var velocity = [-1, 1];
    
    var diffX = velocity[Math.floor(Math.random() * 2)] * Math.random() * 3;
    var diffY = velocity[Math.floor(Math.random() * 2)] * Math.random() * 3;
    
    var c = makeCircle();
    var x = Number(c.getAttribute("cx"));
    var y = Number(c.getAttribute("cy"));
    
    var run = function(){
	if (x <= 0){
	    diffX*= -1;
	}
	else if (x >= parseInt(svg.getAttribute("width"))){
	    diffX*= -1;
	}
	if (y <= 0){
	    diffY*= -1;
	}
	else if (y >= parseInt(svg.getAttribute("height"))){
	    diffY*= -1;
	}
	x += diffX;
	y += diffY;
	c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    };
    id = setInterval(run, 5);
};

clear.addEventListener("click", clearCallback);
svg.addEventListener("click", dvdCallback);
