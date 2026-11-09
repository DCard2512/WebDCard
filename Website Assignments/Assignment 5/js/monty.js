var gameState = 'LEVEL1';

var prizeDoor;
var userSelected;
var doorRemoved;


function initialize() {
    gameState = 'LEVEL1';

    prizeDoor = Math.floor((Math.random() * 3) + 1);
    document.getElementById("status").innerHTML = "<br>Please pick a door.<br><br><br><br>";
}

function doorClick(choice) {
    if (gameState == 'LEVEL1') {
        userSelected = choice;
        moveLevel2();
        gameState = 'LEVEL2';
    }
    else if (gameState == 'LEVEL2') {
        if (choice == doorRemoved) {
            alert("You selected a removed door. Select from the two available.");
        }
        else if (choice == prizeDoor) {
            var instruction = "<br>Congratulations, you win a fabulous car!!<br><br>";
            document.images[prizeDoor - 1].src = "media/mhcar.png";
            instruction += "Click one of the doors to play again.<br><br>";
            document.getElementById("status").innerHTML = instruction;
            gameState = 'LEVEL3'
        }
        else if (choice != prizeDoor) {
            var instruction = "<br>Sorry, you lost the car. <br><br>";
            document.images[choice - 1].src = "media/mhlostCar.png";
            instruction += "Click one of the doors to play again.<br><br>";
            document.getElementById("status").innerHTML = instruction;
            gameState = 'LEVEL3'
        }
    }
    else if (gameState == 'LEVEL3') {
        document.images[0].src = "media/mhdoor1.png";
        document.images[1].src = "media/mhdoor2.png";
        document.images[2].src = "media/mhdoor3.png";
        initialize();
    }
}

function moveLevel2() {
    removeDoor();

    document.images[doorRemoved - 1].src = "media/mhnoDoor.png";
    var instruction = "<br>You selected door " + userSelected;
    instruction += "<br>Door " + doorRemoved + " does not have the car and has been removed. ";
    instruction += "<br>Would you like to stay with your original door? <br>Choose one of the two doors available.<br>";
    document.getElementById("status").innerHTML = instruction;

}

function removeDoor() {
    if (userSelected == 1) {
        if (prizeDoor == 1) {
            doorRemoved = 2;
        }
        else if (prizeDoor == 2) {
            doorRemoved = 3;
        }
        else if (prizeDoor == 3) {
            doorRemoved = 2;
        }
    }
    else if (userSelected == 2) {
        if (prizeDoor == 1) {
            doorRemoved = 3;
        }
        else if (prizeDoor == 2) {
            doorRemoved = 3;
        }
        else if (prizeDoor == 3) {
            doorRemoved = 1;
        }
    }
    else if (userSelected == 3) {
        if (prizeDoor == 1) {
            doorRemoved = 2;
        }
        else if (prizeDoor == 2) {
            doorRemoved = 1;
        }
        else if (prizeDoor == 3) {
            doorRemoved = 2;
        }
    }
}

