/*• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/
let cantidad: number = Number(prompt("Ingrese la dimención del arreglo"));
let numerosArreglo: number[] = new Array(cantidad);
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
  numerosArreglo[indice] = Number(
    prompt("Ingrese un número para la posición " + indice)
  );
  if (numerosArreglo[indice] > 0) {
    positivos++;
  } else if (numerosArreglo[indice] < 0) {
    negativos++;
  } else {
    ceros++;
  }
}
console.log(
  "Total: " +
    positivos +
    " positivos, " +
    negativos +
    " negativos; " +
    ceros +
    " ceros"
);
