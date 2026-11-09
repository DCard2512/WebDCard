todoList = [];


function initialize() {
    loadToDoList();
}

function loadToDoList() {
    //Task 1: Get number of key value pairs
    var length = localStorage.length;

    //Task 2: Create array to hold todo items
    var todoList = [];

    //Task 3: Collect each key item
    for (var i = 0; i < length; ++i) {
        todoList[i] = localStorage.key(i);
    }
    todoList.sort();

    //Task 4: Build HTML code
    buildHtmlCode();
}

function buildHtmlCode() {
    //TASK 1: INITIALIZE A VARIABLE TO HOLD THE MARKUP STRING
    var markup = "<ul>";
    //TASK 2: LOOP THROUGH THE TO-DO ITEMS AND BUILD HTML
    for (var i = 0; i < todoList.length; i++) {
        //TASK 3: ADD THE <li> AND A SPAN ELEMENT
        markup += "<li><span>" + todoList[i] + "</span>";
        //TASK 4: ADD THE DELETE BUTTON - INCLUDE AN ONCLICK EVENT
        markup += "<input id = '" + todoList[i] + "' type = 'button' " +
            "value = 'Delete' onclick = 'deleteTodo(id)'>";
        //TASK 5: CLOSE THE LI
        markup += "</li>";
    }
    //task 6: close the </UL>
    markup += "</ul>";

    //TASK 7: PLACE THE MARKUP STRING IN THE HTML DOCUMENT
    document.getElementById("searchList").innerHTML = markup;

}

function addItem() {
    //TASK 1: STORE THE KEY AS THE TODO TEXT
    var myKey = document.getElementById("todoTag");
    //TASK 2: STORE THE VALUE AS "To do item"
    var myValue = "To do item";
    //TASK 3: ADD THE KEY/VALUE PAIR TO LOCAL STORAGE.
    localStorage.setItem(myKey.value, myValue);

    //TASK 4: CLEAR THE TODO INPUT
    myKey.value = "";
    //TASK 5: RELOAD THE LIST
    loadToDoList();
}

function clearAllItems() {
    localStorage.clear();

    loadToDoList();
}

function deleteTodo(keyName) {
    //TASK 1: REMOVE THE KEY-VALUE PAIR FROM LOCAL STORAGE
    localStorage.removeItem(keyName);
    //TASK 2: RELOAD THE TODO ITEMS
    loadToDoList();
}