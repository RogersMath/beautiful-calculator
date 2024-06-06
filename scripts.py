from browser import document, alert

def calculate(event):
    event.preventDefault()
    
    num1 = float(document['num1'].value)
    operation = document['operation'].value
    num2 = float(document['num2'].value)
    
    if operation == 'add':
        result = num1 + num2
    elif operation == 'subtract':
        result = num1 - num2
    elif operation == 'multiply':
        result = num1 * num2
    elif operation == 'divide':
        if num2 == 0:
            document['result'].textContent = 'Error: Division by zero'
            return
        result = num1 / num2
    else:
        document['result'].textContent = 'Error: Invalid operation'
        return
    
    document['result'].textContent = f'Result: {result}'

document['calculator-form'].bind('submit', calculate)
