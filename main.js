
function drawLine(){
var canvas = document.getElementById('mainCanvas');
var canvasLine = canvas.getContext("2d");
let gradient = canvasLine.createLinearGradient(0,0,200,0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");

canvasLine.fillStyle=gradient;
canvasLine.fillRect(0, 0, 400, 200);

canvasLine.moveTo(0,0);
canvasLine.lineTo(400, 200);
canvasLine.stroke();
}
function drawCircle(){
var canvas = document.getElementById('mainCanvas');
var canvasLine = canvas.getContext("2d");
var canvasImage = document.getElementById("canvasImage");
let canvasPattern = canvasLine.createPattern(canvasImage, 'no-repeat');
let gradient = canvasLine.createRadialGradient(100,50,5,100,70,50);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "white");

canvasLine.fillStyle=gradient;
canvasLine.fillRect(0, 0, 400, 200);

//Creates Circle on-top of gradient;
canvasLine.beginPath();
canvasLine.arc(120, 100, 50, 0, 2*Math.PI/*Or Integer 20*/); 
canvasLine.stroke();

//Fills circle with 'canvasPattern' pattern// 
canvasLine.fillStyle=canvasPattern; 
canvasLine.fill();
}