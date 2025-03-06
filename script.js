let wins = 0, losses = 0, ties = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
        ties++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
        wins++;
    } else {
        result = "You Lose! 😞";
        losses++;
    }

    document.getElementById("result").textContent = `Computer chose ${computerChoice}. ${result}`;
    document.getElementById("score").textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}
