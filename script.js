$(document).ready(function () {
//variable to get current hour and convert to number
    const currentHour = parseInt(moment().hour())
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

    $.each($('.time-block'), function (index, value) {
        let tempTime = parseInt($(value).attr('data-time'));
        console.log(tempTime);
        if (currentHour === tempTime) {
            $(this).find('textarea').addClass('present');
        } else if (currentHour < tempTime) {
            $(this).find('textarea').addClass('future');
        } else {
            $(this).find('textarea').addClass('past').attr('disabled', 'disabled');
            $(this).find('saveBtn').addClass('disabled').attr('disabled', 'true');
        }
    });

    //clear button
    $("#clear").on("click", function () {
        console.log('clicked');
        localStorage.clear();
        location.reload();

    });
});