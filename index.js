
var startSfx = new Audio('sounds/start.mp3');
var calibrateSfx = new Audio('sounds/calibrate.mp3');

document.querySelector('.start').addEventListener("click", function(){
  startSfx.play();
  buttonAnimation(".start");
  buttonAnimation(".stop");
});

document.querySelector('.stop').addEventListener("click", function(){
  buttonAnimation(".stop");
  buttonAnimation(".start");

});

document.querySelector('.calibrate').addEventListener("click", function(){
  calibrateSfx.play();
  alert("Calibration has started, please be patient as this might take some time! Thank you! :)");
  buttonAnimation(".calibrate");
  setTimeout(function(){ buttonAnimation(".calibrate"); }, 8000);
});

function buttonAnimation(buttonName) {
  var activeButton = document.querySelector(buttonName);
  activeButton.classList.toggle("pressed");
}
