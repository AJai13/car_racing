var playerBalance = 100;

function startRace() {
    var betAmount = parseInt(document.getElementById('amount').value);

    if (betAmount < 5) {
        alert("Minimum bet amount is R$5");
        return;
    }

    if (playerBalance < betAmount) {
        alert("Insufficient balance to play this round.");
        return;
    }

    var carPositions = [0, 0, 0, 0, 0];
    var raceInterval = setInterval(moveCars, 50);
    var winner = null;

    function moveCars() {
        for (var i = 0; i < carPositions.length; i++) {
            carPositions[i] += Math.random() * 10;
            document.getElementById('car' + (i + 1)).style.left = carPositions[i] + 'px';

            if (carPositions[i] >= 500 && winner === null) {
                winner = i + 1;
                clearInterval(raceInterval);
                announceResult();
            }
        }
    }

    function announceResult() {
        var betAmount = parseInt(document.getElementById('amount').value);
        var selectedPilot = parseInt(document.getElementById('pilot').value);
        var resultDiv = document.getElementById('result');
        if (selectedPilot === winner) {
            playerBalance += betAmount * 2;
            resultDiv.textContent = 'Congratulations! You won R$' + (betAmount * 2);
        } else {
            playerBalance -= betAmount;
            resultDiv.textContent = 'You lost the bet and R$' + betAmount + '.';
        }
        document.getElementById('player-balance').textContent = 'Your Balance is: R$' + playerBalance;
    }
}