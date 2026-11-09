var $ = function(id){
    return document.getElementById(id);
}

function convert(){
    var val = parseInt($("conver").value);
    var conType = document.querySelector('input[id="conv"]:checked').value;
    var conversion;

    if(conType == "iCon"){
        //Conversions from Inch to Centimeters
        document.getElementById("convName").innerHTML = "Inches";
        conversion = val * 2.54;
        document.getElementById("conversions").innerHTML = val + " Inches converts to " + conversion.toFixed(1) + " Centimeters";
    }
    else{
        //Conversion from Centimeter to Inches
        document.getElementById("convName").innerHTML = "Centimeters";
        conversion = val / 2.54;
        document.getElementById("conversions").innerHTML = val + " Centimeters converts to " + conversion.toFixed(1) + " Inches";
    }

    
}