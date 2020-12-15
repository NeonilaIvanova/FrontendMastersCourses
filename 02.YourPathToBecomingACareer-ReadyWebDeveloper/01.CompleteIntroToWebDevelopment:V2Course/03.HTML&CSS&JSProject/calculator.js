let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector('.screen');
const buttons = document.querySelector('.calc-buttons');
let display = "";
let resultDisplayed = false;

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else if (resultDisplayed == true) {
        buffer = value;
        display = buffer;
        resultDisplayed = false;
    } else {
        handleNumber(value);
    }
    console.log(value);
    rerender();
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
        display = buffer;
    } else {
        buffer += value;
        display = buffer;
    }
}

function handleSymbol(value) {
    switch (value) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
            display = buffer;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            resultDisplayed = true;
            display = buffer;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
                display = buffer;
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
                display = buffer;
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
        display = "" + intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer = "0";
}

function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "−") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function rerender() {
    screen.innerText = display;
}

/* function init() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        });
    }
} */

function init() {
    buttons.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            buttonClick(event.target.innerText);
        }
    });
}

/*     buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttonClick(event.target.innerText);
        });
    }); */

init();