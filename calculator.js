import inquirer from 'inquirer';
async function getCalculatorInput() {
    const a = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter first number:',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter second number:',
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Enter operator:',
            choices: ['+', '-', '*', '/', '%', '^'],
        }
    ]);
    if (!Number.isInteger(a.num1) || !Number.isInteger(a.num2)) {
        throw new Error("Invalid input\nENter integers...");
    }
    if (!['+', '-', '*', '%', '/', '^'].includes(a.operator)) {
        throw new Error('Unsupported operator.');
    }
    return {
        num1: a.num1,
        num2: a.num2,
        operator: a.operator,
    };
}
async function performCalculation(calculator) {
    switch (calculator.operator) {
        case '+':
            return calculator.num1 + calculator.num2;
        case '-':
            return calculator.num1 - calculator.num2;
        case '*':
            return calculator.num1 * calculator.num2;
        case '%':
            return calculator.num1 % calculator.num2;
        case '/':
            return calculator.num1 / calculator.num2;
        case '^':
            return calculator.num1 ** calculator.num2;
        default:
            throw new Error('Unsupported operator.');
    }
}
async function main() {
    const calculator = await getCalculatorInput();
    const result = await performCalculation(calculator);
    console.log(`The result is: ${result}`);
}
main();
