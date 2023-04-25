"use strict";

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function move(startTime){
  let left = Math.random() * 300;
  let top = Math.random() * 300;
  let wh = ((Math.random() * 400) + 100);
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.width = wh + "px";
  document.getElementById("shape").style.height = wh + "px";
  document.getElementById("shape").style.display = "block";
  document.getElementById("shape").style.backgroundColor = getRandomColor();

  startTime = startTime || new Date().getTime();
  return startTime;
}

let startTime = move(new Date().getTime());

document.getElementById("shape").onclick = function(){
  document.getElementById("shape").style.display = "none";
  let endTime = new Date().getTime();
  let timeTaken = (endTime - startTime) / 1000;
  alert(timeTaken);
  startTime = move();
}
