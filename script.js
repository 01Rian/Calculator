const displayCurrent = document.querySelector(".currentNumber");
const displayPrevious = document.querySelector(".previousNumber");

const buttons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operators");

const equal = document.querySelector(".equals");

const clear = document.querySelector(".clear");

let previousNumber = "";
let currentNumber = "";
let operator = "";

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        getNumber(e.target.innerText);
    });
});

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        getOperator(e.target.innerText);
    });
});

equal.addEventListener('click', () => {
    if (currentNumber !== "" && previousNumber !== "") {
        operate();
    }
});

clear.addEventListener('click', clean);

function getNumber(num) {
    if (num === "." && displayCurrent.innerText.includes(".")) return;
    
    if (currentNumber.length <= 15) {
        currentNumber += num;
        displayCurrent.innerText = currentNumber;
    }
}

function getOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    displayPrevious.innerText = previousNumber + " " + operator;
    currentNumber = "";
    displayCurrent.innerText = "";
}

function operate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    switch (operator) {
        case '+':
            currentNumber = add(previousNumber, currentNumber);
            break;
        case '-':
            currentNumber = subtract(previousNumber, currentNumber);
            break;
        case '*':
            currentNumber = multiply(previousNumber, currentNumber);
            break;
        case '÷':
            if (currentNumber <= 0) {
                alert("Mathematics: Indeterminate Form");
                clean();
                return;
            }
            currentNumber = divide(previousNumber, currentNumber);
            break;
        default:
            return;
    }
    
    currentNumber = roundNumber(currentNumber);
    displayCurrent.innerText = currentNumber;
    previousNumber = "";
    displayPrevious.innerText = "";
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function roundNumber(num) {
    return Math.round(num * 10000) / 10000;
}

function clean() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    displayCurrent.innerText = "";
    displayPrevious.innerText = "";
}