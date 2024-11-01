function createRose() {
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.style.left = Math.random() * 100 + 'vw';
    rose.style.animationDuration = Math.random() * 2 + 3 + 's';
    rose.innerHTML = '🌹';
    document.body.appendChild(rose);
    setTimeout(() => {
        rose.remove();
    }, 5000);
}

setInterval(createRose, 500);