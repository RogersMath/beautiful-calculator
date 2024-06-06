document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const operation = document.getElementById('operation').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Error: Please enter valid numbers';
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').innerText = 'Error: Division by zero';
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerText = 'Error: Invalid operation';
            return;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
});
