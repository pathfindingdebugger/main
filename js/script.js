//Created by surayezrahman on 23/8/17.

var currentEventNum = 0;
var eventItems;
var openList = [];
var closedList = [];

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
            var eventli = document.createElement("LI");
            var newMainItem = document.createTextNode(eventItems[0][i].type + ", x= " + eventItems[0][i].x + ", y= " +eventItems[0][i].y + ", g= " +eventItems[0][i].g + ", h= " +eventItems[0][i].h);
            currentEventNum += 1;

            if(eventItems[0][i].type == 'expanding'){
                var openListli = document.createElement("LI");
                openList.push(eventItems[0][i].x);
                var openListItem = document.createTextNode("["+openList+"]");
                openListli.appendChild(openListItem)
            }

            if(eventItems[0][i].type == 'closing'){
                openList.pop(eventItems[0][i].x);
                var closedListli = document.createElement("LI");
                closedList.push(eventItems[0][i].x);
                var closedListItem = document.createTextNode("["+closedList+"]");
                closedListli.appendChild(closedListItem)
            }

            // Append the text to <li>
            eventli.appendChild(newMainItem);

        $('#openListConsole').append(openListli);
        $('#closedListConsole').append(closedListli);
        $('#eventList').append(eventli);
        }

	var mydiv = $(".eventLog");
	mydiv.scrollTop(mydiv.prop("scrollHeight"));
    });

    $('.stepbtn').click(function () {
        var eventli = document.createElement("LI");                             // Create a <li> node
        var newMainItem = document.createTextNode(eventItems[0][currentEventNum].type + ", x= " + eventItems[0][currentEventNum].x + ", y= " +eventItems[0][currentEventNum].y + ", g= " +eventItems[0][currentEventNum].g + ", h= " +eventItems[0][currentEventNum].h);          // Create a text node
        currentEventNum += 1;
            if (eventItems[0][currentEventNum].type == 'expanding') {
                var openListli = document.createElement("LI");
                openList.push(eventItems[0][currentEventNum].x);
                var openListItem = document.createTextNode("[" + openList + "]");
                openListli.appendChild(openListItem)
            }

            if (eventItems[0][currentEventNum].type == 'closing') {
                openList.pop(eventItems[0][currentEventNum].x);
                var closedListli = document.createElement("LI");
                closedList.push(eventItems[0][i].x);
                var closedListItem = document.createTextNode("[" + closedList + "]");
                closedListli.appendChild(closedListItem)
            }
            // Append the text to <li>
            eventli.appendChild(newMainItem);

            $('#openListConsole').append(openListli);
            $('#closedListConsole').append(closedListli);
            $('#eventList').append(eventli);

            var mydiv = $(".eventLog");
            mydiv.scrollTop(mydiv.prop("scrollHeight"));
        });

});

