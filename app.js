// Iterare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Debug: stampare il numero corrente
    console.log(`Numero: ${i}`);

    // Controllare se i è multiplo di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} è multiplo di 3 e 5: FizzBuzz`);
    }
    // Controllare se i è multiplo di 3
    else if (i % 3 === 0) {
        console.log(`${i} è multiplo di 3: Fizz`);
    }
    // Controllare se i è multiplo di 5
    else if (i % 5 === 0) {
        console.log(`${i} è multiplo di 5: Buzz`);
    }
}
