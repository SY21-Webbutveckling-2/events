let ball = document.getElementById('ball');

document.body.addEventListener('click', function(event) {
    ball.style.top = event.clientY + 'px';
    ball.style.left = event.clientX + 'px';
});