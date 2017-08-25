//Created by surayezrahman on 23/8/17.

var currentEventNum = 0;
var eventItems;
var openList = [];
var closedList = [];
var dataReceived;

$(document).ready(function () {
    $('#dataLoader').click(function(){
        var ref = firebase.database().ref("/");
        ref.once("value").then(function (snapshot) {
            dataReceived = snapshot.val();
            dataReceived = dataReceived.data;
            if(dataReceived!=null) {
                window.alert("Data is loaded. Build to show data");
            }
        });
    });

    $('.buildbtn').click(function () {
        if(dataReceived!=null) {
            for (i = currentEventNum; i <= dataReceived.length - 1; i++) {
                var eventli = document.createElement("LI");
                var newMainItem = document.createTextNode(dataReceived[i].type + ", x= " + dataReceived[i].x + ", y= " + dataReceived[i].y + ", g= " + dataReceived[i].g + ", h= " + dataReceived[i].h);
                currentEventNum += 1;

                if (dataReceived[i].type == 'expanding') {
                    var openListli = document.createElement("LI");
                    openList.push(dataReceived[i].x);
                    var openListItem = document.createTextNode("[" + openList + "]");
                    openListli.appendChild(openListItem)
                }

                if (dataReceived[i].type == 'closing') {
                    openList.pop(dataReceived[i].x);
                    var closedListli = document.createElement("LI");
                    closedList.push(dataReceived[i].x);
                    var closedListItem = document.createTextNode("[" + closedList + "]");
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
        }else{
            window.alert("No data loaded. Please select file and load data.")
        }
    });

    $('.stepbtn').click(function () {
        var eventli = document.createElement("LI");                             // Create a <li> node
        if(currentEventNum<=dataReceived.length) {
            var newMainItem = document.createTextNode(dataReceived[currentEventNum].type + ", x= " + dataReceived[currentEventNum].x + ", y= " + dataReceived[currentEventNum].y + ", g= " + dataReceived[currentEventNum].g + ", h= " + dataReceived[currentEventNum].h);          // Create a text node
            currentEventNum += 1;
            if (dataReceived[currentEventNum].type == 'expanding') {
                var openListli = document.createElement("LI");
                openList.push(dataReceived[currentEventNum].x);
                var openListItem = document.createTextNode("[" + openList + "]");
                openListli.appendChild(openListItem)
            }

            if (dataReceived[currentEventNum].type == 'closing') {
                openList.pop(dataReceived[currentEventNum].x);
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

        }
    });

    $("#inputFile").click(function(){
        $.getJSON( "temp.json", function( data ) {
            eventItems = [];
            $.each(data, function (key, val) {
                eventItems.push(val);
                //Can be accessed by eventItems[0][i] in i loop
            });
        firebase.database().ref('/').set({
            data : eventItems[0]
            });
        });
    })

});



