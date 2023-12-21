if (!localStorage.getItem('userScore')) {
    localStorage.setItem('userScore', 0);
}

if (!localStorage.getItem('computerScore')) {
    localStorage.setItem('computerScore', 0);
}

function updateScoresInHtml() {
    document.getElementById('userScore').innerText = localStorage.getItem('userScore');
    document.getElementById('computerScore').innerText = localStorage.getItem('computerScore');
}

function showIcon(player, choice) {
    var icons = document.querySelectorAll('.icon.' + player);

    icons.forEach(function(icon) {
        if (icon.classList.contains(choice)) {
            icon.style.display = 'inline-flex';
        } else {
            icon.style.display = 'none';
        }
    });
}

function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var myDivs = document.getElementsByClassName('line');
    for (var i = 0; i < myDivs.length; i++) {
        myDivs[i].style.display = 'none';
    }
    showIcon('user', userChoice);
    showIcon('computer', computerChoice);

    var result = determineWinner(userChoice, computerChoice);

    if (result === 'user') {
        var userScore = parseInt(localStorage.getItem('userScore'));
        userScore++;
        localStorage.setItem('userScore', userScore);
    } else if (result === 'computer') {
        var computerScore = parseInt(localStorage.getItem('computerScore'));
        computerScore++;
        localStorage.setItem('computerScore', computerScore);
    }

    updateScoresInHtml();
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'tie';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

updateScoresInHtml();

// function openDialog() {
//     var dialogBox = document.getElementById('dialogBox');
//     dialogBox.style.display = 'block';
// }

// function closeDialog() {
//     var dialogBox = document.getElementById('dialogBox');
//     dialogBox.style.display = 'none';
// }

function playAgain() {
    location.reload();
}
