console.log("HELLO THERE");

//PSEUDO CODE
//take number, decrement in a loop every second
//get to 0 and stop
//update visual

//pause stops the loop
//play starts/resumes from pause location

//animation uses same loop I guess and ticks down as well

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer just ticked down");
  },
  onComplete() {
    console.log("Timer completed");
  },
});
