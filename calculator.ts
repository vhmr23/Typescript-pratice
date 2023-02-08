const operations = ['multiply', 'add', 'subtract', 'divide'];

// creamos un type para que solo acepte los valores que queremos de operaciones
type Operation = 'multiply' | 'add' | 'subtract' | 'divide';

const calculator = (a: number, b: number, operation: Operation): number => {

    if(operation === 'multiply') {
        return (a * b);
    } else if(operation === 'add') {
        return (a + b);
    } else if(operation === 'subtract') {
        return (a - b);
    } else if(operation === 'divide') {
        if(b === 0) {
            throw new Error('you can\'t divide by 0');
        }
        return (a / b);
    }

    throw new Error('operation not supported');
}

console.log(calculator(7, 2, 'add'))