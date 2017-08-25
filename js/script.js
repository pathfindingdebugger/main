//Created by surayezrahman on 23/8/17.


var sampleText = "Sample text here";
var sampleArray = ['ab','3e', '232'];
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
        for(i=0;i<=eventItems[0].length-1;i++) {
            var newList = document.createElement("LI");                             // Create a <li> node
            // Create a text node
            var newItem = document.createTextNode(eventItems[0][i].type + ", x= " + eventItems[0][i].x + ", y= " +eventItems[0][i].y + ", g= " +eventItems[0][i].g + ", h= " +eventItems[0][i].h);
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

