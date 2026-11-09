var canvas;
var context;

//TASK 2: REPRESENTATION OF A BEE
var bee; //IMAGE
var beeObj; //DATA OBJECT
var beeCount = 15;

var beeArray = [];

//TASK 3: LISTEN FOR THE ONLOAD EVENT: GAME WINDOW LOADS
window.onload = init;

//**********************************************
// Trigger init function when the page has loaded
function init() {
    //TASK 1: CREATE THE CANVAS REFERENCE AND CONTEXT
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;

    for (var i = 0; i < beeCount; i++) {
        beeObj = new Bee(i * 3);
        beeArray.push(beeObj);
        context.drawImage(beeObj.bee, beeObj.x, beeObj.y, beeObj.diameter, beeObj.diameter);

    }
    /*TASK 2: CREATE THE BEE
    beeObj = new Bee(100);
    context.drawImage(beeObj.bee, beeObj.x, beeObj.y, beeObj.diameter, beeObj.diameter);
    */
    //TASK 3: REGISTER A MOUSE EVENT: mousemove
    canvas.addEventListener("mousemove", followFinger, false);

    // TASK 4: REQUEST AN ANIMATION FRAME
    window.requestAnimationFrame(gameLoop);
}



function followFinger(e) {
    //TASK 1: USE THE MOUSE EVENT INTERFACE TO GET THE CURSOR (FINGER) POSITION
    //NOTE: offsetX property returns the xy-coordinate of the mouse pointer.
    var cursor = { x: e.offsetX, y: e.offsetY };

    for(var i = 0; i < beeCount; i++){
        beeArray[i].targetX = cursor.x;
        beeArray[i].targetY = cursor.y;
    }
    
}

//*******************************************

function gameLoop() {
    // TASK 1: UPDATE THE GAME OBJECT
    for(var i = 0; i < beeCount; i++)
        beeArray[i].update();

    // TASK 2: PERFORM THE DRAWING OPERATION
    draw();

    //TASK 3: REQUEST ANOTHER GAME LOOP IN THE ANIMATION
    window.requestAnimationFrame(gameLoop);
}


function draw() {
    // TASK 1: CLEAR THE ENTIRE CANVAS
    context.clearRect(0, 0, canvas.width, canvas.height);

    //TASK 2: DRAW THE BEE
    for(var i = 0; i < beeCount; i++)
        context.drawImage(beeArray[i].bee, beeArray[i].x, beeArray[i].y, beeArray[i].diameter, beeArray[i].diameter);

}