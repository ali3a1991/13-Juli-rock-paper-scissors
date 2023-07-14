"use strict"

// ============= Rounds
const roundsView = document.getElementById('rounds_view');
const resetRoundView = roundsView.innerHTML;

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
let round = 0;





const roundFunction = () => {
    const fiveRounds = document.getElementById('five_rounds');
    const tenRounds = document.getElementById('ten_rounds');
    const fifteenRounds = document.getElementById('fifteen_rounds');
    const twentyRounds = document.getElementById('twenty_rounds');

    if (fiveRounds.checked === true) {
        round = 5;
    }else if(tenRounds.checked === true){
        round = 10;
    }else if(fifteenRounds.checked === true){
        round = 15;
    }else if(twentyRounds.checked === true){
        round = 20;
    }
}


function play(event){
    const compArray = ["rock", "paper", "scissors"]
    let compPlay = compArray[Math.floor(Math.random() * 3)];

    if (roundNumber < round) {
        roundsView.innerHTML = `<h1><span>${roundNumber += 1}</span>/<span>${round}</span></h1>`
        
        if (event.currentTarget.id === compPlay) {
            report.textContent = `It was a draw! You both chose ${compPlay}`
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
        }
        
        else if(event.currentTarget.id === "rock" && compPlay === "paper"){
            report.innerHTML = '(user) <i class="fa-solid fa-hand-fist fa-rotate-90"></i> <span> VS </span> <i class="fa-solid fa-hand"></i> (comp) <p class="lose">YOU lOSE</p>'
            rock.style.backgroundColor = "red"
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
            compWin ++
        }
        
        else if(event.currentTarget.id === "rock" && compPlay === "scissors"){
            report.innerHTML = '(user) <i class="fa-solid fa-hand-fist fa-rotate-90"></i> <span> VS </span> <i class="fa-solid fa-hand-peace fa-rotate-270"></i> (comp) <p class="win">YOU WIN</p>'
            rock.style.backgroundColor = "green";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";           
            userWin ++
        }
        
        else if(event.currentTarget.id === "paper" && compPlay === "rock"){
            report.innerHTML = '(user) <i class="fa-solid fa-hand"></i> <span> VS </span> <i class="fa-solid fa-hand-fist fa-rotate-270"></i> (comp) <p class="win">YOU WIN</p>'
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "green";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
            userWin ++
        }
        
        else if(event.currentTarget.id === "paper" && compPlay === "scissors"){
            report.innerHTML = '(user) <i class="fa-solid fa-hand"></i> <span> VS </span> <i class="fa-solid fa-hand-peace fa-rotate-270"></i> (comp) <p class="lose">YOU LOSE</p>'
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "red";
            scissors.style.backgroundColor = "rgb(55, 54, 54)";
            compWin ++
        }
        
        else if(event.currentTarget.id === "scissors" && compPlay === "paper"){
            report.innerHTML = '(user) <i class="fa-solid fa-hand-peace fa-rotate-90"></i> <span> VS </span> <i class="fa-solid fa-hand"></i> (comp) <p class="win">YOU WIN</p>'
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "green";
            userWin ++
        }
        
        else if(event.currentTarget.id === "scissors" && compPlay === "rock"){
            report.innerHTML = '(user) <i class="fa-solid fa-hand-peace fa-rotate-90"></i> <span> VS </span> <i class="fa-solid fa-hand-fist fa-rotate-270"></i> (comp) <p class="lose">YOU LOSE</p>'
            rock.style.backgroundColor = "rgb(55, 54, 54)";
            paper.style.backgroundColor = "rgb(55, 54, 54)";
            scissors.style.backgroundColor = "red";
            compWin ++
        }
    }
    
    if(roundNumber == round){
        if (userWin > compWin) {
            report.innerHTML = 'The user wins <i class="fa-regular fa-face-laugh-beam fa-xl" style="color: #289f40;"></i>'
        }else if (userWin < compWin) {
            report.innerHTML = 'The comp wins <i class="fa-regular fa-face-sad-tear fa-xl" style="color: #ff0000;"></i>'
        }else{
            report.textContent = "Equaled"
        }
    }
    user.textContent = userWin;
    comp.textContent = compWin;

}

rock.addEventListener("click", roundFunction);
paper.addEventListener("click", roundFunction);
scissors.addEventListener("click", roundFunction);
rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

restart.addEventListener("click" , () => {
    roundNumber = 0;
    compWin = 0;
    userWin = 0;
    user.textContent = userWin;
    comp.textContent = compWin;
    round = 0;
    rock.style.backgroundColor = "rgb(55, 54, 54)";
    paper.style.backgroundColor = "rgb(55, 54, 54)";
    scissors.style.backgroundColor = "rgb(55, 54, 54)";
    report.innerHTML = "Let's play";
    roundsView.innerHTML = resetRoundView;
})


