let myButton = document.getElementById('my-button');
let counterEl = document.getElementById('counter');

let counter = 0;

myButton.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    counter++;
    counterEl.innerText = counter;
});

document.body.addEventListener('click', function(event) {
    document.body.classList.toggle('on');
});