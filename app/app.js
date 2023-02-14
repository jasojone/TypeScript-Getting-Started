function startGame() {
    var messageElement = document.getElementById('message');
    messageElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
