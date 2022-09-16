let num1 = window.prompt("Ingresa tu primero numero: ")
let num2 = window.prompt("Ingresa tu segundo numero: ")
let operation = window.prompt("Que operación desea realizar?")
let result = 0

if (operation == '+') {
    result = Number(num1) + Number(num2)
} else if (operation == '-') {
    result = Number(num1) - Number(num2)
} else if (operation == '*') {
    result = Number(num1) * Number(num2)
} else if (operation == '/') {
    result = Number(num1) / Number(num2)
}


document.write("<p>El resultado es = " + result + "</p>")