function generarMultiploDe5Aleatorio() {
    return Math.floor(Math.random() * 21) * 5;
}

function inicializarArray() {
    let array = [];

    // Inicializa el array con 10 múltiplos aleatorios de 5
    for (let i = 0; i < 10; i++) {
        array.push(generarMultiploDe5Aleatorio());
    }

    // Verifica y ajusta el primer elemento hasta que sea >= 50
    while (array[0] < 50) {
        array[0] = generarMultiploDe5Aleatorio();
    }

    // Verifica y ajusta el último elemento hasta que sea <= 50
    while (array[array.length - 1] > 50) {
        array[array.length - 1] = generarMultiploDe5Aleatorio();
    }

    return array;
}

function generarArray() {
    let array = inicializarArray();
    document.getElementById("array").textContent = array.join(", ");
    document.getElementById("requisitos").innerHTML = `
        Primer elemento >= 50: ${array[0] >= 50}<br>
        Último elemento <= 50: ${array[array.length - 1] <= 50}
    `;
}
