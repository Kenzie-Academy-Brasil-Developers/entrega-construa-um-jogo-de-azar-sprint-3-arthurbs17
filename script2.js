const jokempoButton = document.querySelectorAll('.jokempoButton');
const jokempoButtonArr = [...jokempoButton];
const displayWinner = document.getElementById('displayWinner');

function showResults(n){

    displayWinner.innerText = n
    
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


jokempoButtonArr.forEach(button => {
    
    button.addEventListener('click', function(e){
        
    let choice = e.target.getAttribute('data-value')
    let pcChoice = computerChoice ()
    let winner = ''
    
    showResults(checkWinner(choice, pcChoice, winner))
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
