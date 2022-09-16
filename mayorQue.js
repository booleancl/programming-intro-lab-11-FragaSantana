let num1 = window.prompt("Ingresa tu primero numero: ")
let num2 = window.prompt("Ingresa tu segundo numero: ")


if (num1 > num2) {
    document.write("<p>El numero mayor es = " + num1 + "</p>")
} else if (num1 < num2) {
    document.write("<p>El numero menor es = " + num1 + "</p>")
} else if (num1 == num2) {
    document.write("<p>Los numeros son iguales </p>")
}