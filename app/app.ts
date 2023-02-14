function startGame() {
    let messageElement = document.getElementById('message');
    messageElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);