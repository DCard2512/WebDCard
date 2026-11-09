var $ = function(id){
    return document.getElementById(id);
}

var calculateMPG = function(m,g){
    var mpg = m/g;
    mpg = mpg.toFixed(1);
    return mpg;
}

var processEntries = function(){
    var miles = parseFloat($("milesdriven").value);
    var gallons = parseInt( $("ngallons").value);

    if(isNaN(miles) || isNaN(gallons)){
        alert("One or more entries is not a number.");
    }
    else if (miles <= 0 || gallons <= 0){
        alert("One or more entries is invalid.");
    }
    else{
        $(milespergallon.value = calculateMPG(miles,gallons));
    }
}

function display(){
    $("milespergallon").innerHTML = processEntries;
}