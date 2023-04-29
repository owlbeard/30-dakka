import Audi from './notif-sound-7062.mp3'
import './style.css';
import './normalize-css.css';

const start = document.querySelector("#start");
const reset = document.querySelector("#reset")
const stop = document.querySelector("#stop")
const chrono = document.querySelector(".chrono")

const audio = new Audio();
audio.src = Audi

let seconds = 0
let minutes = 0
let intervalId = null

function timer() {

  seconds += 1;
  
  if (seconds === 60) {
    seconds = 0
    minutes += 1;
  }
  if (minutes === 30) {
    audio.play();
    clearInterval(intervalId);
  }
  if (minutes < 10 && seconds < 10) {
    if (minutes === 0) chrono.textContent = `0${seconds}`
    else chrono.textContent = `0${minutes}:0${seconds}`;
  }  
  if (minutes < 10 && seconds >= 10) {
    if (minutes === 0) chrono.textContent = `${seconds}`
    else chrono.textContent = `0${minutes}:${seconds}`;
  }
  if (minutes >= 10) {
    if (seconds >= 10) chrono.textContent = `${minutes}:${seconds}`;
    else chrono.textContent = `${minutes}:0${seconds}`;
  }  
  
}  

start.addEventListener("click", () => {
  const myInterval = setInterval(timer, 1000)
  intervalId = myInterval;
})

stop.addEventListener("click", () => {
  clearInterval(intervalId);
})

reset.addEventListener("click", () => {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  chrono.textContent = seconds;
})