const displayCurrent = document.querySelector(".currentNumber");
const displayPrevious = document.querySelector(".previousNumber");

const buttons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operators");

const equal = document.querySelector(".equals");

const clear = document.querySelector(".clear");

let previousNumber = "";
let currentNumber = "";
let operator = "";