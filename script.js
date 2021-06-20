
let addSeconds = document.querySelector('.seconds');
let addTens = document.querySelector('.tens');
let startButton = document.querySelector('.start-button');
let pauseButton = document.querySelector('.pause-button');
let resetButton = document.querySelector('.reset-button');

let seconds = 00;
let tens = 00;

let duration = setInterval;


function startTimer() {
  tens++;
  if (tens <= 9) {
    addTens.innerText = `0${tens}`;
  } 
  if (tens > 9) {
    addTens.innerText = tens;
}
  if (tens > 99) {
    seconds++;
    addSeconds.innerText = `0${seconds}`;
    tens = 0;
    addTens.innerText = `0${0}`;
  }
  if (seconds > 9) {
    addSeconds.innerText = seconds;
   }
}

startButton.onclick = function() {
  duration = setInterval(startTimer);
};

pauseButton.onclick = function() {
  clearInterval(duration);
};

resetButton.onclick = function() {
  clearInterval(duration);
  tens = '00';
  seconds = '00';
  addSeconds.innerText = seconds;
  addTens.innerText = tens;
}