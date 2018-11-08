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
function draw(){
var canvas = document.getElementById('mainCanvas');
var canvasLine = canvas.getContext("2d");
canvasLine.fillStyle="#00000030";
canvasLine.fillRect(10, 10, 50, 50);

canvasLine.fillStyle="#00000060";
canvasLine.fillRect(30, 30, 50, 50);

canvasLine.fillStyle="#00000030";
canvasLine.clearRect(20, 20, 25, 25);

canvasLine.fillStyle="#00000060";
canvasLine.fillRect(100, 20, 100, 100);

canvasLine.fillStyle="#00000030";
canvasLine.clearRect(120, 60, 60, 60);

canvasLine.strokeStyle="#00000060";
canvasLine.strokeRect(140, 80, 20, 40);

//Face Begin//
canvasLine.beginPath();
canvasLine.arc(250, 30, 20, 0, Math.PI*2), true; //Head Shape
canvasLine.moveTo(245, 20);
canvasLine.arc(240, 20, 5, 0, Math.PI*2, true); //Left Eye
canvasLine.moveTo(243, 20);
canvasLine.arc(241, 20, 2, 0, Math.PI*2, true); //Left Pupil 
canvasLine.moveTo(265, 20);
canvasLine.arc(260, 20, 5, 0, Math.PI*2, true); //Right Eye
canvasLine.moveTo(261, 20);
canvasLine.arc(259, 20, 2, 0, Math.PI*2, true); //Right Pupil
canvasLine.moveTo(260, 40);
canvasLine.arc(230, 40, 10, 0, -0.5, true); //Mouth
canvasLine.stroke();
//Face End//
//Body Start//
//Left Neck//
canvasLine.beginPath();
canvasLine.moveTo(248,50);
canvasLine.quadraticCurveTo(250, 60, 230, 60);
canvasLine.stroke();
//Left Shoulder//
canvasLine.beginPath();
canvasLine.moveTo(230, 60);
canvasLine.quadraticCurveTo(220, 60, 220, 70);
canvasLine.stroke();
//Left Outer-Arm//
canvasLine.beginPath();
canvasLine.moveTo(220, 70);
canvasLine.lineTo(220, 105);
canvasLine.stroke();
//Left Hand//
canvasLine.beginPath();
canvasLine.arc(225, 105, 5, 0, Math.PI);
canvasLine.stroke();
//Left Inner-Arm//
canvasLine.beginPath();
canvasLine.moveTo(230, 105);
canvasLine.lineTo(230, 75);
canvasLine.stroke();
//Left Arm-Pit//
canvasLine.beginPath();
canvasLine.arc(233, 75, 3, 0, Math.PI, true);
canvasLine.stroke();
//Left Torso//
canvasLine.beginPath();
canvasLine.moveTo(236, 75);
canvasLine.lineTo(236, 105);
canvasLine.stroke();
//Left Outer-Leg//
canvasLine.beginPath();
canvasLine.moveTo(236, 105);
canvasLine.lineTo(236, 140);
canvasLine.stroke();
//Left Shoe-Top//
canvasLine.beginPath();
canvasLine.moveTo(236, 140);
canvasLine.quadraticCurveTo(220, 135, 220, 145);
canvasLine.stroke();
//Left Shoe-Bottom//
canvasLine.beginPath();
canvasLine.moveTo(220, 145);
canvasLine.lineTo(250, 145);
canvasLine.stroke();
//Inner-Legs//
canvasLine.beginPath();
canvasLine.moveTo(250, 145);
canvasLine.lineTo(250, 110);
canvasLine.stroke();
//Right Shoe-Bottom//
canvasLine.beginPath();
canvasLine.moveTo(250, 145);
canvasLine.lineTo(280, 145);
canvasLine.stroke();
//Right Shoe-Top//
canvasLine.beginPath();
canvasLine.moveTo(280,145);
canvasLine.quadraticCurveTo(280, 135, 264, 140);
canvasLine.stroke();
//Right Outer-Leg//
canvasLine.beginPath();
canvasLine.moveTo(264, 140);
canvasLine.lineTo(264, 105);
canvasLine.stroke();
//Right Inner-Torso//
canvasLine.beginPath();
canvasLine.moveTo(264, 105);
canvasLine.lineTo(264, 75);
canvasLine.stroke();
//Right Arm-Pit//
canvasLine.beginPath();
canvasLine.arc(267, 75, 3, 0, Math.PI, true);
canvasLine.stroke();
//Right Inner-Arm//
canvasLine.beginPath();
canvasLine.moveTo(270, 75);
canvasLine.lineTo(270, 105);
canvasLine.stroke();
//Right Hand//
canvasLine.beginPath();
canvasLine.arc(275, 105, 5, 0, Math.PI);
canvasLine.stroke();
//Right Outer-Arm//
canvasLine.beginPath();
canvasLine.moveTo(280, 105);
canvasLine.lineTo(280, 70);
canvasLine.stroke();
//Right Shoulder//
canvasLine.beginPath();
canvasLine.moveTo(280, 70);
canvasLine.quadraticCurveTo(280, 60, 270, 60);
canvasLine.stroke();
//Right Neck//
canvasLine.beginPath();
canvasLine.moveTo(270, 60);
canvasLine.quadraticCurveTo(252, 60, 252, 50);
canvasLine.stroke();
//Body End//
//Attempt at Mouse-over Coordinates//
/*
var canvas = document.getElementById('mainCanvas');
function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(300, 180, 30, 20);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
  }
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    writeMessage(canvas, message);
  }, false);
*/
//End Attempt at Mouse-over Coordinates//
/*
//PogChamp Start//
var pogChampImage = document.createElement("img");
pogChampImage.onload = function() {
    canvasLine.strokeStyle="white";
    canvasLine.beginPath();
    canvasLine.moveTo(95, 100);
    canvasLine.lineTo(95, 150);
    canvasLine.closePath();
    canvasLine.stroke();
    canvasLine.beginPath();
    canvasLine.moveTo(95, 125);
    canvasLine.lineTo(120, 110);
    canvasLine.closePath();
    canvasLine.stroke();
    canvasLine.beginPath();
    canvasLine.moveTo(95, 125);
    canvasLine.lineTo(70, 110);
    canvasLine.closePath();
    canvasLine.stroke();
    canvasLine.closePath();
    canvasLine.drawImage(pogChampImage, 47, 45, 100, 80);
};
pogChampImage.src ='assets/pogChamp.png';
//PogChamp End//
//HL3 Start//
var hlImage = document.createElement("img");
hlImage.onload = function() {
    
    canvasLine.beginPath();
    canvasLine.arc(250, 60, 40, 0, Math.PI * 2, true);
    canvasLine.strokeStyle="orange";
    canvasLine.stroke();
    canvasLine.closePath();
    canvasLine.clip();
    canvasLine.drawImage(hlImage, 215, 25, 70, 70);
};
    hlImage.src = 'assets/Half_Life_3.png';
//HL3 End//
//let canvasPattern = canvasLine.createPattern(pogChampImage, 'no-repeat');
//let canvasHLPattern = canvasLine.createPattern(hlImage, 'no-repeat');
let gradient = canvasLine.createRadialGradient(250,110,20,250,50,50);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "black");

canvasLine.rect(0, 0, 400, 200);
canvasLine.fillStyle="black";
canvasLine.fill();

canvasLine.fillStyle=gradient;
canvasLine.fillRect(0, 0, 400, 200);

*/
//Creates Circle on-top of gradient;
/*canvasLine.beginPath();
canvasLine.arc(120, 100, 50, 0, 2*Math.PI/*Or Integer 20*); 
canvasLine.strokeStyle="white";
canvasLine.stroke();

//Fills circle with 'canvasPattern' pattern// 
canvasLine.fillStyle=canvasPattern; 
canvasLine.fill();

canvasLine.beginPath();
canvasLine.arc(250, 60, 40, 0, 2*Math.PI/*Or Integer 20*);
canvasLine.strokeStyle="orange";
canvasLine.stroke();
*/
}