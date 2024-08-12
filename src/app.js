/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function newCard() {
  let suite = ['♦','♥','♠','♣'];
  let numbers = ['A', '2','3','4','5','6','7','8','9','10','J','Q','K'];
  
  let indexSuite = Math.floor(Math.random() * suite.length);  
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  
  document.querySelector('#top'.innerHTML) = suite[indexSuite];
  document.querySelector('#number'.innerHTML) = numbers[indexNumbers];
  document.querySelector('#end'.innerHTML) = suite[indexSuite];

  let suiteColor = suite[indexSuite] == '♦' || suite[indexSuite] == '♥' ? 'text-danger' : 'text-dark'
  document.querySelector('#top'.innerHTML) = suiteColor
  document.querySelector('#end'.innerHTML) = suiteColor
  
  
  document.querySelector('#number').className = suiteColor
}
  
window.onload = function () {newCard()};
document.querySelector('#newCard').addEventListener('click',() =>newCard())