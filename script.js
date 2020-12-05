$(document).ready(function () {

    //grabs currentDay div from HTML
    let currentDay = $("#currentDay");
    //todays date using moment.js
    let date = moment().format('MMMM Do YYYY');
    // append date to current day div
    currentDay.append(date);

    // save button event listener
    $(".saveBtn").on("click", function () {
        //time equals saveButton id
        let time = $(this).attr('id');
        //value equals text entered into the textarea
        const value = $(this).siblings('textarea').val()
        //sets time and value in localStorage
        localStorage.setItem(time, value);
    });

})
