/*
Esta es la forma de escribir comentarios largos
*/

//Esta es la forma de agregar comentarios cortos 

/*
Cadena de Caracteres
*/
console.log("Hola Mundo! Estoy Aprendiendo");   //Imprime en consola lo que esta dendro de los ()
console.log("las Cadenas de caracteres deben estar encerradas en Comillas Dobles o Sencillas");   // "Texto" o 'Texto'
console.log("Para " + "Concatenar " + "Cadenas " + "Se debe " + "utilizar " + "el simbolo " + "+"); // Concatenar Cadenas de Texto

/*
Numero 
*/
console.log("los numeros NO se encierran en '' y se pueden hacer las operaciones normales 1+2=" + (1 + 2)); //Realizar Operaciones y Concatenar Texto con Numero
console.log("los numeros con comillas se concatenan " + "1" + "2" + " en cambio sin comillas se suman " + (1 + 2)); // Diferenciar los numeros de los caracteres

/*
Booleanas
*/

console.log("5 es Mayor que 3? " + (5 > 3));
console.log("5 es Mayor Igual que 3? " + (5 >= 3));
console.log("4 es Menor que 4? " + (4 < 4));
console.log("4 es Menor Igual que 4? " + (4 <= 4));
console.log("2 es Igual a 2? " + (2 === 2));
console.log("2 es Diferente a 2? " + (2 !== 2));
console.log("El operador == Convierte una cadena de texto a numero (2=='2') " + (2 == "2"));
console.log("El operador === Compara datos del mismo tipo (2==='2') " + (2 === "2"));

/*
Variables
*/

let texto = "Julian";
let numero = 1;
console.log("Hola " + texto);//Concatenar Cadena de Texto con Variable String
console.log("Hola " + numero);//Concatenar Cadena de Texto con Variable Numero
console.log(1 + texto);//Concatenar Numero con variable string
console.log(1 + numero);//Concatenar Numero con variable numero

let lado = 5;
console.log("El perímetro de un cuadrado de lado 5 es " + (lado * 4));
console.log("El área de un cuadrado de lado 5 es " + (lado * 5));

let tipovar = "Texto"; //Asignacion Variable Tipo String 
console.log("Aqui vemos la Variable tipo String " + tipovar);
tipovar = 2; //Asignacion Variable Tipo Numero
console.log("Aqui vemos la Variable tipo numero " + tipovar);
tipovar = true; //Asignacion Variable tipo Booleana
console.log("Aqui vemos la Variable tipo Booleana " + tipovar);

let incrementar = 0;
console.log("las variables numericas se pueden autoincrementar con el comando ++ ");
console.log("incrementar = " + incrementar);
incrementar++; // Auto Incrementar su valor 
console.log("incrementar ++ = " + incrementar);
incrementar++;
console.log("incrementar ++ = " + incrementar);

