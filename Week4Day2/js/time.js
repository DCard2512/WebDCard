var date = new Date();

var dayNum = date.getDate();
var weekDay = date.getDay();
var hour = date.getHours();
var min = date.getMinutes();
var month = date.getMonth();
var year = date.getFullYear();
var ampm = hour < 12 ? "am":"pm";

if(hour > 12){
    hour -= 12;
}
if(min < 10){
    min = "0" + min;
}

switch(month){
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
       
}

switch(weekDay){
    case 0:
        weekDay = "Sunday";
        break;
    case 1:
        weekDay = "Monday";
        break;
    case 2:
        weekDay = "Tuesday";
        break;
    case 3:
        weekDay = "Wednesday";
        break;
    case 4:
        weekDay = "Thursday";
        break;
    case 5:
        weekDay = "Friday";
        break;
    case 6:
        weekDay = "Saturday";
        break;
}


document.write("<br>The year is " + year);
document.write("<br>It is ", dayNum,": Day ", weekDay, "of", month," in the year", year);
document.write("<br>The time is ", hour, ": " < min,ampm);





