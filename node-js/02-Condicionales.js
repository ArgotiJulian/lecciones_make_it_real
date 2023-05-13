let num = 1;

/*Cuando la Condicion es Verdadera */
if (true) {
    console.log("Condicion If Verdadero"); //Se Ejecuta si el if es verdadero (True)
}
/*Cuando la condicion es Falso */
if (false) {
    console.log("Condicion If Falso"); //Se Ejecuta si el if es verdadero (True)
}
/*Condicional entre Constante y Constante */
if (1 == 1) {
    console.log("Operacion entre dos datos Genera un Booleana");
}
/*Condicional entre Variable y Constante */
num = 1;
if (1 === num) {
    console.log("Operacion entre una constante y una variable");
}
/*If Else */
num = 8;
if (num < 10) {
    console.log("El número es menor a 10");
} else {
    console.log("El número es igual o mayor a 10");
}
/*Anidando los If*/
num = 11;

if (num < 10) {
    console.log("El número es menor a 10");
} else {
    if (num > 10) {
        console.log("El número es mayor a 10");
    } else {
        console.log("El número es igual a 10");
    }
}

/*Else If*/
num = 10;

if (num < 10) {
    console.log("El número es menor a 10");
} else if (num > 10) {
    console.log("El número es mayor a 10");
} else {
    console.log("El número es igual a 10");
}

/*Condicional Compuesta AND*/
num = 15;

if (num >= 10 && num <= 20) {
    console.log("El número está entre 10 y 20");
}

/*Condicional Compuesta OR*/
let color = "negro";

if (color === "rojo" || color === "negro") {
    console.log("Excelente elección");
}


/*Operador condicional (ternario)*/
num = 10;

num >= 15 ? console.log('Es mayor o igual que 15') : console.log('Es menor que 15');