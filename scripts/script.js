const digitBtns = document.querySelectorAll('.number-btn');
const cleanBtn = document.querySelector('.clear-btn');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const minusBtn = document.querySelector('.minus')
const plusBtn = document.querySelector('.plus')
const resultBtn = document.querySelector('.resultBtn');
const dotBtn = document.querySelector('.dot-btn')

let result = document.querySelector('.value');
result.textContent = 0;


let number = null;
let action = null;


function renderDigits(digit) {
    if (!+result.textContent) {
        return(`${digit}`)
    }
    return(`${result.textContent}${digit}`)
}

function addDot() {
    if (result.textContent[result.textContent.length - 1] == '.') return;
    result.textContent = `${result.textContent}.`
}

function clearResult() {
    result.textContent = 0;
}

function takeResult(number, action) {
    if (!number || !action) {
        return;
    }

    let res = eval(`${number}${action}${result.textContent}`)
    result.textContent = res;
    number = result.textContent;
            if (result.textContent.length >= 18) {
            result.textContent = 'Слишком много символов.'
        }
}

cleanBtn.addEventListener('click', clearResult)

digitBtns.forEach((b) => {
    b.addEventListener('click', (e) => {
        result.textContent = renderDigits(e.target.textContent)
        if (result.textContent.length >= 18) {
            result.textContent = 'Слишком много символов.'
        }
    })
})

dotBtn.addEventListener('click', addDot)

divideBtn.addEventListener('click', () => {
    number = result.textContent
    clearResult();
    action = '/'
})

multiplyBtn.addEventListener('click', () => {
    number = result.textContent
    clearResult();
    action = '*'
})

minusBtn.addEventListener('click', () => {
    number = result.textContent
    clearResult();
    action = '-'
})

plusBtn.addEventListener('click', () => {
    number = result.textContent
    clearResult();
    action = '+'
})


resultBtn.addEventListener('click', () => {
    takeResult(number, action)
})
