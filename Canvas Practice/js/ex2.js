function drawIt(){
    var canvas = document.getElementById("canvasElement");
    var canvasContext = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;

    var rectSize = canvas.width / 9;
    var x = rectSize;
    var y = rectSize;

    for(var i = 1; i < 5; i++){
        for(var j = 1; j < 5; j++){
            canvasContext.beginPath();
            canvasContext.rect(x ,y ,rectSize ,rectSize);
            canvasContext.fillStyle = "pink";
            canvasContext.fill();
            canvasContext.stroke();

            x += rectSize * 2;
        }
        y += rectSize * 2;
        x = rectSize;
    }
}
