"use strict";

let text = document.querySelector("#typewriter").innerText;
let textLength = text.length;
let number = 0;
let letters = text.split("");

document.querySelector("#typewriter").innerText = "";
document.addEventListener("click", start);

function start() {
  document.removeEventListener("click", start);
  document.querySelector("#typewriter").append(letters[number]);
  let typekey1 = new Audio("typekey1.mp3");
  let typespace = new Audio("typespace.mp3");
  let typelastkey = new Audio("typelastkey.mp3");

  // white space
  if (/^ *$/.test(letters[number])) {
    typespace.play();
  } else {
    typekey1.play();
  }

  if (number == textLength - 1) {
    typelastkey.play();
  }

  setTimeout(addNumber, Math.floor(Math.random() * 400));
}

function addNumber() {
  if (number < textLength - 1) {
    number++;
    start();
  }
}
