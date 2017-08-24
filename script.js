//Created by surayezrahman on 23/8/17.


var sampleText = "Sample text here";
var sampleArray = ['ab','3e', '232'];
var sampleJSON = '{ "expanding" : [' +
    '{ "type":"astar" , "node":"A" },' +
    '{ "type":"jp" , "node":"B" },' +
    '{ "type":"search" , "node":"C" } ]}';


var obj = JSON.parse(sampleJSON);

$(document).ready(function () {
	

    $('.playbtn').click(function () {
        for(i=0;i<3;i++) {
            var newList = document.createElement("LI");                             // Create a <li> node

            var newItem = document.createTextNode(obj.expanding[i].type);          // Create a text node
            newList.appendChild(newItem);                                           // Append the text to <li>

 	$('#eventList').append(newList);

        }

	var mydiv = $(".eventLog");
	mydiv.scrollTop(mydiv.prop("scrollHeight"));
    });

    $('.stepbtn').click(function () {
        var newList = document.createElement("LI");                             // Create a <li> node

        var newItem = document.createTextNode(obj.expanding[0].type);          // Create a text node
        newList.appendChild(newItem);                                           // Append the text to <li>

        $('#eventList').append(newList);

	var mydiv = $(".eventLog");
	mydiv.scrollTop(mydiv.prop("scrollHeight"));
    });

});
