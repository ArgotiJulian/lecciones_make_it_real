/*Creacion Funcion*/
function hello() {
    console.log("Hola Mundo"); // No Recibe Nada - No Envia Nada
}

function hello2(name) {
    console.log("Hola " + name); // Recibe Parametro - No Envia Nada
}

function hello3(name) {
    return "Hola " + name; // Recibe Parametro - Retorna parametro
}

function bmi(weight, height) {
    return weight / height ** 2 // Ejemplo de FUncion
}

/* Invocacion de Funciones*/
hello();// Funcion Sin Envio de Parametros 
hello2("Germán"); // Funcion con Envio de Paramentros 
console.log(hello3("Laura")); // Funcion con envio de parametros y Retornando paramentros
console.log("Tu IMC es: " + bmi(80, 1.8)); // Funcion con envio de parametros y Retornando paramentros Ejemplo 1 


