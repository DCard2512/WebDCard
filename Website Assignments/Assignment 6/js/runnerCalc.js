var timeList = [];

function intialize(){

}

function calc(){
    var mi = parseFloat(document.getElementById("mi").value);
    var time = document.getElementById("time").value;

    //Splits the target pace into minutes and seconds
    var timeSplit = time.split(":");
    var minTarget = timeSplit[0]; //This gets the minutes in target pace
    var secTarget = timeSplit[1]; //This gets the seconds in target pace

    var m,s;

    for(var i = 1; i <= mi; i++){
        m = minTarget * i;
        s = secTarget * i;
        timeOutput(minTarget,secTarget, i);
    }

    document.write(timeList);   

}

function timeOutput(minute, second, i){
    var min = minute + (second / 60);
    var sec = second % 60;

    if(min > 59){
        var hr = min / 60;
        min = min % 60;
        timeList[i] = hr.toFixed() + ":" + min.toFixed() + ":" + sec.toFixed();
    }
    else{
        timeList[i] = min.toFixed() + ":" + sec.toFixed();
    }
}