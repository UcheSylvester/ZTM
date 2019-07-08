// import { without } from 'lodash';

var _ = require('lodash')

console.log(_)

const cssValue = document.querySelector('h3');
const color1 = document.querySelector('input[name="color1"]');
const color2 = document.querySelector('input[name="color2"]');
const body = document.querySelector('body')

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    // displaying the value
    cssValue.textContent = `background: ${body.style.background} ;`;
}

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)

