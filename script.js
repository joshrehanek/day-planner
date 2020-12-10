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


    for (let i = 12; i <= 20 ; i++) {
        let currentHour = moment().hour();
        console.log(currentHour);
        console.log(i);
        if (currentHour > i) {
            $('textarea').addClass('past');
        } else if (currentHour < i) {
            $('textarea').removeClass('past')
            $('textarea').addClass('future');
        } else {
            $('textarea').removeClass('past')
            $('textarea').removeClass('future')
            $('textarea').addClass('present')
        }

        //clear button
        $("#clear").on("click", function () {
            console.log('clicked');
            localStorage.clear();
            location.reload();

        })
    }
})
