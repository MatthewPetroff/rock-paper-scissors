let win = 0;
let draw = 0;
let loss = 0;

function randomChoice() {
	choice = Math.floor(Math.random() * Math.floor(3));
	if (choice === 0) {
		return 'rock';
	} else if (choice === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function result(playerChoice, computerChoice) {
	if (playerChoice === 'rock' && computerChoice === 'paper') {
		loss++;
	} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
		win++;
	} else if (playerChoice === 'paper' && computerChoice === 'scissors') {
		loss++;
	} else if (playerChoice === 'paper' && computerChoice === 'rock') {
		win++;
	} else if (playerChoice === 'scissors' && computerChoice === 'rock') {
		loss++;
	} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
		win++;
	} else {
		draw++;
	}
}	

function reset() {
	document.getElementById('rock').src = 'images/rock.png';
	document.getElementById('paper').src = 'images/paper.png';
	document.getElementById('scissors').src = 'images/scissors.png';
	document.getElementById('computer-rock').src = 'images/rock.png';
	document.getElementById('computer-paper').src = 'images/paper.png';
	document.getElementById('computer-scissors').src = 'images/scissors.png';
}

function play(choice) {
	reset();
	const computerChoice = randomChoice();
	result(choice, computerChoice);
	document.getElementById(choice).src = `images/selected-${choice}.png`;
	document.getElementById(`computer-${computerChoice}`).src = `images/selected-${computerChoice}.png`;
	document.getElementById('score').innerHTML = `Player Score: W:${win} D:${draw} L:${loss}`;
}

document.getElementById('rock').addEventListener("click", function(e) {
	play('rock');	
});

document.getElementById('paper').addEventListener("click", function(e) {
	play('paper');	
});

document.getElementById('scissors').addEventListener("click", function(e) {
	play('scissors')
});