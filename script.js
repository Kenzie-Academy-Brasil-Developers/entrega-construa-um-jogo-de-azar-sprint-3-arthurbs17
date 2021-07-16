const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors')

const buttonsJokempo = document.querySelectorAll('.jokempoButton')

function playerChoice (n){

    let choice = n.value

    return choice
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


function rockDisplay(){

    let choiceComputer = computerChoice();
    let winner = ''

    if (playerChoice(buttonRock) && choiceComputer === 'tesoura'){
        console.log(choiceComputer);
        winner = 'O Computador escolheu tesoura, You win!'
    }

    if (playerChoice(buttonRock) && choiceComputer === 'pedra'){
        console.log(choiceComputer);
        winner = 'O Computador também escolheu pedra, Empatou!'
    }

    if (playerChoice(buttonRock) && choiceComputer === 'papel'){
        console.log(choiceComputer);
        winner = 'O Computador escolheu papel, Computer wins!'
    }

    console.log(winner)
    return winner
}

function paperDisplay(){

    let choiceComputer = computerChoice();
    let winner = ''

    if (playerChoice(buttonPaper) && choiceComputer === 'pedra'){
        console.log(choiceComputer);
        winner = 'O Computador escolheu pedra, You win!'
    }
    if (playerChoice(buttonPaper) && choiceComputer === 'tesoura'){
        console.log(choiceComputer);
        winner = 'O Computador escolheu tesoura, Computer wins!'
    }
    if (playerChoice(buttonPaper) && choiceComputer === 'papel'){
        console.log(choiceComputer);
        winner = 'O Computador também escolheu papel, Empatou!'
    }

    console.log(winner)
    return winner
}

function scissorsDisplay(){
    
    let choiceComputer = computerChoice();
    let winner = ''

    if (playerChoice(buttonScissors) && choiceComputer === 'papel'){
        console.log(choiceComputer);
        winner = 'O Computador escolheu papel, You win!'
    }
    if (playerChoice(buttonScissors) && choiceComputer === 'pedra'){
        console.log(choiceComputer);
        winner = 'O Computador escolheu pedra, Computer wins!'
    }
    if (playerChoice(buttonScissors) && choiceComputer === 'tesoura'){
        console.log(choiceComputer);
        winner = 'O Computador escolheu tesoura, Empatou!'
    }

    console.log(winner)
    return winner
}


function showResults(n){

    let divNova = document.createElement("div");

    let newp = document.createElement("p");

    divNova.appendChild(newp);

    let kata = document.createTextNode(n);
    
    newp.appendChild (kata);

    let destination = document.getElementById("winner");

    destination.appendChild(divNova);
}


buttonRock.addEventListener('click', function(){

    let result = rockDisplay();
    showResults(result);
})

buttonPaper.addEventListener('click', function(){

    let result = paperDisplay();
    showResults(result);
})

buttonScissors.addEventListener('click', function(){

    let result = scissorsDisplay();
    showResults(result);
})