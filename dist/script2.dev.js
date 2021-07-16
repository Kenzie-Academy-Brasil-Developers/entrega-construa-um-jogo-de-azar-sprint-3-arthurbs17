"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var jokempoButton = document.querySelectorAll('.jokempoButton');

var jokempoButtonArr = _toConsumableArray(jokempoButton);

var displayWinner = document.getElementById('displayWinner');

function showResults(n) {
  displayWinner.innerText = n;
}

function computerChoice() {
  var min = 1;
  var max = 3;
  var numberChoice = Math.floor(Math.random() * (max - min + 1)) + min;
  var choice = '';

  if (numberChoice === 1) {
    choice = 'pedra';
  }

  if (numberChoice === 2) {
    choice = 'papel';
  }

  if (numberChoice === 3) {
    choice = 'tesoura';
  }

  return choice;
}

jokempoButtonArr.forEach(function (button) {
  button.addEventListener('click', function (e) {
    var choice = e.target.getAttribute('data-value');
    var pcChoice = computerChoice();
    var winner = '';
    showResults(checkWinner(choice, pcChoice, winner));
  });
});

function checkWinner(choice, pcChoice, winner) {
  if (choice === 'rock' && pcChoice === 'tesoura') {
    winner = 'O Computador escolheu tesoura, You win!';
  }

  if (choice === 'rock' && pcChoice === 'pedra') {
    winner = 'O Computador também escolheu pedra, Empatou!';
  }

  if (choice === 'rock' && pcChoice === 'papel') {
    winner = 'O Computador escolheu papel, Computer wins!';
  }

  if (choice === 'paper' && pcChoice === 'pedra') {
    winner = 'O Computador escolheu pedra, You win!';
  }

  if (choice === 'paper' && pcChoice === 'tesoura') {
    winner = 'O Computador escolheu tesoura, Computer wins!';
  }

  if (choice === 'paper' && pcChoice === 'papel') {
    winner = 'O Computador também escolheu papel, Empatou!';
  }

  if (choice === 'scissors' && pcChoice === 'papel') {
    winner = 'O Computador escolheu papel, You win!';
  }

  if (choice === 'scissors' && pcChoice === 'pedra') {
    winner = 'O Computador escolheu pedra, Computer wins!';
  }

  if (choice === 'scissors' && pcChoice === 'tesoura') {
    winner = 'O Computador também escolheu tesoura, Empatou!';
  }

  return winner;
}