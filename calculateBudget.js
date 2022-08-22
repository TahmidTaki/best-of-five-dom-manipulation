let totalPlayerCost = 0

document.getElementById('calculate-player-budget').addEventListener('click', function () {
    if (playerCount == 0) {
        alert('Please select at least one player');
        return;
    }
    const perPlayerCost = getInputValue('player-cost-input');
    totalPlayerCost = perPlayerCost * playerCount;

    if (!isNaN(totalPlayerCost)) {
        setTextElementValue('player-expense', totalPlayerCost);
    }
});


document.getElementById('calculate-total-cost').addEventListener('click', function () {
    const managerCost = getInputValue('manager-cost-input');
    const coachCost = getInputValue('coach-cost-input');
    const totalCost = managerCost + coachCost + totalPlayerCost;

    if (totalPlayerCost == 0) {
        alert('Please select player expence button first');
        return;
    }

    if (!isNaN(totalCost)) {
        setTextElementValue('total-cost', totalCost);
    }

});