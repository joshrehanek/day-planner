$(document).ready(function () {

    //current hour using moment.js
    let currentHour = moment().hour();
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



    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).children('button').attr('id'));
        if (currentHour > timeBlock) {
            $(this).addClass('past');
        } else if (currentHour < timeBlock) {
            $('this').addClass('future');
        } else {
            $('this').addClass('present')
        }
        console.log(currentHour);
        console.log(timeBlock);
    });


    //clear button
    $("#clear").on("click", function () {
        console.log('clicked');
        localStorage.clear();
        location.reload();

    })
})

