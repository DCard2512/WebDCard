
function submitName() {
    //TASK 1: Collect HTML user input and store in a variable.
    var yname = document.getElementById("myname").value;

    //TASK 2: Create an XMLHttpRequest object
    var myXMLRequest = new XMLHttpRequest();

    //TASK 3: Specify the JS function to be executed when the server response is complete
    myXMLRequest.onload = displayPHPresults;

    //TASK 4: Send the XML request to a PHP file on the server
    //         argument is passed to the url (lab10c.php?q="+yname)
    myXMLRequest.open("POST", "lab10c.php?q=" + yname, true);
    myXMLRequest.send();
}


//DISPLAY THE RESULTS FROM THE XMLHttpRequest
function displayPHPresults() {
    var data = this.responseText;
    document.getElementById("message").innerHTML = data;
}
