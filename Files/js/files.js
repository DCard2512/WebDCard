var textData = '';

function initialize() {
    var fileSelector = document.getElementById("myFile");

    fileSelector.addEventListener('change', function () {
        var fileReader = new FileReader();
        var file = this.files[0];
        fileReader.onload = function () {
            textData = fileReader.result;
        }
        fileReader.readAsText(file);
    });
}

function getWords() {
    var wordHashMap = new Map();

    textData.trim();

    wordArray = textData.split(' ');

    for (var i = 0; i < wordArray.length; i++) {
        var letter = wordArray[i].charAt(0);
        if (letter == 'T' || letter == 't') {
            if (!wordHashMap.has(wordArray[i])) {
                wordHashMap.set(wordArray[i], 1);
            }
            else {
                var value = wordHashMap.get(wordArray[i]) + 1;
                wordHashMap.set(wordArray[i], value);
            }
        }
    }

    var output = "<ol>";

    for (var [key, value] of wordHashMap.entries()) {
        output += '<li>' + key + " = " + value + '</li>';
    }
    output += "</ol>";
    document.getElementById("myDisplay").innerHTML = output;
}