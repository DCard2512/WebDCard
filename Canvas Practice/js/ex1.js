function drawIt(){
    var canvas = document.getElementById("canvasElement");
    var canvasContext = canvas.getContext("2d");
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerWidth/2;

    drawLine(canvasContext, 5, 5, canvas.width/2, canvas.width/2);

    var centerx = canvas.width / 2;
    var centery = canvas.width / 2;
    var radius = canvas.width / 3;
    drawCircle(canvasContext, centerx, centery, radius);
}


function drawLine(canvasContext, lineStartX, lineStartY, lineEndX, lineEndY){
    canvasContext.beginPath();
    canvasContext.moveTo(lineStartX, lineStartY);
    canvasContext.lineTo(lineEndX, lineEndY);
    canvasContext.stroke();
}

function drawCircle(canvasContext, centerX, centerY, radius){
    var startAngleInRadians = 0;
    var endAngleInRadians = 2 * Math.PI;

    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, startAngleInRadians, endAngleInRadians);
    canvasContext.stroke();
}