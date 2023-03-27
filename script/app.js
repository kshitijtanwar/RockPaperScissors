let playerChoice = document.getElementById('playerSign');
let computerChoice = document.getElementById('computerSign');
let result = document.getElementById('result');
let possibleChoices = document.querySelectorAll('button');
let userChoice;
let pcChoice;
let score;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoice.innerHTML = userChoice;
    generateComputerChoices();
    getScore();
}))

function generateComputerChoices(){
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            pcChoice = '✊';
            break;
    
        case 1:
            pcChoice = '🖐️';
            break;
    
        case 2:
            pcChoice = '✌️';
            break;
    
        default:
            break;
    }
    computerChoice.innerHTML = pcChoice;
}

function getScore(){
    if((userChoice === '✊' && pcChoice ==='✌️')||
    (userChoice === '🖐️' && pcChoice ==='✊')||
    (userChoice === '✌️' && pcChoice ==='🖐️')){
        score =  "You won!";
    }
    else if(userChoice === pcChoice){
        score = "Its a tie";
    }
    else{
        score = "You lose";
    }
    result.innerHTML = score;
}