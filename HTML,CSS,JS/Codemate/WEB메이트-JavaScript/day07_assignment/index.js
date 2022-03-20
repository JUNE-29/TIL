const startBtn = document.querySelector('.start__button');
const stopBtn = document.querySelector('.stop__button');
const resetBtn = document.querySelector('.reset__button');
const hour = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');


let timeout;

let hours = 0;
let minutes = 0;
let seconds = 0;

function CountTime() {
    sec.innerText=`${seconds.toString().padStart(2,"0")}`;
    min.innerText=`${minutes.toString().padStart(2,"0")}`;
    hour.innerText=`${hours.toString().padStart(2,"0")}`;

    if(seconds < 59){
        seconds++;
    } else {
        seconds = 0;

        if(minutes < 59) {
            minutes++;
        } else {
            minutes = 0;
            hours++;
        }
    } 
    
    timeout = setTimeout(CountTime, 1000);
}

function CountStop() {
    clearTimeout(timeout);
}

startBtn.addEventListener('click', ()=>{
    CountTime();
});

stopBtn.addEventListener('click', ()=>{
    CountStop();
});

resetBtn.addEventListener('click', ()=>{
    clearTimeout(timeout);
    hours = 0;
    minutes = 0;
    seconds = 0;

    sec.innerText=`${seconds.toString().padStart(2,"0")}`;
    min.innerText=`${minutes.toString().padStart(2,"0")}`;
    hour.innerText=`${hours.toString().padStart(2,"0")}`;
});