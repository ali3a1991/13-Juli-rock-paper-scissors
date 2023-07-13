"use strict"

// ============= Rounds
const roundsView = document.getElementById('rounds_view')
const fiveRounds = document.getElementById('five_rounds');
const tenRounds = document.getElementById('ten_rounds');
const fifteenRounds = document.getElementById('fifteen_rounds');
const twentyRounds = document.getElementById('twenty_rounds');

// ============= Live Result
const user = document.getElementById('user');
const comp = document.getElementById('comp');

// ============= Report
const report = document.getElementById('report');

// ============= Play Buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// ============= Restart Button
const restart = document.getElementById('restart');
let roundNumber = 0;
let compWin = 0;
let userWin = 0;
user.textContent = userWin;
comp.textContent = compWin;



function play(event){
    let round = 0;
    const compArray = ["rock", "paper", "scissors"]
    let compPlay = compArray[Math.floor(Math.random() * 3)];
    
    if (fiveRounds.checked === true) {
        round = 5;
    }else if(tenRounds.checked === true){
        round = 10;
    }else if(fifteenRounds.checked === true){
        round = 15;
    }else if(twentyRounds.checked === true){
        round = 20;
    }
    
    if (roundNumber < round) {
        roundsView.innerHTML = `<h1><span>${roundNumber += 1}</span>/<span>${round}</span></h1>`

        if (event.currentTarget.id === compPlay) {
            report.textContent = `It was a draw! You both chose ${compPlay}`
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
        }
        
        else if(event.currentTarget.id === "rock" && compPlay === "paper"){
            rock.style.backgroundColor = "red"
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
            compWin ++
            report.textContent = "Paper (comp) beats Rock (user). YOU lOSE"
        }
        
        else if(event.currentTarget.id === "rock" && compPlay === "scissors"){
            rock.style.backgroundColor = "green";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";            userWin ++
            report.textContent = "Rock (user) beats Scissors (comp). YOU WIN"
        }
        
        else if(event.currentTarget.id === "paper" && compPlay === "rock"){
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "green";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
            userWin ++
            report.textContent = "Paper (user) beats Rock (comp). YOU WIN"
        }
        
        else if(event.currentTarget.id === "paper" && compPlay === "scissors"){
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "red";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
            compWin ++
            report.textContent = "Scissors (comp) beats Paper (user). YOU lOSE"
        }
        
        else if(event.currentTarget.id === "scissors" && compPlay === "paper"){
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "green";
            userWin ++
            report.textContent = "Scissors (user) beats Paper (comp). YOU WIN"
        }
        
        else if(event.currentTarget.id === "scissors" && compPlay === "rock"){
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "red";
            compWin ++
            report.textContent = "Rock (comp) beats Scissors (user). YOU lOSE"
        }
    }

    if(roundNumber == round){
        if (userWin > compWin) {
            report.textContent = "The user wins"
        }else if (userWin < compWin) {
            report.textContent = "The comp wins"
        }else{
            report.textContent = "Equaled"
        }
    }
    user.textContent = userWin;
    comp.textContent = compWin;
}

rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

