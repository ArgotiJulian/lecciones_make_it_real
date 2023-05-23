/* 
    OBJETOS 
        1.  Es un conjunto de propiedades en donde cada propiedad está compuesta de una llave y un valor
        2.  Un objeto se define utilizando corchetes {}
        3.  Las propiedades se separan con coma (,)
        4.  Las llaves y valores se separan con dos puntos (:)
        5.  En un objeto podemos almacenar cualquier tipo de información que requiera esa asociación llave-valor.
        6.  El valor de una propiedad puede ser cualquier tipo de datos números, cadenas de texto, booleanos, arreglos e incluso funciones y otros objetos.
        7.  Se puede obtener el valor de una lleva de dos formas
            a.  Utilizaremos el nombre de la variable, seguido de punto, seguido del nombre de la llave
            b.  Utilizando corchetes cuadrados ([])
        8.  Se puede agregar nuevos objetos a las propiedades utilizando el nombre de la variable, seguido de la nueva propiedad e igualamos con el valor de la propiedad
        9.  Se puede modificar las propiedades utilizando el nombre de la variable, seguido de la propiedad e igualamos con el valor nuevo de la propiedad
        10. Para eliminar una propiedad de un objeto utiliza el operador delete
        11. Existen varias formas de recorrer las propiedades de un objeto en JavaScript.
            a. hasOwnProperty
                i.  Despues se explicara la primera forma  
            b. Object.keys 
                i.      Retorna un arreglo con las llaves del objeto que almacenamos en la variable llaves. 
                ii.     Después iteramos por todas las llaves 
                iii.    Utilizamos cada llave para obtener de forma dinámica, el valor de esa llave en el objeto.
    METODOS
        12. El valor de una propiedad de un objeto puede ser una función
        13. A una función de un objeto se le llama método 
        14. Los métodos pueden utilizar otras propiedades del objeto utilizando la palabra clave this
        15. Es posible mezclar arreglos y objetos para crear estructuras complejas


    


*/

let persona = {             //"persona" es el nombre del Objeto
    nombre: "Germán",       //"nombres es la llave  y "German" es el valor
    apellido: "Escobar",    // Se separa la llave y el valor por : 
    edad: 35,               // Se separa las propiedades con las , 
    estatura: 1.8
}

console.log(persona.nombre);    // imprime Germán
console.log(persona.apellido);  // imprime Escobar
console.log(persona.edad);      // imprime 35
console.log(persona.estatura);  // imprime 1.8
let key = "nombre";           // se utiliza una variable para seleccionar la llave dinamicamente 
console.log(persona[key]);    // Segunda forma de mostrar valores de las propiedades 
persona.peso = 70;              // Se crea una nueva propiedad con llave peso y valor 70
persona.peso = 65;              // Se mofifica el valor de la llave peso y con valor 65
delete persona.peso;            // Se elimina la propiedad peso 

for (let llave in persona) {    // Fomra 01 para recorrer un arreglo            
    if (persona.hasOwnProperty(llave)) { //hasOwnProperity devuelve un booleano indicando si el objeto tiene la propiedad especificada
        console.log(persona[llave])
    }
}

let llaves = Object.keys(persona);  // Forma 02 para recorrer un arreglo
for (let i = 0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log(persona[llave]);
}

let person = {
    name: "Pedro",
    sayHi: function () {        // Se Nombra la propiedad y se crea la funcion
        console.log("Hola, me llamo " + this.name); // la forma de llamar una propiedad del objeto es con la palabra this
    }
}

person.sayHi();                 //Forma de Llamar la funcion de un objeto 


/* 
En este ejemplo hemos creado un arreglo de objetos. 
Cada objeto representa un producto y una de sus llaves 
(categories) contiene a su vez un arreglo.
*/
let products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(product.name);
    console.log("  Id: " + product.id);
    console.log("  Precio: " + product.price);
    console.log("  Categorías: " + product.categories.join(", "));
}

