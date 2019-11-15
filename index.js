
var startSfx = new Audio('sounds/start.mp3');
var calibrateSfx = new Audio('sounds/calibrate.mp3');

document.querySelector('.start').addEventListener("click", function(){
  startSfx.play();
  //alert("Start button was clicked!");
  buttonAnimation(".start");
  buttonAnimation(".stop");
});

document.querySelector('.stop').addEventListener("click", function(){
  alert("Stop button was clicked!");
  buttonAnimation(".stop");
  buttonAnimation(".start");

});

document.querySelector('.calibrate').addEventListener("click", function(){
  calibrateSfx.play();
  //alert("Calibrate button was clicked!");
  buttonAnimation(".calibrate");
});

function buttonAnimation(buttonName) {
  var activeButton = document.querySelector(buttonName);
  activeButton.classList.toggle("pressed");
}
