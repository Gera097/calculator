import Calculator from "./calculator.js"

document.querySelector('.numbers').addEventListener('click', function(event){
    if (event.target.tagName === "BUTTON") {
        Calculator.concat(event.target.innerText)
        document.querySelector('.screen').innerText = Calculator.displayedNumber
    }
    event.stopPropagation();
})
document.querySelector('.zero').addEventListener('click', function(event){
    if (event.target.tagName === "BUTTON") {
        Calculator.concat(event.target.innerText)
        document.querySelector('.screen').innerText = Calculator.displayedNumber
    }
    event.stopPropagation();
})
document.querySelector('.operators').addEventListener('click', function(event){
    Calculator.semiResult = Calculator.displayedNumber;
    Calculator.displayedNumber = "0";
    document.querySelector('.screen').innerText = Calculator.displayedNumber
    Calculator.operator = event.target.innerText;
})
document.querySelector('.equal').addEventListener('click', function(event){
    Calculator.resolveOperator(Calculator.operator);
    document.querySelector('.screen').innerText = Calculator.displayedNumber;
    Calculator.operator = "";
})
document.querySelector('.clear').addEventListener('click', function(event){
    Calculator.clear()
    document.querySelector('.screen').innerText = Calculator.displayedNumber;
})
document.querySelector('.back-arrow').addEventListener('click', function(event){
    Calculator.back()
    document.querySelector('.screen').innerText = Calculator.displayedNumber;
})


