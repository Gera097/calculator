class Calculator {
    constructor(){
        this.displayedNumber = "0"
        this.semiResult = 0
        this.operator = ""

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
    clear(){
        this.semiResult = 0
        this.displayedNumber = "0"
        this.operator = ""
    }
    resolveOperator(){
        switch (this.operator) {
            case "×":
                this.displayedNumber = this.multiply(this.semiResult, this.displayedNumber)
                console.log(`semiResult: ${this.semiResult}`)
                break;
            case "÷":
                this.displayedNumber = this.divide(this.semiResult, this.displayedNumber)
                break;
            case "+":
                this.displayedNumber = this.add(this.semiResult, this.displayedNumber)
                break;
            case "-":
                this.displayedNumber = this.subtract(this.semiResult, this.displayedNumber)
                break;
            default:
                console.log("no matching operator")
                break;
        }
    }
}

//While testing, decomment the following line of code:
/* module.exports = new Calculator('DEFAULT') */

//When using in the browser, decomment the following:
export default new Calculator