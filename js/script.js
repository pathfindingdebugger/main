//Created by surayezrahman on 23/8/17.


var sampleText = "Sample text here";
var sampleArray = ['ab','3e', '232'];
var sampleJSON = '{ "algorithms" : [' +
    '{ "type":"astar" , "time":"4ms" },' +
    '{ "type":"jp" , "time":"2ms" },' +
    '{ "type":"search" , "time":"10ms" } ]}';


var obj = JSON.parse(sampleJSON);

$(document).ready(function () {
    $('.playbtn').click(function () {
        for(i=0;i<3;i++) {
            var newList = document.createElement("LI");                             // Create a <li> node
            var newItem = document.createTextNode(obj.algorithms[i].type);          // Create a text node
            newList.appendChild(newItem);                                           // Append the text to <li>

            $('.eventLog').append(newList);
        }
    });

    $('.stepbtn').click(function () {
        var newList = document.createElement("LI");                             // Create a <li> node
        var newItem = document.createTextNode(obj.algorithms[0].type);          // Create a text node
        newList.appendChild(newItem);                                           // Append the text to <li>

        $('.eventLog').append(newList);
    });
});