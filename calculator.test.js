const Calculator = require("./calculator.js")

describe("Unit Tests for Calculator class", () => {
    test('1) test of the add function', () => {
      Calculator.semiResult = 5
      const x = Calculator.semiResult
      const y = 3;
      result = Calculator.add(x,y)  
      expect(result).toBe(8);
    });
    test('2) test of the add function with strings', () => {
        const x = "2";
        const y = "3";
        result = Calculator.add(x,y)  
        expect(result).toBe(5);
      });
      test('2) test of the add function with negative values', () => {
        const x = "-2";
        const y = 3;
        result = Calculator.add(x,y)  
        expect(result).toBe(1);
      });

  })

  describe("Unit test for concat method", () => {
    test('1) test of concat method when beggining with 0', () => {
      Calculator.displayedNumber = '0';
      const number = '9';
      Calculator.concat(number);
      expect(Calculator.displayedNumber).toBe("9");
    })
    test('2) test of concat method', () => {
      Calculator.displayedNumber = '1';
      const number = '9';
      Calculator.concat(number);
      expect(Calculator.displayedNumber).toBe("19");
    })
  })

  
 