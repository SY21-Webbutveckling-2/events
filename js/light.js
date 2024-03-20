let light = document.getElementById('light');
let lightSwitch = document.getElementById('light-switch');

lightSwitch.addEventListener('click', toggleLight);

function toggleLight() {
    let switchState = lightSwitch.classList.toggle('on');
    light.classList.toggle('on', switchState);
}