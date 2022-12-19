//card1
var c = document.getElementById("canvasCard1");
var ctx = c.getContext("2d");
const 
	gray = "#f5f7fa",
	grey = "#f0f2f5", 
	blue = "#4786ff", 
	red = "#fa607e",
	lightred = "#fedfe5",
	lightblue = "#d9e6fe";
	white = "#fff";



ctx.lineCap = "round";
ctx.lineWidth = 5;
ctx.strokeStyle = grey;

ctx.beginPath();
ctx.arc(125, 105, 55, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(125, 105, 85, 0, 2*Math.PI);
ctx.stroke();


ctx.strokeStyle = red;
ctx.beginPath();
ctx.arc(125, 105, 55, -.5*Math.PI, .7*Math.PI);
ctx.stroke();


ctx.strokeStyle = blue;
ctx.beginPath();
ctx.arc(125, 105, 85, -.5*Math.PI, 1.1*Math.PI);
ctx.stroke();


//card2

//draw horizontal lines
var c = document.getElementById("canvasCard2");
var ctx = c.getContext("2d");

ctx.lineCap = "square";
ctx.strokeStyle = grey;
ctx.lineWidth = 1;


for(var i = 1; i <= c.height + 80; i += (c.height + 80) / 4) {
	ctx.beginPath();
	ctx.moveTo(0, i);
	ctx.lineTo(720, i);
	ctx.stroke();
}

//draw ligthred circle
ctx.strokeStyle = lightred;
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(280.5, 184, 16, 0*Math.PI, 2*Math.PI);
ctx.stroke();

//draw ligthblue circle
ctx.strokeStyle = lightblue;
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(280.5, 114, 16, 0*Math.PI, 2*Math.PI);
ctx.stroke();

//draw tooltip
ctx.strokeStyle = "#e6e6e6";
ctx.lineWidth = 3;

var rectWidth = 140;
var rectHeight = 70;
var rectX = 211;
var rectY = 27;
var cornerRadius = 5;

//200 50
//240 80    +40 +30
//232 100   +32 +50

ctx.beginPath();
ctx.moveTo(rectX + cornerRadius, rectY);
ctx.lineTo(rectX + rectWidth - cornerRadius, rectY);
ctx.arcTo(rectX + rectWidth, rectY, 
		  rectX + rectWidth, rectY + cornerRadius,
		  cornerRadius);
ctx.lineTo(rectX + rectWidth, rectY + rectHeight - cornerRadius);
ctx.arcTo(rectX + rectWidth, rectY + rectHeight,
		  rectX + rectWidth - cornerRadius, rectY + rectHeight,
		  cornerRadius);
cornerRadius += 2;
ctx.lineTo(rectX + cornerRadius + rectWidth/2 , rectY + rectHeight);
ctx.lineTo(rectX + rectWidth/2, rectY + rectHeight + cornerRadius);
ctx.lineTo(rectX + rectWidth/2 - cornerRadius, rectY + rectHeight);
ctx.lineTo(rectX + cornerRadius, rectY + rectHeight);
cornerRadius -= 2;
ctx.arcTo(rectX, rectY + rectHeight,
		  rectX, rectY + rectHeight - cornerRadius,
		  cornerRadius);
ctx.lineTo(rectX, rectY + cornerRadius);
ctx.arcTo(rectX, rectY,
		  rectX + cornerRadius, rectY,
		  cornerRadius);
ctx.fillStyle = white;
ctx.stroke();
//shadow
ctx.shadowColor = "#eee";
ctx.shadowBlur = 60;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;
ctx.fill();


//draw blue curve
ctx.strokeStyle = blue;
ctx.lineCap = "round";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(3, 230);
ctx.quadraticCurveTo(100, 235, 250, 130);
ctx.bezierCurveTo(290, 105, 350, 85, 500, 145);
ctx.bezierCurveTo(640, 180, 620, 10, 718, 40);
ctx.stroke();


//draw red curve
ctx.lineCap = "round";
ctx.strokeStyle = red;
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(3, 80);
ctx.bezierCurveTo(100, 50, 85, 200, 200, 200);
ctx.bezierCurveTo(240, 200, 340, 160, 410, 167);
ctx.bezierCurveTo(500, 170, 490, 220, 600, 235);
ctx.quadraticCurveTo(670, 240, 718, 200);
ctx.stroke();

//draw red circle
ctx.strokeStyle = red;
ctx.beginPath();
ctx.arc(280.5, 184, 5, 0*Math.PI, 2*Math.PI);
ctx.fillStyle = white;
ctx.fill();
ctx.stroke();

//draw blue circle
ctx.strokeStyle = blue;
ctx.beginPath();
ctx.arc(280.5, 114, 5, 0*Math.PI, 2*Math.PI);
ctx.fillStyle = white;
ctx.fill();
ctx.stroke();


//text
ctx.fillStyle = "#1b2437";
ctx.font = "600 16px Helvetica";
ctx.fillText("12 tasks", rectX+38, rectY+29);
ctx.font = "500 15px Helvetica";
ctx.fillStyle = "#adb3b8";
ctx.fillText("21/03/2016", rectX+32, rectY+50);



//card3
var c = document.getElementById("canvasCard3");
var ctx = c.getContext("2d");


ctx.lineCap = "round";
ctx.lineWidth = 3;

//gradient
var gradient = ctx.createLinearGradient(0,0,170,0);
gradient.addColorStop("0", "#4786ff");
gradient.addColorStop("1.0", "#fa607e");
ctx.strokeStyle = gradient;

//draw curve
ctx.beginPath();
ctx.moveTo(2, 43);
ctx.bezierCurveTo(25, 40, 15, 70, 60, 55);
ctx.bezierCurveTo(100, 45, 90, 85, 160, 80);

ctx.stroke();
