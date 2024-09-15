
// **********Variables Globales **********
let resumenCompra = "";
let carrito = 0;
let seguirComprando = false;


//                           **********Mensaje de Bienvenida *********
alert("Bienvenido a SoundMusic");







//                                ***** Eleccion de productos *****

function eleccionProductos(){
    let producto = parseInt(prompt("Digite el producto que desea comprar \n 1 para Baterias \n 2 para Platillos \n 3 para Redoblantes \n 4 para Pedales"));


    while (isNaN(producto)|| (producto === 0)|| (producto > 4)) {
        alert("Por favor ingrese una opcion válida")
        producto = parseInt(prompt("Digite el producto que desea comprar \n 1 para Baterias \n 2 para Platillos \n 3 para Redoblantes \n 4 para Pedales"));

    }


    switch (producto) {
        case 1:
            return validarBaterias(prompt("Tenemos disponibles: DW - LUDWIG - SONOR").toUpperCase());
        case 2:
            return validarPlatillos(prompt("Tenemos disponibles: PAISTE - ZILDJIAN - ISTANBUL").toUpperCase());
        case 3:
            return validarRedoblantes(prompt("Tenemos disponibles: DW COLLECTORS - LUDWIG SUPRAPHONIC - GRETSCH").toUpperCase());
        case 4:
            return validarPedales(prompt("Tenemos disponibles: DW500 - IRON COBRA - PEARL500").toUpperCase());
        default:
            return "Producto sin stock";
    }

}


//                         *****Validación de productos ******

function validarBaterias(seleccion) {
    if (seleccion === "DW" || seleccion === "LUDWIG" || seleccion === "SONOR") {
        return seleccion;
    } else {
        alert("Error: Producto no disponible. Por favor, seleccione uno válido.");
        return eleccionProductos();
    }
}

function validarPlatillos(seleccion) {
    if (seleccion === "PAISTE" || seleccion === "ZILDJIAN" || seleccion === "ISTANBUL") {
        return seleccion;
    } else {
        alert("Error: Producto no disponible. Por favor, seleccione uno válido.");
        return eleccionProductos(); 
    }
}

function validarRedoblantes(seleccion) {
    if (seleccion === "DW COLLECTORS" || seleccion === "LUDWIG SUPRAPHONIC" || seleccion === "GRETSCH") {
        return seleccion;
    } else {
        alert("Error: Producto no disponible. Por favor, seleccione uno válido.");
        return eleccionProductos();
    }
}

function validarPedales(seleccion) {
    if (seleccion === "DW500" || seleccion === "IRON COBRA" || seleccion === "PEARL500") {
        return seleccion;
    } else {
        alert("Error: Producto no disponible. Por favor, seleccione uno válido.");
        return eleccionProductos();
    }
}

//    ***************************Precio del producto elegido **************************

function precioProducto (){
    let precio = 0

    switch (producto) {
        case "DW":
            precio = 1200;
            break;
        case "LUDWING":
            precio = 1300;
            break;
        case "SONOR":
            precio = 1400;
            break;
        case "PAISTE":
            precio = 2200;
            break;
        case "ZILDJIAN":
            precio = 2300;
            break;
        case "ESTAMBUL":
            precio = 2400;
            break;
        case "DW COLECTORS":
            precio = 3200;
            break;
        case "LUDWING SUPRAPHONIC":
            precio = 3300;
            break;
        case "GRETCH":
            precio = 3400;
            break;
        case "DW500":
            precio = 4200;
            break;
        case "IRON COBRA":
            precio = 4300;
            break;
        case "PERAL500":
            precio = 4400;
            break;
        default:
            "Precio no encontrado"
            break;
    }
    return precio;
}

//          ******************** Operacion de compra ****************************


function comprar(){

    do {
        let compra= prompt("Desea comprar el producto ?")
        
        if((compra === "si") || (compra === "")){
            alert("Compra realizada con exito del producto "+producto+" por $ "+ precio+ "USD")
            resumenCompra = "Resumen de su compra por $ "+ precio +"usd del producto "+ producto
            
        }else if(compra === null){
            alert("has cancelado la compra")
        }else{
            alert("Producto "+producto+" guardado en el carrito")
            carrito += 1;            
        }

        seguirComprando = confirm("Desea relizar otra compra ?")

        if(seguirComprando === true){
            eleccionProductos()
        }else if((seguirComprando === false) && (compra === "no")){
            alert("Aun tienes un producto en el carrito")
            seguirComprando = confirm("Quieres terminar la compra?")
            if(seguirComprando === true){
                compraCarrito()
            }else{
                alert("Guardaremos el producto para cuando vuelvas! \n Gracias por su visita")
                carrito = 0;
            }
        }
        else{
            alert("Gracias por su visita")
        }
    } while (seguirComprando);
    
    return resumenCompra;
}


const compraCarrito =()=>{
    alert("Bienvenido a tu carrito!! \nTe guardamos tu "+producto)
    let compraCarrito = prompt("Quieres comprar "+ producto+"?")
    if(compraCarrito === "" || compraCarrito === "si"){
        alert("Felicidades el "+producto+"es tuyo \nGracias por tu compra!! \nVuelve pronto!")
        seguirComprando = false;
    }else{
        alert("Gracias por tu visita, vuelve pronto!")
        seguirComprando = false;
        carrito = 0;
    }

}


let producto = eleccionProductos();
console.log("producto seleccionado : "+producto);
let precio = precioProducto()
console.log("Costo del producto: $"+precio);


//         ******Compruebo si producto y precio no estan vacios ******
if(producto && precio){
    comprar()
}else{
    alert("No se puede realizar una compra por algun motivo.")
}

//            ********Compruebo que el carrito no quede con productos********

if(carrito === 1){
    alert("Olvidaste algo en tu carrito!!")
    carrito = confirm("Quieres terminar con la compra?")
    if(carrito === true){
        compraCarrito()
    }else{
        alert("Esperamos verte pronto!")
    }
}






















// do{
//     productos = prompt("Elija los productos que desea comprar \n 1-Baterias \n 2-Platillos \n 3-Redoblantes \n 4-Pedales").toUpperCase();
//     cantProductos = parseInt(prompt("Ingrese la cantidad del producto seleccionado"))

    
//     while(isNaN(cantProductos)){
//         alert("Debe ingresar un numero valido")
//         cantProductos = parseInt(prompt("Ingrese la cantidad del producto seleccionado"))
//     }

//     switch (productos) {
//         case "1":
//             precio = 2000000;
//             break;
//         case "2":
//             precio = 90000;
//             break
//         case "3":
//             precio = 900000;
//             break
//         case "4":
//             precio = 100000;
//             break
//         default:
//             alert("El producto "+ productos +" no se encuentra disponible");
//             break;
//     }



//     seguirComprando = confirm("Desea seguir comprando?")

    
//     valorTotal += precio * cantProductos;
//     totalProductos += cantProductos;
    
// }while(seguirComprando)

// alert("Usted esta llevando: " + totalProductos + productos.toLowerCase() + "\n El valor total a pagar es de: $"+ valorTotal)
// alert("Gracias por elegirnos");