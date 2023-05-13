/*  
    CADENAS DE TEXTOS
        1.  Se puede Obtener la longitud de una cadena de texto como variables o constantes con el metodo length
        2.  Se puede obtener los caracteres de una posición específica igual que con los arreglos
        3.  Se puede recorrer una cadena de texto con la funcion for 
        4.  Se puede dividir una cadena de texto con el metodo split
            a. el argumento que se ingrese es el condicional para dividir la cadena
        5.  Se puede unir varias cadenas de texto con el metodo join
            a. el argumento que se ingrese en el condicional quedara en la union de las dos cadenas 
            b. si se omite el argumento las cadenas se uniran por comas (,)
        6. Se puede convertir una cadena en minusculas con el metodo toLowerCase()
        7. Se puede convertir una cadena en MAYUSCULAS con el metodo toUpperCase()
        8. Se puede saber si la cadena de texto comienza con una sub cadena especifica con la funcion startsWith()
        9. Se puede saber si la cadena de texto termina con una sub cadena especifica con la funcion endWith()
        10. Se puede anidar los metodos en caso de que no estemos seguros si la cadena esta en mayuscula o minuscula
        11. Se puede obtener una porcion de la cadena con el metodo substr
            a. El metodo substr recibe dos argumentos 
            b. El primer Argumento Selecciona la posicion donde quiero comenzar la extraccion
            c. El segundo Argumento indica cuandas letras voy a extraer
            d. En caso de omitir el Segundo argumento se extraera toda la cadena desde la posicion indicada en el argumento 1
        12. Se Puede obtener una porcion de la cadena con el metodo substring
            a.  El metodo substring recibe dos argumentos
            b.  El primer Argumento Selecciona la posicion donde quiero comenzar la extraccion
            c.  El Segundo Argumento Selleciona la posicion final donde quiere terminar la extraccion
        13. Se puede remplazar una porcion de la cadena con el metodo replace
            a.  El metodo replace recibe dos argumentos
            b.  El primer argumento la porcion de la cadena que quiero comabiar
            c.  El Segundo argumento la porcion nueva por la que quiere remplazar
        14. Se puede validar si la cadena continene sub cadenas con el metodo includes
            a. El argumento que recibe el metodo es el la subcadena que quiero validar
                
*/
let cadena = "longitud";

console.log("hola Mundo".length); //Obtener Longitud de una Cadena de Texto
console.log(cadena.length); //Obtener Longitud de una variable de Texto
console.log(cadena[1]); //Obtener una caracter especifico de una variable

let str = "Hola Mundo";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

console.log("prueba,separar,cadenas".split(",")); //Separando cadena de texto con argumento coma(,)
console.log(["Hola", "mundo"].join("-")); //Uniendo Cadenas con argumento para espacio
console.log(["Hola", "mundo"].join()); //Uniendo Cadenas Sin argumento
console.log("Hola".toLowerCase()); //Convierte la cadena en Minuscula
console.log("Hola".toUpperCase()); //Convierte la cadena en Mayuscula
console.log("Hola Mundo".startsWith("Hola")); //Verifica si la cadena empieza con Hola
console.log("Hola Mundo".endsWith("Mundo")); //Verifica si la cadena termina con Mundo
console.log("Hola Mundo".toLowerCase().startsWith("hola")); //Convierte en minuscula y verifica si la cadena empieza por Hola
console.log("Hola Mundo".substr(0, 4)); //Extraccion de Texto con inicio y Fin
console.log("Hola Mundo".substr(5)); //Extraccion Sin definir fin
console.log("Bienvenido!".substr(4, 6)); // Extraccion Substr
console.log("Bienvenido!".substring(4, 6)); // Extraccion substring
console.log("Hola Mundo".replace("Mundo", "Germán")); //Remplazar porcion de la cadena de texto
console.log("Hola Mundo".includes("Hola")); // Busqueda Subcadena
