
let productos =[];

function cargarProductos() {
    ////imprimimos una info de la función
    console.log(`tus productos se cargarno a la database`);
    ////tomamos los datos ante el formulario
    let nombreProducto = document.getElementById('nombreProducto').value;
    //console.log(nombreProducto);
    let precioProducto = document.getElementById('precioProducto').value;
    //console.log(precioProducto);
    console.log(typeof precioProducto);
    //productos.push('Pepas');
    //objetos jonso de productos
    let producto = {
        nombre: nombreProducto ,
        precio: precioProducto
    }
    //imprimimos el objeto producto
    console.log(producto);
    //guardamos el producto en el arreglo o data base
    productos.push(producto);

    //guardo la info del array del producto
    //producto.push(nombreProducto)
    //producto.push(precioProducto)

    //imprimo el arreglo
    console.log(productos);
    //imprimimos en la consola los datos del preoducto
    //console.log(nombreProducto);
    //console.log(precioProducto);
    //llamo a la funcion cargarProductos
    cargarTabla();
}

//funcion para cargar la tabla de productos
const cargarTabla = () =>{
    //obtener la tabla
    let tabla = document.getElementById('tablaProductos')
    //recorrer el arreglo productos
    for (let i = 0; i < productos.length; i++) {
    //crear elemento tr
    let fila = document.createElement('tr');

    //creamos un elemento td
    let celdaNombre = document.createElement('td');
    //agregamos el dato a la celda el nombre del producto
    celdaNombre.textContent = 'MOTO'
    //subimos el td al tr
    fila.appendChild(celdaNombre)
    //subimos el tr al tbody
    tabla.appendChild(fila)



        console.log(productos[i]);
    }
}