//dom
const domDays = document.querySelector('.container-timer__card-number--days');
const domHours = document.querySelector('.container-timer__card-number--hours');
const domMinutes = document.querySelector('.container-timer__card-number--minutes');
const domSeconds = document.querySelector('.container-timer__card-number--seconds');

const startingDays = 15;  //days

let time = startingDays * 24 * 60 * 60; // days --> seconds

 

function countdown(){
   
    const days = Math.floor(time / 60 / 60 / 24) 
    let hours = Math.floor(time /60 / 60 % 24);
    let minutes = Math.floor(time / 60 % 60 );
    let seconds = time % 60;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    domDays.innerHTML = days;
    domHours.innerHTML = hours;
    domMinutes.innerHTML = minutes;
    domSeconds.innerHTML = seconds;
    time--;

    time = time < 0 ? 0 : time;  // stops it from going into negative numbers
   
}
countdown();
setInterval(countdown, 1000);

