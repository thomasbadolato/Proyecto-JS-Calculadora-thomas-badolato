let continuar = true;

while (continuar) {

  let Hola = prompt("Bienvenido a la Exocalculadora! estás listo para realizar un calculo? ")  
  let num1 = prompt("Ingresa el primer número:");
  let num2 = prompt("Ingresa el segundo número:");
  let operacion = prompt("Ingrese la operación que desea realizar (+ para sumar , - para restar, * para multiplicar, / para dividir):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingresa valores numéricos validos.");
  } else {
    let resultado;
    switch (operacion) {
      case "+":
        resultado = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        resultado = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        resultado = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        resultado = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        alert("La operación ingresada no es válida.");
    }

    if (resultado !== undefined) {
      alert("El resultado es: " + resultado);
      let respuesta = prompt("¿Realizamos otro calculo? (s/n)");
      if (respuesta.toLowerCase() !== "n") {
        continuar = true;
      } else {
        alert("¡Gracias por usar a la ExoCalculadora!"); // Agregamos el símbolo "Se completo" para indicar al usuario que se ha completado la operación.
        
      }
    }
  }
}
