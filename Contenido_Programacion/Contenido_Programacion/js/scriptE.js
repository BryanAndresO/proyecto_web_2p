let preguntas = [
    "¿Qué es un algoritmo?",
    "¿Cuál de las siguientes es una operación aritmética básica en algoritmos?",
    "¿Qué se necesita para usar una condicional en un algoritmo?",
    "¿Cuál es el propósito de un ciclo 'while'?",
    "¿Qué hace un ciclo 'for'?",
    "¿Cómo se calcula el factorial de un número?",
    "¿Qué función realiza el algoritmo que cuenta los caracteres de una cadena?",
    " ¿Qué son los operadores de comparación?",
    "Qué permite tomar decisiones en un algoritmo",
    "¿Qué se necesita para hacer un algoritmo?"
];

let correcta = [
    0, 2, 1, 1, 2, 0, 1, 1, 1, 3
];

let opciones = [
    ["Un conjunto de instrucciones que resuelven un problema o realizan una tarea.",
     "Un proceso matemático para sumar números.",
     "Una fórmula matemática.",
     "Un tipo de base de datos."],
    ["Leer datos.", "Comparar números.", "Sumar dos números.", "Ninguna de las anteriores."],
    ["Un número entero.", "Una condición que puede ser verdadera o falsa.", "Un ciclo repetitivo.", "Una variable de tipo string."],
    ["Ejecutar un bloque de código un número específico de veces.",
     "Repetir un bloque de código mientras una condición sea verdadera.",
     "Ejecutar un código solo una vez.",
     "Ninguna de las anteriores."],
    ["Ejecuta un bloque de código mientras se cumpla una condición.", 
     "Permite realizar una acción solo una vez.", 
     "Ejecuta un bloque de código un número fijo de veces.", 
     "Hace una comparación entre valores."],
    ["Se multiplican todos los números hasta llegar al número n.", 
     "Se suman todos los números hasta llegar al número n.",
     "Se restan todos los números hasta llegar a 1.", 
     "Se divide el número n entre sus divisores."],
    ["Sumar los caracteres de la cadena.",
     "Contar la cantidad de caracteres en la cadena.",
     "Buscar la posición de un carácter específico.",
     "Invertir la cadena."],
     [ "Son operadores que permiten realizar operaciones matemáticas avanzadas.",
        "Son símbolos usados para comparar dos valores y determinar relaciones como igualdad o diferencia.",
        "Son operadores exclusivos para trabajar con texto en programación.",
        "Son comandos utilizados para definir variables en un lenguaje de programación."],
    ["Operaciones básicas", 
        "Condicionales", 
        "Ciclos", 
        "Funciones Matemáticas" ],
    ["Orden",
        "Instrucciones claras",
        "Un problema que resolver",
        "Todas las anteriores" ]

    
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
    window.location.href = "portfolio-details.html"; // Aquí se coloca la ruta del archivo
}
function mostrarSolucionario() {
    // Ocultar la pantalla final
    document.getElementById("pantalla-final").style.display = "none";

    // Mostrar la pantalla del solucionario
    document.getElementById("pantalla-solucionario").style.display = "block";

    // Generar el contenido del solucionario
    let contenido = "";
    for (let i = 0; i < preguntas.length; i++) {
        contenido += `<p><strong>Pregunta ${i + 1}:</strong> ${preguntas[i]}</p>`;
        contenido += `<p><strong>Respuesta correcta:</strong> ${opciones[i][correcta[i]]}</p>`;
        contenido += "<hr>";
    }

    // Mostrar el contenido en el div del solucionario
    document.getElementById("contenido-solucionario").innerHTML = contenido;
}

function cerrarSolucionario() {
    // Ocultar la pantalla del solucionario
    document.getElementById("pantalla-solucionario").style.display = "none";

    // Volver a mostrar la pantalla final
    document.getElementById("pantalla-final").style.display = "block";
}
