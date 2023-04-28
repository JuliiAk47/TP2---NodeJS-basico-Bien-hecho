import {concatInvert,concatOnly} from './manejo-strings.js'
import { division, multiplicacion, resta, suma, PI } from './matematica.js';
import { alumno} from './alumnos.js';
let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";


let textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

console.log("La suma de 5 + 2 es ", suma(5,2));
console.log("La resta de 7-2 es ", resta (7,2));
console.log("La cuenta 2 * 2 es ", multiplicacion(2,2));
console.log("Cociente de 4/2 es ", division(4,2));

let alumno1 = new alumno("pedro2233", "46553378");
let alumno2 = new alumno("juencho8", "37785442");

console.log("Alumno 1 Username: ", alumno1.username);
console.log("Alumno 1 DNI: ", alumno1.DNI);
console.log("Alumno 2 Username: ", alumno2.username);
console.log("Alumno 2 DNI: ", alumno2.DNI);