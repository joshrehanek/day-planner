$(document).ready(function () {    
    //iterable variable
    let iter = 8;       
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



    $(".time-block").each(function() {
        console.log($(this))
        if (currentHour > iter) {
            $('textarea').addClass('past');
        } else if (currentHour < iter) {
            $('textarea').removeClass('past')
            $('textarea').addClass('future');
        } else {
            $('textarea').removeClass('past')
            $('textarea').removeClass('future')
            $('textarea').addClass('present')
        }
        iter++;   
        console.log(currentHour);
        console.log(iter);
        });
    

        //clear button
        $("#clear").on("click", function () {
            console.log('clicked');
            localStorage.clear();
            location.reload();

        })
    })

