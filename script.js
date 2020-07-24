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
		return 'You lose...';
	} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
		return 'You win!!!';
	} else if (playerChoice === 'paper' && computerChoice === 'scissors') {
		return 'You lose...';
	} else if (playerChoice === 'paper' && computerChoice === 'rock') {
		return 'You win!!!';
	} else if (playerChoice === 'scissors' && computerChoice === 'rock') {
		return 'You lose...';
	} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
		return 'You win!!!';
	} else {
		return 'Draw';
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
	const outcome = result(choice, computerChoice);
	document.getElementById(choice).src = `images/selected-${choice}.png`;
	document.getElementById(`computer-${computerChoice}`).src = `images/selected-${computerChoice}.png`;
	document.getElementById('result').innerHTML = `Result: ${outcome}`;
}