let light = document.getElementById('light');
let lightSwitch = document.getElementById('light-switch');

lightSwitch.addEventListener('click', toggleLight);
lightSwitch.addEventListener('keypress', function(event) {
    event.preventDefault();
});

document.body.addEventListener('keypress', function(event) {
    if (event.key === ' ' || event.key === 'Enter') {
        toggleLight();
    }
});

let sunriseCount = 0;

function toggleLight() {
    let switchState = lightSwitch.classList.toggle('on');
    light.classList.toggle('on', switchState);
    document.body.classList.toggle('on', switchState);

    if (switchState) {
        sunriseCount++;
        light.innerText = sunriseCount;
    }
}