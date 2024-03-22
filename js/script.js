// Dedico este código à Virgem Maria

const expressionElement = document.getElementById("expression");
const resultElement     = document.getElementById("result");

let expression = "5+3-5";
let result = "";

function $(selector) {
    return document.querySelector(selector);
}

const nthRootBtn      = $("#nth-root-btn");
const potentiationBtn = $("#potentiation-btn");
const percentageBtn   = $("percentage-btn");
const clearBtn        = $("#clear-btn");
const deleteBtn       = $("#delete-btn");
const changeSignalBtn = $("#change-signal-btn");
const equalBtn        = $("#equal-btn");

const inputsList = [...document.getElementsByTagName("input")];

inputsList.forEach(input => {
    input.onclick = () => {
        expression += input.value;
        updateDisplay(); 
    }
});

deleteBtn.onclick = () => {
    expression = expression.substring(0, expression.length - 1);
    updateDisplay();
}

clearBtn.onclick = () => {
    expression = "";
    result = "";

    updateDisplay();
}

function updateDisplay() {
    expressionElement.innerText = expression;
    resultElement.innerText = result;
}

updateDisplay();