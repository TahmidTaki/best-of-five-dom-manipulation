document.getElementById('select-btn-1').addEventListener('click', function () {

    const playerName = getInnerText('player-1');
    addPlayerInList(playerName);

    disableButton('select-btn-1');
})
document.getElementById('select-btn-2').addEventListener('click', function () {
    const playerName = getInnerText('player-2');

    addPlayerInList(playerName);
    disableButton('select-btn-2');
})
document.getElementById('select-btn-3').addEventListener('click', function () {
    const playerName = getInnerText('player-3');

    addPlayerInList(playerName);
    disableButton('select-btn-3');
})
document.getElementById('select-btn-4').addEventListener('click', function () {
    const playerName = getInnerText('player-4');

    addPlayerInList(playerName);
    disableButton('select-btn-4');
})
document.getElementById('select-btn-5').addEventListener('click', function () {
    const playerName = getInnerText('player-5');

    addPlayerInList(playerName);
    disableButton('select-btn-5');
})
document.getElementById('select-btn-6').addEventListener('click', function () {
    const playerName = getInnerText('player-6');

    addPlayerInList(playerName);
    disableButton('select-btn-6');
})

// console.log(playerCount);



