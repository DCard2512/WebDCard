function choseDoor(clickedCell) {
    if (gameState == 'LEVEL1') {
        userSelected = clickedCell;
        moveLevel2();
        gameState = 'LEVEL2';
    }
    else if (gameState == 'LEVEL2') {
        if (clickedCell == doorRemoved) {
            alert("You selected a removed door. Select from the two available.")
        }
        else if (clickedCell == prizeDoor) {
            var instruction = "<br>Congratulations, you win a fabulous car!!<br><br>";
            document.images[prizeDoor - 1].src = "images/car.png";
            instruction += "Click one of the doors to play again.<br><br>";
            document.getElementById("status").innerHTML = instruction;
            gameState = 'LEVEL3'
        }
        else if (clickedCell != prizeDoor) {
            var instruction = "<br>Sorry, you lost the car. <br><br>";
            document.images[clickedCell - 1].src = "images/lostCar.png";
            instruction += "Click one of the doors to play again.<br><br>";
            document.getElementById("status").innerHTML = instruction;
            gameState = 'LEVEL3'
        }
    }
    else if (gameState == 'LEVEL3') {
        document.images[0].src = "images/door1.png";
        document.images[1].src = "images/door2.png";
        document.images[2].src = "images/door3.png";
        initialize();
    }
}