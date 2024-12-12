class Calculator{
    add(a,b) {return a + b}

    sub(a,b) {return a - b}

    multi(a,b) {return a * b}

    dev(a,b) {if (b === 0) return "can't devide by 0!";
        return a / b}

    squareRoot(a) {if (a < 0) return "Cannot calculate square root of a negative number!!";
        return Math.sqrt(a)}

    power(a,b) {return Math.pow(a,b)}
}

module.exports = Calculator;