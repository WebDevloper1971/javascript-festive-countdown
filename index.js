const daysElement = document.getElementById("days");

const hoursElement = document.getElementById("hrs");

const minutesElement = document.getElementById("mins");

const secondsElement = document.getElementById("secs");

const festName = document.getElementById("festival");

// var input = prompt("Enter Date in format ( 1 Jan 2023 ) ");
// var fest = prompt("Enter the Festival name ");

// festName.innerHTML = `Countdown To ${fest}`;

function countdown(dateString){

    // datestring = input;

    dateString = "10 Nov 2023";
    

    const diwaliDate = new Date(dateString);
    const currentDate = new Date();

    const diff = (diwaliDate - currentDate);


    const totalSec = diff/1000;
    
    const days = Math.floor(totalSec/3600/24);

    const hrs = Math.floor(totalSec/3600) % 24;

    const mins = Math.floor(totalSec/60) % 60;

    const secs = Math.floor(totalSec)%60;

    daysElement.innerHTML = days;

    hoursElement.innerHTML = formatTime(hrs);
    minutesElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(secs);
   
  
    

}

function formatTime(time){

    return time < 10 ? `0${time}` : time;
    
}

countdown();

setInterval(countdown, 1000);