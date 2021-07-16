const jokempoButton = document.querySelectorAll('.jokempoButton');
const jokempoButtonArr = [...jokempoButton];
const displayWinner = document.getElementById('displayWinner');
const scorePlayerDisplay = document.getElementById('scorePlayer');
const scorePcDisplay = document.getElementById('scorePc');
const scoreTieDisplay = document.getElementById('scoreTie')

function showResults(n){

    displayWinner.innerText = n
    
}

function showScorePlayer(n){
    
    scorePlayerDisplay.innerText = n
}

function showScorePc(n){
    
    scorePcDisplay.innerText = n
}

function showScoreTie(n){
    
    scoreTieDisplay.innerText = n
}

function computerChoice (){

    let min = 1;
    let max = 3;
    let numberChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    let choice = '';

    if (numberChoice === 1){
        choice = 'pedra'
    }

    if (numberChoice === 2){
        choice = 'papel'
    }

    if (numberChoice === 3){
        choice = 'tesoura'
    }

    return choice
}

let scorePlayer = 0;
let scorePc = 0;
let scoreTie = 0;

jokempoButtonArr.forEach(button => {
    
    button.addEventListener('click', function(e){
        
    let choice = e.target.getAttribute('data-value');
    let pcChoice = computerChoice ();
    let winner = '';
    let result = checkWinner(choice, pcChoice, winner);
    
    
    showResults(result);
    
    if (result === 'O Computador escolheu tesoura, You win!' || 
    result === 'O Computador escolheu pedra, You win!' || 
    result === 'O Computador escolheu papel, You win!'){
        scorePlayer++
        showScorePlayer(scorePlayer)
    }

    if (result === 'O Computador escolheu papel, Computer wins!' ||
    result === 'O Computador escolheu tesoura, Computer wins!' ||
    result === 'O Computador escolheu pedra, Computer wins!'){
        scorePc++
        showScorePc(scorePc)
    }

    if (result === 'O Computador também escolheu pedra, Empatou!'||
    result === 'O Computador também escolheu papel, Empatou!' ||
    result === 'O Computador também escolheu tesoura, Empatou!'){
        scoreTie++
        showScoreTie(scoreTie)
    }
    
    })
});

function checkWinner(choice, pcChoice, winner){

    if (choice === 'rock' && pcChoice === 'tesoura'){
        winner = 'O Computador escolheu tesoura, You win!'
    }
    if (choice === 'rock' && pcChoice === 'pedra'){
        winner = 'O Computador também escolheu pedra, Empatou!'
    }
    if (choice === 'rock' && pcChoice === 'papel'){
        winner = 'O Computador escolheu papel, Computer wins!'
    }
    if (choice === 'paper' && pcChoice === 'pedra'){
        winner = 'O Computador escolheu pedra, You win!'
    }
    if (choice === 'paper' && pcChoice === 'tesoura'){
        winner = 'O Computador escolheu tesoura, Computer wins!'
    }
    if (choice === 'paper' && pcChoice === 'papel'){
        winner = 'O Computador também escolheu papel, Empatou!'
    }
    if (choice === 'scissors' && pcChoice === 'papel'){
        winner = 'O Computador escolheu papel, You win!'
    }
    if (choice === 'scissors' && pcChoice === 'pedra'){
        winner = 'O Computador escolheu pedra, Computer wins!'
    }
    if (choice === 'scissors' && pcChoice === 'tesoura'){
        winner = 'O Computador também escolheu tesoura, Empatou!'
    }
    
    return winner
}
