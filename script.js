function init(){

const grid = $(".container")
const saveButton = document.getElementById('save-btn')
const inpValue = document.getElementById("eventText")

var today = moment().format("MMM Do, YYYY, h:mm:ss a");
$("#moment").text('Today is: ' + today);

var row = document.getElementById("addEvent")

let m = moment();
var hourPast = hourPast < m;
var hourNow = m;
var hourFuture = hourFuture < m;

// if currentTime > hourNow make background color gray

    //changes color but will not recognize the container

Array.from(rows).forEach(row => {
var hourNow = m;
console.log(hourNow)
console.log(m)
    function backgroundColorEdit(){
        if (hourNow == m){
            document.getElementsByClassName("container").style.backgroundColor = "#d3d3d3";
        }else if (hourNow < m){
            document.getElementsByClassName("container").style.backgroundColor = "#ff0000";
        }else 
        {
            document.getElementsByClassName("container").style.backgroundColor = "#90ee90";
        }
}
 backgroundColorEdit();
});

//changes color according to time box but is not 

    //this was a re-write attempt to test a different way to change 
    //the row colors but am undecided on which on will be easier to use

Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
  });

 //display event to screen from local storage

    //having issues, the event is saved to local storage but will not display
    
function update_Event(){
    var eventArray = JSON.parse(localStorage.getItem("name")) || [];
    $(document).ready(); {
        display(); {
        localStorage.content = $('#eventText').html('');
        $('#eventText').html(localStorage.content);
        window.onload().setItem('name').value
        document.getElementById('eventText').value = inpValue.value;
        document.set
        }
    }

}


const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));





function setColor(element, color) {
  element.style.backgroundColor = color;
}



saveButton.addEventListener('click', function() {

    const value = inpValue.value
    console.log(value);



    if (value) {
        let object = {
            name: value
        }
        var stringifiedEvent = localStorage.getItem("userEvent") || "[]"
        console.log(stringifiedEvent)

        var parsedEvent = JSON.parse(stringifiedEvent)
        console.log(parsedEvent)

        parsedEvent.push(object)
        var updatedEventStringified = JSON.stringify(parsedEvent)
        console.log(updatedEventStringified)

        localStorage.setItem("userEvent", updatedEventStringified);
        update_Event()
    }

});

}