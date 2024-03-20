let ball = document.getElementById('ball');

document.body.addEventListener('mousemove', function(event) {
    ball.style.top = event.clientY + 'px';
    ball.style.left = event.clientX + 'px';
});