import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "@popperjs/core";

window.onload = () => {
  let randomCardBtn = document.getElementById("generate-card");
  randomCardBtn.addEventListener("click", generateRandomCard);
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  console.log("Hello from the console!");
};

let generateRandomNumber = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

let generateRandomCard = () => {
  let card = document.querySelector(".card");
  card.classList.remove(...card.classList);
  card.classList.add("card", generateRandomSuit());
  card.innerHTML = generateRandomNumber();
};
