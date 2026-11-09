var fName;
var text;
var img;

function submit(){
    fName = "";
    text = "";
    fName = document.getElementById("name").value;
    fName = fName.toLowerCase();

    
    if(fName == "amanda"){
        text += "Hello Amanda,\nThis is Diego (aka your boyfriend). Well I made this because I " +
        "love you baby! I just wanted to show you something that I love and I hope that you love what I did.\n";
        text += '<br><button onclick="love()"> Click here if you would like to see! </button>';
        document.getElementById("outputText").innerHTML = "<div id='txt'><h2>" + text + "</h2></div>";
    }
    else{
        text += "You are not the person I am looking for! \n" +
        "Please leave this page!";
        document.getElementById("outputText").innerHTML = text;
    }
}

function love(){
    var img1 = '<img src="media/IMG_5862.png" width="300">';
    var img3 = '<img src="media/IMG_7928.png" width="300">';
    var img4 = '<img src="media/IMG_7947.png" width="300">';
    var img5 = '<img src="media/IMG_7950.png" width="300">';
    document.getElementById("images").innerHTML = img1 + img3 + img4 + img5;

    var loveText = "<br>I love you so much baby! \nYou are my world and you mean everything to me!" + 
    "<br>( P.S. Might be corny but I hope you liked this! ;) <3 )"
    document.getElementById("afterImg").innerHTML = "<div id='txt'><h2>" + loveText + "</h2></div>";
}