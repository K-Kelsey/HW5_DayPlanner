$(document).ready(init);

function init() {

    const grid = $(".container")
    const saveButton = document.getElementById('save-btn')
    const rows = document.getElementsByClassName("row");
    let m = moment();
    var today = moment().format("MMM Do, YYYY, h:mm:ss a");
    $("#moment").text('Today is: ' + today);
    var hourPast = hourPast < m;
    var hourNow = m;
    var hourFuture = hourFuture < m;

    let currentHour = parseInt(moment().format('H'));

    const savedEvent = JSON.parse(localStorage.getItem("name")) || []
    console.log(savedEvent)
    for (let i = 0; i < savedEvent.length; i++) {
        $(`#eventText-${i}`).val(savedEvent[i])

    }

    function updateEvent(id, value) {

        var eventArray = JSON.parse(localStorage.getItem("name")) || [];

        eventArray[id] = value;

        localStorage.setItem('name', JSON.stringify(eventArray))
    }

    Array.from(rows).forEach(row => {
        // console.log(row);
        var rowTime = parseInt(row.children[0].dataset.hour);
        // console.log(rowTime);
        var formatHour = parseInt(moment().format('H'));
        // console.log(formatHour)

        // Compares row id to current hour and sets color accordingly
        if (formatHour === rowTime) {
            setColor(row, "red");
        } else if (formatHour < rowTime) {
            setColor(row, "green");
        } else if (formatHour > rowTime) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    });


    function setColor(element, color) {
        element.style.backgroundColor = color;
    }


    $('.container').on('click', '.fa-save', function (e) {
        const id = e.target.dataset.index
        const value = $(`#eventText-${id}`).val().trim()
        console.log(value);
        updateEvent(id, value);
    });
}


//Testing playground

// const hour = e.target.dataset.dataHour
        // // console.log('hour', hour);
        // if (value) {
        //     let object = {
        //         hour: hour,
        //         text: value
        //     }

        //update the text at that index in the array 
        // for (let i = 0; i < stringifiedEvent.length; i++) {
        //     if (object.hour === stringifiedEvent[i].hour) {
        //         getItem(stringifiedEvent[i]).push(rows[i])


        //         stringifiedEvent.push(object)
        //         var updatedEventStringified = JSON.stringify(parsedEvent)
        //         console.log(updatedEventStringified)

        //         localStorage.setItem("userEvent", updatedEventStringified);


        //         update_Event()

        //     }
        // }
        // }
        // for (let i = 0; i < grid.length; i++) {
        //     // const inpValue = document.getElementById(`eventText-${i}`)

        //     if (inpValue[i].text === string) {
        //         newArr.push(inpValue[i].value)
        //         //save input to local storage
        //         localStorage.setItem("userEvent", inpValue[i])
        //     }
        //     return newArr;
        // }

        // $(document).ready(); {
        //     display(); {
        //         localStorage.content = $('#eventText').html('');
        //         $('#eventText').html(localStorage.content);
        //         window.onload().setItem(object).value
        //         document.getElementById('eventText').value = inpValue.value;
        //         document.set
        //     }
        // }

    //changes color to time table according to current time
    // console.log(rows)
    // console.log(Array.from(rows))
    //display event to screen from local storage

    //having issues, the event is saved to local storage but will not display

    // $('.container').on('click', '.save-btn', function (e) {
    //     updateEvent();
    //     console.log($(this).parent().parent().prev()[0].value.trim())
    // })
