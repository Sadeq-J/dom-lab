/*------------------------ Cached Element References ------------------------*/
const displayElement = document.querySelector('.display')

const numberElements = document.querySelectorAll('.number')

const operatorElements = document.querySelectorAll('.operator')

const equalElement = document.querySelector('.equals')

const cElement = document.querySelector('#c')

console.log(displayElement)
console.log(numberElements)
console.log(operatorElements)
console.log(equalElement)

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let number1 = null
let number2 = null
let operator = null

/*-------------------------------- Functions --------------------------------*/
function handleNumbers(event) {
    console.log(`Clicked on ${event.target.textContent}`)
    if (!number1 && !number2 && !operator){
        number1 = event.target.textContent
        displayElement.textContent = number1
    }
    else if (number1 && !number2 && !operator) {
        number1 = number1 + event.target.textContent
        displayElement.textContent = number1
    }
    else if (number1 && !number2 && operator) {
        number2 = event.target.textContent
        displayElement.textContent = number2
    }
    else if (number1 && number2 && operator) {
        number2 = number2 + event.target.textContent
        displayElement.textContent = number2
    }

    console.log(`Number1 : ${number1}`)
    console.log(`Number2 : ${number2}`)
    console.log(`Operator : ${operator}`)

}

function handleOperator(event) {
    console.log(`Clicked on ${event.target.textContent}`)
    if (number1 && !number2 && !operator){
        operator = event.target.textContent
        displayElement.textContent = operator
    }
    else if (number1 && !number2 && operator){
        operator = event.target.textContent
        displayElement.textContent = operator
    }

    console.log(`Number1 : ${number1}`)
    console.log(`Number2 : ${number2}`)
    console.log(`Operator : ${operator}`)
}

function handleEquals(event) {
    

    if (operator === '+') {
        displayElement.textContent = Number(number1) + Number(number2)
    }
    else if (operator === '-'){
        displayElement.textContent =  Number(number1) - Number(number2)
    }
    else if (operator === '*'){
        displayElement.textContent = Number(number1) * Number(number2)
    }
    else if (operator === '/'){
        displayElement.textContent = Number(number1) / Number(number2)
    }
}

function c(event) {
    number1 = null
    number2 = null
    operator = null
    displayElement.textContent = ""
}

/*----------------------------- Event Listeners -----------------------------*/

equalElement.addEventListener('click', handleEquals)

for (let oneNumberElement of numberElements) {
    oneNumberElement.addEventListener('click', handleNumbers)
}

for (let oneOperatorElement of operatorElements) {
    oneOperatorElement.addEventListener('click', handleOperator)
}

cElement.addEventListener('click', c)