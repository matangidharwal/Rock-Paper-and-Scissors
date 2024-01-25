let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = () =>{
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw, Play Again!";
    msg.style.backgroundColor = "rgb(5, 51, 82)";
};

const showWinner = (userWin, userChoiceId, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoiceId)=>{
    console.log("user choice = ", userChoiceId);
    //Generate computer choice -> modulor
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoiceId === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoiceId === "rock"){
            //scissors,paper
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoiceId === "paper"){
            //scissors,rock
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin, userChoiceId, compChoice);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoiceId = choice.getAttribute("id");
        //console.log("choice was clicked", userChoiceId);
        playGame(userChoiceId);
    });
});