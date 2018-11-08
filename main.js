
function drawLine(){
canvasLine.moveTo(0,0);
canvasLine.lineTo(400, 200);
canvasLine.stroke();
}
function drawCircle(){
var canvas = document.getElementById('mainCanvas');
var canvasLine = canvas.getContext("2d");

let gradient = canvasLine.createLinearGradient(0,0,200,0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");

canvasLine.fillStyle=gradient;
canvasLine.fillRect(0, 0, 400, 200);

canvasLine.beginPath();
canvasLine.arc(150, 75, 40, 0, 20);
canvasLine.stroke();
}