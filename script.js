const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

let WIN = 0;
let DRAW = 0;
let LOSS = 0;

function randomChoice() {
	const choice = Math.floor(Math.random() * Math.floor(3));
	if (choice === 0) {
		return ROCK;
	} else if (choice === 1) {
		return PAPER;
	} else {
		return SCISSORS;
	}
}

function result(playerChoice, computerChoice) {
	const rockLosesToPaper = (playerChoice === ROCK && computerChoice === PAPER);
	const paperLosesToScissors = (playerChoice === PAPER && computerChoice === SCISSORS);
	const scissorsLoseToRock = (playerChoice === SCISSORS && computerChoice === ROCK);
	const rockBeatsScissors = (playerChoice === ROCK && computerChoice === SCISSORS);
	const paperBeatsRock = (playerChoice === PAPER && computerChoice === ROCK);
	const scissorsBeatPaper = (playerChoice === SCISSORS && computerChoice === PAPER);

	if (rockLosesToPaper || paperLosesToScissors || scissorsLoseToRock) {
		LOSS++;
	} else if (rockBeatsScissors || paperBeatsRock || scissorsBeatPaper) {
		WIN++;
	} else {
		DRAW++;
	}
}	

function reset() {
	document.getElementById(ROCK).src = `images/${ROCK}.png`;
	document.getElementById(PAPER).src = `images/${PAPER}.png`;
	document.getElementById(SCISSORS).src = `images/${SCISSORS}.png`;
	document.getElementById(`computer-${ROCK}`).src = `images/${ROCK}.png`;
	document.getElementById(`computer-${PAPER}`).src = `images/${PAPER}.png`;
	document.getElementById(`computer-${SCISSORS}`).src = `images/${SCISSORS}.png`;
}

function play(choice) {
	reset();
	const computerChoice = randomChoice();
	result(choice, computerChoice);
	document.getElementById(choice).src = `images/selected-${choice}.png`;
	document.getElementById(`computer-${computerChoice}`).src = `images/selected-${computerChoice}.png`;
	document.getElementById('score').innerHTML = `Player Score: W:${WIN} D:${DRAW} L:${LOSS}`;
}

document.getElementById(ROCK).addEventListener("click", function(e) {
	play(ROCK);	
});

document.getElementById(PAPER).addEventListener("click", function(e) {
	play(PAPER);	
});

document.getElementById(SCISSORS).addEventListener("click", function(e) {
	play(SCISSORS)
});