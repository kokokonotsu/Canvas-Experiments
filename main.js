function drawLine(){
var canvas = document.getElementById('mainCanvas');
var canvasLine = canvas.getContext("2d");
canvasLine.moveTo(0,0);
canvasLine.lineTo(400, 200);
canvasLine.stroke();
}
function drawCircle(){
var canvas = document.getElementById('mainCanvas');
var canvasLine = canvas.getContext("2d");
canvasLine.beginPath();
canvasLine.arc(150, 75, 20, 0, 10);
canvasLine.stroke();
}