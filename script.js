// Assigning variables to targeted classes for units and buttons
let addSeconds = document.querySelector('.seconds');
let addTens = document.querySelector('.tens');
let startButton = document.querySelector('.start-button');
let pauseButton = document.querySelector('.pause-button');
let resetButton = document.querySelector('.reset-button');

// Setting units to 00
let seconds = 00;
let tens = 00;

// Break stored for setInterval
let breakStall = setInterval;

// Start timer function with conditions for how tens/seconds should appear, changes innerText
function startTimer() {
  tens++;
  if (tens <= 9) {
    addTens.innerText = `0${tens}`; // template literals used for strings and JS
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

// onclick events applied to the start, pause and reset buttons

// This will begin the timer
startButton.onclick = function() {
  breakStall = setInterval(startTimer);
};
// This will pause the timer
pauseButton.onclick = function() {
  clearInterval(breakStall);
};

// This will reset the timer so tens and seconds are shown as 0 again
resetButton.onclick = function() {
  clearInterval(breakStall);
  tens = '00';
  seconds = '00';
  addSeconds.innerText = seconds;
  addTens.innerText = tens;
} 