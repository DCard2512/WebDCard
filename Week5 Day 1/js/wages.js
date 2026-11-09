function display(){
    var mRate = document.getElementById("rate").value;
    var mHours = document.getElementById("hours").value;

    var normal;
    var overtime;
    var sumTotal;

    if(mHours>40){
        normal = 40 * mRate;
        overtime = (mHours - 40) * (mRate*1.5);
    }
    else{
        normal = mHours * mRate;
        overtime = 0;
    }

    sumTotal = normal + overtime;

    document.getElementById("normalHrsDisplay").innerHTML = '$' + normal.toFixed(2);
    document.getElementById("overtimeDisplay").innerHTML = '$' + overtime.toFixed(2);
    document.getElementById("totalDisplay").innerHTML = '$' + sumTotal.toFixed(2);

}