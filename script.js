const btnEle = document.querySelectorAll("button")

const userScoreEle = document.getElementById("user-score")
const compScoreEle = document.getElementById("comp-score")
const tieScoreEle = document.getElementById("tie-score")

const resultEle = document.getElementById("result")

let userScore = 0
let compScore = 0
let tieScore = 0

btnEle.forEach((btn)=>{
btn.addEventListener("click", ()=>{
  
  // console.log("you clicked", btn.id)
  const result = playRound(btn.id, compChoice())
  resultEle.textContent = result
})
})

function compChoice () {
  const choices = ["rock", "paper", "scissor"]
 const randomchoice =  Math.floor(Math.random()*choices.length)
 return choices [randomchoice]
}

function playRound(userSelection, compSelection) {
if(userSelection === compSelection){
  tieScore++
  tieScoreEle.textContent = tieScore
return ("its a tie!")
}else if(
  (userSelection === "rock" && compSelection === "scissor")||(
    userSelection === "paper" && compSelection === "rock")||
    (userSelection === "scissor" && compSelection === "paper")){
      userScore++
      userScoreEle.textContent = userScore
return `You won! ${userSelection} beats ${compSelection}`
}else
compScore++
compScoreEle.textContent = compScore
return `you lose! ${compSelection} beats ${userSelection}`
}