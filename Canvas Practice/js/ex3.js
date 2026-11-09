function drawIt(){
    var canvas = document.getElementById("canvasElement");
    var canvasContext = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth * 2;

    var centerx = canvas.width / 2 - 20;
    var centery = canvas.width / 2;
    var radius = canvas.width / 2 - 20;
    var nRings = 3;

    var greenAmt = document.getElementById("nGreen").value;
    for(var i = 0; i < nRings; i++){
        canvasContext.fillStyle = "rgb(0," + (greenAmt) + ",0";
        drawCircle(canvasContext,centerx,centery, radius);
        radius -= 85;
        greenAmt -= 25;
    }
}

function drawCircle(canvasContext, centerX, centerY, radius){
    var startAngleInRadians = 0;
    var endAngleInRadians = 2 * Math.PI;

    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY, radius, startAngleInRadians, endAngleInRadians);
    canvasContext.fill();
}