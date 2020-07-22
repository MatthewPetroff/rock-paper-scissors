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
	if (playerChoice === 'rock') {
		if (computerChoice === 'rock') {
			return 'Draw';
		} else if (computerChoice === 'paper') {
			return 'You lose...';
		} else {
			return 'You win!!!';
		}
	} else if (playerChoice === 'paper') {
		if (computerChoice === 'rock') {
			return 'You win!!!';
		} else if (computerChoice === 'paper') {
			return 'Draw';
		} else {
			return 'You lose...';
		}
	} else {
		if (computerChoice === 'rock') {
			return 'You lose...';
		} else if (computerChoice === 'paper') {
			return 'You win!!!';
		} else {
			return 'Draw';
		}
	}
}

function rock() {
	const computerChoice = randomChoice();
	const winner = result('rock', computerChoice);
	//console.log(computerChoice);
	//console.log(winner);
}

function paper() {
	const computerChoice = randomChoice();
	const winner = result('paper', computerChoice);
	//console.log(computerChoice);
	//console.log(winner);
}

function scissors() {
	const computerChoice = randomChoice();
	const winner = result('scissors', computerChoice);
	//console.log(computerChoice);
	//console.log(winner);
}