var copyText;
var beginList;
var advancedList;
var msg;
var iDate;

function start(){
    msg = "";
    copyText = "";
    document.getElementById("image").innerHTML = "";
    document.getElementById("outputText").innerHTML = "";
    beginList = ["rotten peeling", "happy dog", "toe crusher", "sugar steak", "dirty home", "apple core"];
    advancedList = ["%$ because data play aarggh", "d3ad bo0ok !boil", "3xit ribss ta6ght #*", "supercalifragilisticexpialidocious"];
    iDate = Date.now();
    var input = document.querySelector('input[type=radio]:checked').id; //or document.getElementById("beginner").onclick;

    if(input == "beginner"){
        beginner();
    }
    else if(input == "advanced"){
        advanced();
    }
    
}

function beginner(){
    var rnd = Math.floor(Math.random() * beginList.length);
    copyText = beginList[rnd];
    msg += copyText + "<br>";
    document.getElementById("copyTextMsg").innerHTML = "&nbsp" + msg;
}

function advanced(){
    var rnd = Math.floor(Math.random() * advancedList.length);
    copyText = advancedList[rnd];
    msg += copyText + "<br>";
    document.getElementById("copyTextMsg").innerHTML = msg;
}

function endTime(){
    var sec = Date.now() - iDate;
    sec = (sec / 1000);
    sec = sec.toFixed(2);
    var userText = document.getElementById("typingTest").value;
    msg = "";
    
    if(userText == copyText){
        var img = '<img src="media/thumbsUpEmoji.png" width=150>';
        document.getElementById("image").innerHTML = img;
        msg = "<br>Goodjob! You typed the text correctly!" +
        "<br>Your time was " + sec + " seconds";
        document.getElementById("outputText").innerHTML = msg;
    }
    else if( userText != copyText){
        var img = '<img src="media/thumbsDownEmoji.webp" width=150>';
        document.getElementById("image").innerHTML = img;
        msg = 'Sorry you entered the wrong text. <br>You should have typed "' +
        copyText + '" <br>You typed "' + userText + '"';
        document.getElementById("outputText").innerHTML = msg;
    }

    document.getElementById("typingTest").value = "";

   
}