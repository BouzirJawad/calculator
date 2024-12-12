class Calculator{
    add(a,b) {return a + b}

    sub(a,b) {return a - b}

    multi(a,b) {return a * b}

    dev(a,b) {if (b === 0) return "can't devide by 0!";
        return a / b}

    squareRoot(a) {if (a < 0) return "Cannot calculate square root of a negative number!!";
        return Math.sqrt(a)}

    power(a) {return Math.pow(a)}

    factorial(a) {
        if (a < 0) return "factorial of a negative number is not defined.";
        let result =1;
        for (let i = 1; i<a+1; i++) {
            result = result * i;
        }
        return result;
    }
}

module.exports = Calculator;