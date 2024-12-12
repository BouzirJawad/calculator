const readline = require(`readline`);
const calculator = require(`./cal`);
const calc = new calculator();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1, num2, result;

function calculate(num1, num2, operator) {
    switch (operator) {
        case '1':
            return calc.add(num1,num2);
        case '2':
            return calc.sub(num1,num2);
        case '3':
            return calc.multi(num1,num2);
        case '4':
            return calc.dev(num1,num2);
        case '5':
            return calc.power(num1);
        case '6':
            return calc.squareRoot(num1);
        case '7':
            return calc.factorial(num1);
        default:
            return "invalid operator";
    }
}

function Calculator() {
    
console.log("Calculatooooor!!!!");

rl.question("Enter a number: (or type 'exit' to quit.) \n", (firstNum) => {
    if (firstNum.toLowerCase() === 'exit') {
        console.log("Exiting... !");
        rl.close();
        return;
    }

    num1 = Number(firstNum);

    rl.question("Choose an operator: \n 1. (+)\n 2. (-)\n 3. (*)\n 4. (/)\n 5. (power)\n 6. (square root)\n 7. (factorial)\n", (operator) => {
    
    if (operator === '6') {
        result = calculate(num1, num2, operator);
        console.log(`The result: ${result}`);
        Calculator();
    }
    else if (operator === '7') {
        result = calculate(num1, num2, operator);
        console.log(`The result: ${result}`);
        Calculator();
    }

    else{
        rl.question("Enter the second number: ", (secNum) => {
            num2 = Number(secNum);
            result = calculate(num1, num2, operator);
            console.log(`The result: ${result}`);
            Calculator();
        });
    }
    });
});
}

Calculator();