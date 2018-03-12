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

    var speed = [-2, -1, 1, 2];
    
    var diffX = speed[Math.floor(Math.random() * 4)];
    var diffY = speed[Math.floor(Math.random() * 4)];
    
    var c = makeCircle();
    var x = Number(c.getAttribute("cx"));
    var y = Number(c.getAttribute("cy"));
    
    var run = function(){
	//clearCallback();
	console.log(x);
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
stop.addEventListener("click", stopCallback);
svg.addEventListener("click", dvdCallback);
