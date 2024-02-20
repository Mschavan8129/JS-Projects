let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("game was draw!!");
    msg.innerText="Game Draw Play Again";
    msg.style.backgroundColor="#081b31";
}


const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin)
    {
        console.log("You win");
        msg.innerText=`You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
        uScore.innerText=++userScore;
    }
    else{
        console.log("Computer win");
        msg.innerText=`You lose,${computerChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
        cScore.innerText=++compScore;
    }
}

const generateComputerChoice=()=>
{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("user choice: ",userChoice);
    //generate computer choice
    const computerChoice=generateComputerChoice();
    console.log("computer choice: ",computerChoice);

    let userWin =true;
    //draw game
    if(userChoice===computerChoice)
    {
        drawGame();
    }else{
        
        if(userChoice==="rock")
        {
            //paper,scissor
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            //rock,scissor
            userWin=computerChoice=="scissors"?false:true;
        }
        else
        {
            //rock,paper
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);

    }
   
   
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})
