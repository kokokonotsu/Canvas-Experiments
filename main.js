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
//PogChamp Start//
var pogChampImage = document.createElement("img");
pogChampImage.onload = function() {
    canvasLine.save();
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
    canvasLine.save();
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