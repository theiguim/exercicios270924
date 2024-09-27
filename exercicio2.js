function fibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b < num) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;
}

let number = parseInt(process.argv[2]);

if (isNaN(number)) {
    return console.log("Preencha um número válido.");
}

if (fibonacci(number)) {
    console.log(`O número ${number} pertence à sequência.`);
} else {
    console.log(`O número ${number} não pertence à sequência.`);
}