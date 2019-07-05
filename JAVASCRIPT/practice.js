// BUILDING  A SIMPLE CALCULATOR
alert('Welcome to a simple Calculator, Have fun!!')
let firstNumber = prompt('enter first Number');
let secondNumber = prompt('enter second Number');

const sum = Number(firstNumber) + Number(secondNumber);
alert('The sum is :' + sum);

// MAKING A KEYLESS CAR
alert("welcome! First let's confirm your age before we can let you drive :)")
const adultAge = 18;
let userAge = Number(prompt('how old are you?'))

if(userAge === adultAge) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if(userAge > adultAge) {
    alert("Powering On. Enjoy the ride!")
} else if(userAge < adultAge) {
    alert("Sorry, you are too young to drive this car. Powering off")
}