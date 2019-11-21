//jshint esversion:6

var startSfx = new Audio('sounds/start.mp3');
var calibrateSfx = new Audio('sounds/calibrate.mp3');

// WebSocket connection
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = function(event) {
  console.log(event.data);
  //var engineData = JSON.parse(event.data);
};


document.querySelector('.start').addEventListener("click", function(){
  startSfx.play();
  buttonAnimation(".start");
  buttonAnimation(".stop");
  socket.send("start");
});

document.querySelector('.stop').addEventListener("click", function(){
  buttonAnimation(".stop");
  buttonAnimation(".start");
  socket.send("stop");

});

document.querySelector('.calibrate').addEventListener("click", function(){
  calibrateSfx.play();
  buttonAnimation(".calibrate");
  socket.send("calibrate");
  alert("Calibration has started, please be patient as this might take some time! Thank you! :)");
  setTimeout(function(){ buttonAnimation(".calibrate"); }, 8000);
});

function buttonAnimation(buttonName) {
  var activeButton = document.querySelector(buttonName);
  activeButton.classList.toggle("pressed");
}
