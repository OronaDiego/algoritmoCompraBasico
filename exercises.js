// let nombre = prompt("Hola ingresa tu nombre");
// alert("Hola " + nombre + " gracias por ingresar tus datos");

// let numero1 = parseInt(prompt("Ahora necesito que ingreses un numero entero del uno al 10"));
// let numero2 = parseInt(prompt("Ahora necesito que ingreses otro numero entero del uno al 10"));

// let resultado = numero1 + numero2;
// alert("El resultado de la suma de tus dos numeros es: "+ resultado);

// console.log("Gracias " + nombre + " por participar de este ejercicio");







// let num = Number(prompt("Ingresar un numero"))
// if(num > 1000){
//     alert("El numero ingresado es mayor a mil")
// }else{
//     "El numero es menor a mil "
// }

// let nombre = prompt("Ingrese un texto").toLowerCase()
// if(nombre == "hola"){
//     console.log("el texto ingresado es igual a hola");
// }else{
//     console.log("El nombre no es hola, es: "+ nombre);
// }


// let n = Number(prompt("Ingrese un numero"))

// if((n >= 10) && (n <= 50)){
//     alert("El numero ingresado esta entre 10 y 50")
// }else{
//     console.log("El numero no esta en el rango de 10 y 50");
    
// }

// let numero = Number(prompt("Ingrese un numero"))
// for (let i=0; i < numero; i++){
//     let resultado = numero + i;
//     console.log(resultado);
// }


//Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida
// por cada resultado hasta que se ingresa "ESC"

// let texto = prompt("Ingrese una palabra").toUpperCase();
// let textoNuevo = " ";

// while(texto != "ESC"){
//     textoNuevo += texto + " "  ; 
//     alert(textoNuevo)
//     texto = prompt("Ingrese Otra palabra").toUpperCase();
    
// }
// console.log(textoNuevo);





//Pedir un numero por promt y repetir la salida del mensaje "HOLA" la cantidad de 
// veces que el numero ingresado

// let numero = Number(prompt("Ingresá un número"));
// let palabra = prompt("Ingresá una palabra");

// for(let i = 0; i < numero; i++){
//     console.log(palabra);
    
// }



// Calcular el descuento aplicable a una compra según el monto total.

// Pasos:

// Pedir al usuario que ingrese el monto total mediante prompt.
// Almacenar ese monto total en una variable descriptiva.
// Utilizar una estructura if-else para determinar el descuento según el monto total.
// Aplicar el 20% de descuento si el monto es igual o mayor a 1000
// Aplicar el 10% de descuento si el monto es igual o mayor a 500 pero menor a 1000
// Mostrar el resultado en un console.log() o alert().

// let montoTotal = Number(prompt("Ingrese monto para calcular el descuento"))
// let descuento = 0;
// if(montoTotal >= 1000){
//     descuento = montoTotal * 20 / 100;
// }else if((montoTotal >= 500) && (montoTotal < 1000)){
//     descuento = montoTotal * 10 / 100;
// }else{
//     alert("Gracias por su visita")
// }

// console.log(descuento);


// Verificar si un número es par o impar.

// Solicitar al usuario que ingrese un número entero mediante prompt.
// Almacenar el número ingresado en una variable llamada `numero`.
// Utilizar el operador de módulo `%` para calcular el resto de la división de `numero` entre 2.
// Verificar si el resto es igual a 0.
// Si el resto es igual a 0, imprimir en la consola "El número es par".
// De lo contrario, imprimir en la consola "El número es impar".
// let numero = Number(prompt("Ingrese un número entero"))

// if(numero % 2 == 0){
//     console.log("El número ingresado es par");
// }else{
//     console.log("El número ingresado es impar");
// }


// Determinar si una contraseña ingresada es correcta.

// Establecer una contraseña correcta y almacenarla en una variable llamada `contraseniaCorrecta`.
// Solicitar al usuario que ingrese una contraseña.
// Almacenar la contraseña ingresada en una variable llamada `contraseniaIngresada`.
// Comparar si `contraseniaIngresada` es igual a `contraseniaCorrecta`.
// Si las contraseñas son iguales, imprimir en la consola "¡Contraseña correcta! Acceso concedido".
// De lo contrario, imprimir en la consola "Contraseña incorrecta. Acceso denegado".

// let correctPassword = "xxx123xxx";
// let password = prompt("Ingrese una contraseña");

// if(password === correctPassword){
//     alert("Acceso perimitido, Contraseña correcta")
// }else{
//     alert("Acceso denegado, contraseña incorrecta")
//     console.log("Acceso denegado, contraseña incorrecta");
    
// }

// Mismo ejemplo pero con un bucle, permitiendo lanzar nuevamente el prompt
// while(password !== correctPassword){
//     alert("Acceso denegado, contraseña incorrecta")
//     password = prompt("Ingrese una contraseña");
//     if(password === correctPassword){
//        alert("Acceso permitido");
//     }
// }

// Asignar una calificación según la puntuación obtenida en un examen.

// Solicitar al usuario que ingrese la puntuación obtenida en el examen.
// Almacenar la puntuación ingresada en una variable llamada puntuacion.
// Utilizar una estructura if-else para evaluar la puntuación según los siguientes rangos:
// Si puntuacion es mayor o igual a 90, asignar la calificación "A".
// Si puntuacion es mayor o igual a 80, asignar la calificación "B".
// Si puntuacion es mayor o igual a 70, asignar la calificación "C".
// Si puntuacion es mayor o igual a 60, asignar la calificación "D".
// De lo contrario, asignar la calificación "F".
// Imprimir en la consola la calificación obtenida.


// let notaObtenida = Number(prompt("Ingrese su nota"))
// let calificacion = "";

// if(notaObtenida >= 9){
//     calificacion = "A";
// }else if (notaObtenida >= 8){
//     calificacion = "B";
// }else if (notaObtenida >= 7){
//     calificacion = "C";
// }else if (notaObtenida >= 6){
//     calificacion = "D";
// }else{
//     calificacion = "F"
// }

// console.log(`Su calificacione es ${calificacion}`);


// Generar una secuencia de números pares.
// Define una variable llamada n y asígnale un número entero positivo.
// Utiliza un ciclo for para iterar desde 0 hasta n (inclusive), incrementando en 2 en cada iteración.
// En cada iteración, muestra el número actual.
// let n = 133;

// for (let i = 0; i <= n; i+=2){
//     console.log(i);
    
// }

// Suma de los primeros N números.

// Define una variable llamada n y asígnale un número entero positivo.
// Declara una variable llamada suma y asígnale el valor 0.
// Utiliza un ciclo for para iterar desde 1 hasta b, incrementando en 1 en cada iteración.
// En cada iteración, suma el número actual al valor de suma.
// Al finalizar el ciclo, muestra el valor de suma.

// let n = 10;
// let suma = 0;
// for(let i = 0; i < n; i++){
//     suma += i
//     //console.log(i);
    
// }
// console.log(suma);





// Conteo Ascendente de 2 en 2
// Instrucciones:
// El juego consiste en un conteo ascendente de 2 en 2.
// El jugador debe adivinar el número siguiente en cada iteración del ciclo for.
// Si el jugador adivina correctamente, se le dará un punto. Si no, se le restará un punto.
// En cada iteración, suma el número actual al valor de suma.
// Al final del juego, se mostrará la puntuación obtenida.
// alert("***Bienvenido al juego del azar*** \n Tendras que adivinar cual es el siguiente numero")
// let nombreJugador = prompt("Ingresa tu Nombre")
// let jugador1 = 0;
// let numGanador = Number(prompt(`Bienvenido ${nombreJugador} \n Ingresa un numero para adivinar que numero sera el proximo`))

// for(let i =0; i <= 10; i+=2){
//     if(numGanador == i){
//         jugador1 ++
//         alert("Adivinaste")
//     }else {
//         jugador1 --
//         alert("hu, Sigue intentandolo")
//     }
//     numGanador = Number(prompt(`Ingrese un numero nuevamente`))
// }
// alert(`${nombreJugador} ganaste ${jugador1} puntos`);

// Verificar si un número es Primo.
// Define una variable llamada numero y asígnale un número entero positivo mayor que 1.
// Declara una variable booleana llamada esPrimo y asígnale el valor true.
// Utiliza un ciclo for para iterar desde 2 hasta la mitad del valor de numero.
// En cada iteración, verifica si numero es divisible por el número actual del ciclo.
// Si numero es divisible por algún número, asigna el valor false a esPrimo y detén el ciclo utilizando break.
// Después del ciclo, verifica el valor de esPrimo:
// Si esPrimo es true, muestra un mensaje indicando que el número es primo.
// Si esPrimo es false, muestra un mensaje indicando que el número no es primo.

// let numero = 50;
// let esPrimo= true;

// for(let i= 2; i <= 25; i++ ){
//     if(numero % i == 0){
//         esPrimo = false;
//         break
//     }
// }
// if(esPrimo == true){
//     alert(`El numero es primo`)
// }else{
//     alert("No es primo")
// }

// Generar una secuencia de Fibonacci.

// Pasos:

// Define una variable llamada n y asígnale un número entero positivo mayor que 1.
// Declara dos variables llamadas a y b y asígnales los valores 0 y 1, respectivamente.
// Utiliza un ciclo for para iterar n veces, iniciando en 1.
// En cada iteración, actualiza el valor de a sumándole el valor actual de b.
// Actualiza el valor de b asignándole el valor anterior de a.

let n = 2;
let a = 0;
let b = 1;

for(let i =1; i<20; i++){
    a += b;
    b += a;
}

console.log(a + b);









