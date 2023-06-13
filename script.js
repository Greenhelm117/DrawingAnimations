console.log("HELLO THERE");

//PSEUDO CODE
//take number, decrement in a loop every second
//get to 0 and stop
//update visual

//pause stops the loop
//play starts/resumes from pause location

//animation uses same loop I guess and ticks down as well

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick;
    this.interval = setInterval(this.tick, 1000);
  };

  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;

    if (this.durationInput.value == 0) {
      clearInterval(this.interval);
    }
  };

  pause = () => {
    clearInterval(this.interval);
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
