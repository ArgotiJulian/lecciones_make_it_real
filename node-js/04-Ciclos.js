let i = 0;
while (i < 10) // El ciclo se repite hasta que la expresion sea falsa
{
    console.log("Hola mundo");
    i = i + 1; // Autoincrementa variable para evitar bucle infinito 
}

for (let j = 0; j < 10; j++) // El ciclo se repite hasta que j llegue a 10
{
    console.log("Hola mundo");
}

for (let j = 10; j <= 20; j = j + 2) // El Inicio del ciclo puede ser diferente a 1 y incremento puede ser escalonado
{
    console.log(j);
}

i = 10;
while (i > 0) //El Ciclo Puede Ser Tambien Descendente 
{
    console.log(i);
    i--;
}

for (let j = 10; j >= 0; j = j - 2) // El Inicio del ciclo puede ser diferente a 1 y Descenso scalonado
{
    console.log(j);
}