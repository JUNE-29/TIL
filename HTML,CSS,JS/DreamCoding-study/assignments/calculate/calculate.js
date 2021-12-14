// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const operForm = document.getElementById("opertator-form");
const firstValue = document.querySelector("#opertator-form .value1");
const secondValue = document.querySelector("#opertator-form .value2");
const operation = document.getElementById("opertator-select")
const opResult = document.querySelector("#result-place span:first-child");

const HIDDEN_CLASSNAME="hidden";

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a % b;

function calculate(event) {
    event.preventDefault();
    const a = parseInt(firstValue.value);
    const b = parseInt(secondValue.value);
    const op = operation.value;
    
    
    if(op === "add"){
        const result = add(a,b);
        checkAndResult(a,b,result);
        opResult.classList.remove(HIDDEN_CLASSNAME);

    } else if(op === "substract") {
        const result = substract(a,b);
        checkAndResult(a,b,result);
        opResult.classList.remove(HIDDEN_CLASSNAME);


    } else if(op === "divide") {
        const result = divide(a,b);
        checkAndResult(a,b,result);
        opResult.classList.remove(HIDDEN_CLASSNAME);

    } else if(op === "multiply") {
        const result = multiply(a,b);
        checkAndResult(a,b,result);
        opResult.classList.remove(HIDDEN_CLASSNAME);
        
    }  else if(op === "remainder") {
        const result = remainder(a,b);
        checkAndResult(a,b,result);
        opResult.classList.remove(HIDDEN_CLASSNAME);
    }
}

function checkAndResult(a, b, result) {
    if(isNaN(a) === true) {
        alert("숫자를 입력해주세요!");
    } else if (isNaN(b) === true) {
        alert("숫자를 입력해주세요!");
    } else {
        opResult.innerText=`= ${result}`;
    }
    opResult.classList.add(HIDDEN_CLASSNAME);
}

operForm.addEventListener("submit", calculate);
