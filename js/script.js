//Created by surayezrahman on 23/8/17.


var sampleText = "Sample text here";
var sampleArray = ['ab','3e', '232'];
var currentEventNum = 0;
var eventItems;

$(document).ready(function () {
    $.getJSON( "temp.json", function( data ) {
        eventItems = [];
        $.each( data, function( key, val ) {
            eventItems.push(val);
            //Can be accessed by eventItems[0][i] in i loop
        });

    });

    $('.playbtn').click(function () {
        for(i=currentEventNum;i<=eventItems[0].length-1;i++) {
            var newList = document.createElement("LI");                             // Create a <li> node
            // Create a text node
            var newItem = document.createTextNode(eventItems[0][i].type + ", x= " + eventItems[0][i].x + ", y= " +eventItems[0][i].y + ", g= " +eventItems[0][i].g + ", h= " +eventItems[0][i].h);
            currentEventNum += 1;
            newList.appendChild(newItem);                                           // Append the text to <li>
        $('#openListConsole').append(newList);
        $('#eventList').append(newList);


        }

	var mydiv = $(".eventLog");
	mydiv.scrollTop(mydiv.prop("scrollHeight"));
    });

    $('.stepbtn').click(function () {
        var newList = document.createElement("LI");                             // Create a <li> node

        var newItem = document.createTextNode(eventItems[0][currentEventNum].type + ", x= " + eventItems[0][currentEventNum].x + ", y= " +eventItems[0][currentEventNum].y + ", g= " +eventItems[0][currentEventNum].g + ", h= " +eventItems[0][currentEventNum].h);          // Create a text node
        currentEventNum += 1;
        newList.appendChild(newItem);                                           // Append the text to <li>

        $('#eventList').append(newList);

	var mydiv = $(".eventLog");
	mydiv.scrollTop(mydiv.prop("scrollHeight"));
    });

});

