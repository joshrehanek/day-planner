$(document).ready(function () {

    //grabs currentDay div from HTML
    let currentDay = $("#currentDay");
    //todays date using moment.js
    let date = moment().format('MMMM Do YYYY');
    // append date to current day div
    currentDay.append(date);

        //populates textarea with localStorage 
        for (let i = 9; i <= 17; i++) {
            $(`#${i}`).siblings('textarea').val(localStorage.getItem(i));
        }
    

    // save button event listener
    $(".saveBtn").on("click", function () {
        //time equals saveButton id
        let time = $(this).attr('id');
        //value equals text entered into the textarea
        const value = $(this).siblings('textarea').val()
        //sets time and value in localStorage
        localStorage.setItem(time, value);
    });


    const currentHour = moment().hour()
    for (loop) {
        let tempTime =
        if ()
          //read pressent time
    //     if (present > timeBlockHour) {
    //         change time-block to gray (.past)
    //     } else if (present === timeBlockHour) {
    //         change time block to red (.present)
    //     } else {
    //         time-block remains green (.future)
    //     }
    // }
    }
    console.log(`currentHour: ${currentHour}`)

})
