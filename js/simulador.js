// Arrays y constantes
const productos = prompt ("ingresar nombre del producto")
const precios = parseInt( prompt ("ingresar precio del producto"))
let carrito = [];

// Función 2: Calcular precio con descuento
function calcularPrecio(precio, cantidad) {
    let descuento = 0;
    if (cantidad >= 3) {
        descuento = 0.1; // 10% de descuento
    }
    return precio * cantidad * (1 - descuento);
}

// Función 3: Agregar productos al carrito
function agregarAlCarrito(productoIndex) {
    const precioFinal = calcularPrecio(precios[productoIndex]);
    carrito.push({ producto: productos[productoIndex], precioFinal });
    console.log(`Añadido al carrito: ${productos[productoIndex]} - $${precioFinal}`);
}

// Función 4: Mostrar resumen de la compra
function mostrarResumen() {
    let total = precios;
    console.log("----- Resumen de Compra -----");
    for (let item of carrito) {
        console.log(`${item.cantidad} x ${item.producto} = $${item.precioFinal}`);
        total += item.precioFinal;
    }
    console.log(`Total de la compra: $${total}`);
    alert(`Gracias por su compra. Total: $${total}`);
}

// Función principal: interacción con usuario
function iniciarSimulador() {
    let continuar = true;
    while (continuar) {

        continuar = confirm("¿Desea comprar otro producto?");
    }

    mostrarResumen();
}

// Llamada al simulador
iniciarSimulador();
