let preguntas = [
    "¿Qué es un algoritmo?",
    "¿Cuál de las siguientes es una operación aritmética básica en algoritmos?",
    "¿Cuál es el resultado de este algoritmo? - Leer a = 5, b = 3. Calcular suma = a + b. Imprimir suma",
    "¿Qué se necesita para usar una condicional en un algoritmo?",
    "¿Cuál es el propósito de un ciclo 'while'?",
    "Si el estado del tiempo es 'lloviendo', ¿qué imprime este algoritmo? - Leer estado_del_tiempo. Si estado_del_tiempo == 'lloviendo'. Imprimir 'Lleva paraguas'. Sino. Imprimir 'No es necesario llevar paraguas'.",
    "¿Cuál es la salida de este algoritmo? - Leer n = 5. Si n > 0 imprimir 'El número es positivo'. Si no, imprimir 'El número es negativo'.",
    "¿Qué hace un ciclo 'for'?",
    "¿Qué imprime este algoritmo? - Leer n = 6. Inicializar suma = 0. Para i desde 1 hasta n hacer: Sumar i a suma. Imprimir suma.",
    "¿Cómo se calcula el factorial de un número?",
    "¿Cuál es el número en la posición 5 de la serie de Fibonacci?",
    "¿Qué función realiza el algoritmo que cuenta los caracteres de una cadena?",
    "¿Cuál de las siguientes es una propiedad de los arreglos?",
    "En este algoritmo, ¿cuál es el valor máximo en el arreglo [3, 5, 1, 7, 2]?",
    "¿Qué hace este algoritmo? - Leer arreglo = [10, 20, 30, 40]. Para cada elemento en arreglo hacer: Imprimir el elemento.",
    "¿Cuál es el objetivo de ordenar un arreglo?"
];

let correcta = [
    0, 2, 1, 1, 1, 0, 1, 2, 2, 0, 2, 1, 2, 3, 1
];

let opciones = [
    ["Un conjunto de instrucciones que resuelven un problema o realizan una tarea.",
     "Un proceso matemático para sumar números.",
     "Una fórmula matemática.",
     "Un tipo de base de datos."],
    ["Leer datos.", "Comparar números.", "Sumar dos números.", "Ninguna de las anteriores."],
    ["2", "8", "15", "53"],
    ["Un número entero.", "Una condición que puede ser verdadera o falsa.", "Un ciclo repetitivo.", "Una variable de tipo string."],
    ["Ejecutar un bloque de código un número específico de veces.",
     "Repetir un bloque de código mientras una condición sea verdadera.",
     "Ejecutar un código solo una vez.",
     "Ninguna de las anteriores."],
    ["Lleva paraguas", "No es necesario llevar paraguas", "Error de sintaxis", "No hace nada"],
    ["El número es negativo", "El número es positivo", "El número es cero", "Error, no se ejecuta"],
    ["Ejecuta un bloque de código mientras se cumpla una condición.", 
     "Permite realizar una acción solo una vez.", 
     "Ejecuta un bloque de código un número fijo de veces.", 
     "Hace una comparación entre valores."],
    ["15", "6", "21", "0"],
    ["Se multiplican todos los números hasta llegar al número n.", 
     "Se suman todos los números hasta llegar al número n.",
     "Se restan todos los números hasta llegar a 1.", 
     "Se divide el número n entre sus divisores."],
    ["0", "3", "5", "8"],
    ["Sumar los caracteres de la cadena.",
     "Contar la cantidad de caracteres en la cadena.",
     "Buscar la posición de un carácter específico.",
     "Invertir la cadena."],
    ["Los arreglos no pueden almacenar más de un tipo de dato.",
     "Los índices en los arreglos comienzan desde 1.",
     "Los elementos de un arreglo tienen posiciones específicas, comenzando desde el índice 0.",
     "Los arreglos siempre contienen solo números."],
    ["1", "2", "5", "7"],
    ["Imprime el valor máximo del arreglo", 
     "Imprime cada número del arreglo", 
     "Imprime la suma de los elementos", 
     "No imprime nada"],
    ["Cambiar el orden de los elementos al azar.", 
     "Organizar los elementos de acuerdo a un criterio específico (por ejemplo, de menor a mayor).", 
     "Reemplazar los elementos por sus índices.", 
     "Ninguna de las anteriores."]
];

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();
}

function cargarPregunta() {
    // Verificar si hay preguntas disponibles
    if (posActual < preguntas.length) {
        limpiarOpciones();
        document.getElementById("pregunta").innerHTML = preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    } else {
        setTimeout(terminarJuego, 1000);
    }
}

function limpiarOpciones() {
    let opcionesDiv = document.querySelectorAll(".opcion");
    opcionesDiv.forEach(opcion => {
        opcion.classList.remove("opcionAcertada", "opcionNoAcertada");
    });
}

function comprobarRespuesta(opcionSeleccionada) {
    if (opcionSeleccionada === correcta[posActual]) {
        cantidadAcertadas++;
        document.getElementById("op" + opcionSeleccionada).classList.add("opcionAcertada");
    } else {
        document.getElementById("op" + opcionSeleccionada).classList.add("opcionNoAcertada");
    }

    posActual++;

    if (posActual < preguntas.length) {
        setTimeout(cargarPregunta, 1000);
    } else {
        setTimeout(terminarJuego, 1000);
    }
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}
function salir() {
    window.location.href = "indexContenido.html"; // Aquí se coloca la ruta del archivo
}

