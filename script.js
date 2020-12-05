$(document).ready(function () {

    //grabs currentDay div from HTML
    let currentDay = $("#currentDay");
    //todays date using moment.js
    let date = moment().format('MMMM Do YYYY');
    // append date to current day div
    currentDay.append(date);

})
