

//llamamos a la función para que se ejecute al cargar la página
window.onload = function(){
    cargarTabla();
} 


let memoriaLocal = localStorage.getItem('Nombre');

let misProductos = localStorage.getItem('Productos');




console.log(memoriaLocal);

let titulo = document.getElementById('titulo');

titulo.innerHTML = memoriaLocal;



//función para cargar la tabla de productos
const cargarTabla = () =>{

    //obtener la tabla
    let tabla = document.getElementById('tablaProductos');

    //limpiar la tabla antes de que el for lo cargue de nuevo
    tabla.innerText = '';

    //convierto el string en JSON
    let mismosProductos = JSON.parse(localStorage.getItem('Productos'));

    //recorrer el arreglo productos
    for (let i = 0; i < mismosProductos.length; i++) {

        //crear un elemeto tr
        let fila = document.createElement('tr');

        //creamos un elemento td
        let celdaNombre = document.createElement('td');
        let celdaPrecio = document.createElement('td');

        //agregamos el dato a la celda del nombre del producto
        celdaNombre.textContent = mismosProductos[i].nombre;
        celdaPrecio.textContent = mismosProductos[i].precio;

        //subimos el td al tr
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        //subimos le tr al tbody
        tabla.appendChild(fila)


        //imprimimos los JSON en el array de productos
        console.log(mismosProductos);
    }

}
// añadimos la funcion del boton borrar datos de  celdas de la tabla
function eliminarLista() {
    let tr = document.getElementById("tablaProductos")
    tr.remove();
    
}

