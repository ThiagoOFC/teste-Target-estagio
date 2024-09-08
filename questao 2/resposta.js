const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function SequanciaFibo(n) {
    let a = 0, b = 1;
    let sequence = [a, b];

    while (b < n) {
        let temp = a + b;
        a = b;
        b = temp;
        sequence.push(b);
    }

    return sequence;
}

function eFibonacci(n) {
    let sequence = SequanciaFibo(n);
    if (sequence.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

rl.question("Informe um número: ", (input) => {
    let numero = parseInt(input);

    let resultado = eFibonacci(numero);
    console.log(resultado);

    rl.close();
});
