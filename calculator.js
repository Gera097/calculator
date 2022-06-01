class Calculator {
    constructor(){
        this.displayedNumber = "0"
        this.semiResult = 0

    }
    add(x, y){
        if (typeof(x) === "number" & typeof(y) === "number") {
            return x + y;
        }
        else {
            return Number(x) + Number(y)
        }
    }
    subtract(x, y){
        return Number(x) - Number(y);
    }
    multiply(x, y){
        return Number(x) * Number(y);
    }
    divide(x, y){
        return Number(x) / Number(y);
    }
    concat(number){
        if(this.displayedNumber === '0'){
            this.displayedNumber = number;
        }
        else{
            this.displayedNumber += number;
        }
    }
}

//While testing, decomment the following line of code:
/* module.exports = new Calculator('DEFAULT') */

//When using in the browser, decomment the following:
export default new Calculator