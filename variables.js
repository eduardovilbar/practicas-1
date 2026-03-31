//alert("hola mundo");

//comentarios de una sola línea 
/*Comentarios 
multilinea */
//Lenguaje de programación 
//Lenguaje interpretado 
//Orientado a objetos 
//Tipado débil
//Lenguaje dinámico
/*Tipos de datos y variables
Variables : Es un espacio de memoria dentro de mi programa al que le voy a asignar un tipo de dato
String : Cadenas de texto, se pueden representar con comillas dobles, simples o backticks
Number : Numero 
Boolean : True or False, representa 0 y 1
Undefined : No definido
Null : Nulo
Camelcase : Convfención de escritura datosVariablesPrimitivos */
/*Tipos de Variables 
Scoope : Alcance 
Var : Tiene alcance global
Let : Tiene un alcance local 
Const : Constante
*/
/*Operadores aritmeticos (+,-,*,/,%,++,--)
Operadores de asignación (=)
Operadores de comparación (<,>,<=,>=,==,===,!=,!==)
Operadores lógicos (&,||,!) */
/*Condicionales : Es una sentencia que nos permite validar, se repite y solo nos da true en caso de que se cumpla la condición
if, else if, else */

//console.log("hola mundo");

//ejemplos de variables
let nombreProducto = "barbie Programadora";
let precio = "285";
let disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);

//concatenacion

console.log(`la ${nombreProducto} cuesta ${precio}`);

//conversion de tipo

console.log(typeof(precio));

let precioCambio = Number(precio);

console.log(typeof(precioCambio));

// condicion envio gratis

let totalCompra = 1050;

if (totalCompra > 1000){console.log("tu envio es gratis");

} else {
    console.log ("el envio tiuene un costo extra");
}

//prueba1
//pueba 2
// prueba 3
