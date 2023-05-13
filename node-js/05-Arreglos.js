/*  
    ARREGLOS
        1.  Un arreglo es una lista ordenada de elementos de cualquier tipo 
        2.  Los elementos del arreglo se envuelven entre corchetes y se separan con coma
        3.  para obtener un elemento del arreglo es [n] donde n es la posición empezando en 0.
        4.  Para obtener el ultimo elemento del arreglo se debe obtener la longitud de este y restarle 1
        5.  Para Recorrer un arreglo se debe utilizar un ciclo for
        6.  Se Puede Remplazar datos de los elementos seleccionando el numero del elemento
        7.  Se Puede Agregar nuevos elementos en la posicion final con el metodo Push
        8.  Se Puede Agregar o Eliminar elementos en cualquier posicion con el metodo splice
            a.  Agregar
                i.      Debes pasarle 3 o más argumentos. 
                ii.     El primer argumento es la posición en la que quieres insertar el elemento. 
                iii.    La segunda posición debe estar en 0. 
                iV.     Los demás argumentos son los elementos que deseas insertar en el arreglo.
            b.  Eliminar
                i.      Recibe uno o dos argumentos cuando quieres eliminar elementos
                ii.     El Primer Argumento es la posicion en la que quieres comenzar a eliminar.
                iii.    El Segundo Argumento la cantidad de elementos a eliminar
                iv.     Si omites el segundo argumento se eliminarán todos los elementos
        9.  Se puede Obtener la longitud del arreglo con el metodo length
*/
function recorrer(arreglo) {
    for (let i = 0; i < arreglo.length; i++) //Recorrer un Arreglo
    {
        console.log(arreglo[i]);
    }
}

let array = [1, "Pedro", true, false, "Juan"]; // Lista con Numeros, Textos y Booleana
console.log(array[0]); // Obtener un Elemento
console.log(array[array.length - 1]);//Obtener el ultimo Elemento
recorrer(array);
array[1] = "Julian"; //Remplazar Valor Elemento 
recorrer(array);
array.push(100); // Agrega Elementos con valores en la posicion final
recorrer(array);
array.splice(2, 0, "Felipe"); // Agrega Elementos con valores en la posicion indicada en el Segundo Argumento es decir 2
recorrer(array);
array.splice(0, 1); // Eliminar Elementos
recorrer(array);
console.log(array.length); //Obtener Longitud Cadena


