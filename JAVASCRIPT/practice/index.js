// BUILDING  A SIMPLE CALCULATOR
function simpleCalculator() {
    alert('Welcome to a simple Calculator, Have fun!!')
    let firstNumber = prompt('enter first Number');
    let operator = prompt("What operation do you want to perform? Tips: input 'add', 'subtract', 'multiply' or 'divide'");
    let secondNumber = prompt('enter second Number');
    
    // const sum = Number(firstNumber) + Number(secondNumber);
    // const subtract = Number(firstNumber) - Number(secondNumber);
    // const divide = Number(firstNumber) / Number(secondNumber);
    // const multiply = Number(firstNumber) * Number(secondNumber);
    let result;

    if(operator === "add") {
        result = Number(firstNumber) + Number(secondNumber)
        alert('The sum is :' + result);
    } else if(operator === 'subtract') {
        result = Number(firstNumber) - Number(secondNumber);
        alert('the result is: ' + result)
    } else if(operator === 'divide') {
        result = Number(firstNumber) / Number(secondNumber);
        alert('the quotient is : ' + result)
    } else if(operator === 'multiply') {
        result = Number(firstNumber) * Number(secondNumber);
        alert('the result is: ' + result);
    } else {
        alert('check the operator used')
    }
    
}


// MAKING A KEYLESS CAR
function checkDriverAge1() {
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
    
}

// MAKING A KEYLESS CAR EVEN BETTER!!
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge(driverAge) {
    const adultAge = 18;

    if(driverAge > adultAge) {
        console.log('Powering On. Enjoy the ride!')
    } else if(driverAge === adultAge) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!")
    } else if(driverAge < adultAge) {
        console.log("Sorry, you are too young to drive this car. Powering off")
    }
}