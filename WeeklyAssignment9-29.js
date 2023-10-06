const winner = (player,computer) => {
    const result = document.querySelector(".result")
    const playerScoreBoard = document.querySelector(".p-count")
    const computerScoreBoard = document.querySelector(".c-count")
    const tScoreBoard = document.querySelector(".t-count")
    if(player === computer){
        result.textContent("Tie")
        
        tScoreBoard.textContent = tscore
    } else if(player == "rock"){
        if(computer == "scissors"){
            result.textContent("Player wins!")
            playerScore++
            playerScoreBoard.textContent = playerScore
        }else{
            result.textContent("Computer wins!")
            computerScore++
            computerScoreBoard.textContent = computerScore
        }
    } else if(player == "scissors"){
        if(computer == "paper"){
            result.textContent("Player wins!")
            playerScore++
            playerScoreBoard.textContent = playerScore
        }else{
            result.textContent("Computer wins!")
            computerScore++
            computerScoreBoard.textContent = computerScore
        }
    } else {
        if(computer == "rock"){
            result.textContent("Player wins!")
            playerScore++
            playerScoreBoard.textContent = playerScore
        }else{
            result.textContent("Computer wins!")
            computerScore++
            computerScoreBoard.textContent = computerScore
        }
    }
}