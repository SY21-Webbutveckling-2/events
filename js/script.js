let myButton = document.getElementById('my-button');
let counterEl = document.getElementById('counter');

let counter = 0;

myButton.addEventListener('click', function(event) {
    counter++;
    counterEl.innerText = counter;
});