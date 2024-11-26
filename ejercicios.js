function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Solución 1:");
console.log(calcularAreaRectangulo(10, 3)); 
console.log(calcularAreaRectangulo(28, 2)); 
console.log(calcularAreaRectangulo(1, 4));
console.log("///////////////");

/*
Proceso:
Implementé una función que toma dos parámetros, realiza la multiplicación y retorna el resultado.
*/

function contarPalabras(cadena) {
    return cadena.split(" ").length;
}

console.log("Solución 2:");
console.log(contarPalabras("El lenguaje de marcado de hipertexto"));
console.log(contarPalabras("Me gusta la palta"));
console.log(contarPalabras("El espacio la ultima forntera"));
console.log("///////////////");

/*
Utilicé el método `split(" ")` que divide una cadena en un arreglo de palabras separadas por espacios.
Finalmente, simplemente conté la cantidad de palabras con `length`.
*/

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("Solución 3:");
console.log(invertirCadena("Adios"));
console.log(invertirCadena("MarDelPlata"));
console.log(invertirCadena("arte"));
console.log("///////////////");

/*
Para invertir la cadena, la dividí en caracteres usando `split("")`.
Luego utilicé `reverse()` para invertir el orden y `join("")` para unir los caracteres en una nueva cadena.
*/

function esPalindromo(cadena) {
    const invertida = cadena.split("").reverse().join("");
    return cadena === invertida;
}

console.log("Solución 4:");
console.log(esPalindromo("amanecer"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("rio"));
console.log("///////////////");

/*
Invierto la cadena usando el método del ejercicio anterior y comparo la original con la invertida.
Si son iguales, devuelvo `true`; de lo contrario, `false`.
*/

function calcularEdadCanina() {
    let edadPerro = prompt("Ingresa la edad de tu perro:");
    edadPerro = parseInt(edadPerro);
    if (!isNaN(edadPerro)) {
        let edadHumana = edadPerro * 7;
        alert(`Tu perro tiene ${edadHumana} años humanos.`);
    } else {
        alert("Por favor, introduce un número válido.");
    }
}
calcularEdadCanina();

/*
Recibo la edad del perro como parámetro, la multiplico por 7 y muestro el resultado en un mensaje.
*/