
function pedirNumero(mensaje) {
  return parseFloat(prompt(mensaje));
}

function calcular(num1, num2, operacion) {
  switch (operacion) {
    case "1": return num1 + num2;
    case "2": return num1 - num2;
    case "3": return num1 * num2;
    case "4": return num1 / num2;
    default: return "Operación no válida";
  }
}

function mostrarResultado(resultado) {
  alert("El resultado es: " + resultado);
  console.log("Resultado: ", resultado);
}

function iniciarCalculadora() {
  let num1 = pedirNumero("Ingrese el primer número:");
  let num2 = pedirNumero("Ingrese el segundo número:");

  let operacion = prompt(
    "Seleccione la operación:\n" +
    "1. Sumar\n" +
    "2. Restar\n" +
    "3. Multiplicar\n" +
    "4. Dividir"
  );

  let resultado = calcular(num1, num2, operacion);
  mostrarResultado(resultado);
}

iniciarCalculadora();
