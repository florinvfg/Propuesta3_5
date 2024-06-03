// Cuando la página ha cargado completamente, se ejecuta esta función
window.onload = function () {
    // Crear un array con los múltiplos de 5 y las condiciones especificadas
    let array = crearArray();
    // Mostrar el array en una lista en la página
    mostrarArray(array);
    // Realizar algunas operaciones adicionales con el array
    practica(array);
}

// Función para crear un array de 10 elementos con múltiplos de 5
function crearArray() {
    let array = []; // Inicializar un array vacío
    let aleatorio; // Variable para almacenar los números aleatorios

    // Crear un bucle para llenar el array con 9 elementos aleatorios
    for (let i = 1; i < 10; i++) {
        aleatorio = parseInt(Math.random() * 21) * 5; // Generar un múltiplo de 5 aleatorio entre 0 y 100
        array.push(aleatorio); // Agregar el número generado al array
    }

    // Asegurarse de que el primer elemento sea mayor o igual a 50
    while (array[0] < 50) {
        array[0] = parseInt(Math.random() * 21) * 5; // Reemplazar el primer elemento hasta que sea >= 50
    }

    // Asegurarse de que el último elemento sea menor o igual a 50
    while (array[9] > 50) {
        array[9] = parseInt(Math.random() * 21) * 5; // Reemplazar el último elemento hasta que sea <= 50
    }

    console.log(array); // Mostrar el array en la consola para verificar
    return array; // Devolver el array generado
}

// Función para mostrar el array en una lista en la página
function mostrarArray(array) {
    let lista = document.querySelector(".lista"); // Seleccionar el elemento de la lista en el DOM
    lista.style.listStyle = "square"; // Cambiar el estilo de la lista a cuadrados

    // Recorrer el array y crear un elemento de lista por cada número
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement("li"); // Crear un nuevo elemento de lista
        item.textContent = array[i]; // Establecer el contenido del elemento de lista como el número del array
        lista.appendChild(item); // Agregar el elemento de lista a la lista en el DOM
    }
}

// Función para realizar algunas operaciones adicionales con el array
function practica(array) {
    let numero = 55; // Número a buscar en el array
    let resultado = array.indexOf(numero); // Buscar la primera aparición del número en el array
    console.log(resultado); // Mostrar el índice del número en la consola (o -1 si no se encuentra)

    let ultimoResultado = array.lastIndexOf(numero); // Buscar la última aparición del número en el array
    console.log(ultimoResultado); // Mostrar el índice del número en la consola (o -1 si no se encuentra)
}


