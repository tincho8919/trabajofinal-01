// solo declaramos constantes y las imprimimos en consola
//lo agregado en el formulario
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email= document.querySelector('#email')
const edad = document.querySelector('#edad')
const fecha = document.querySelector('#fecha')
const direccion = document.querySelector('#direccion')
const acuerdo= document.querySelector('#acuerdo')
const texto  = document.querySelector('#texto ')
const enviar = document.querySelector('#enviar')

let addDatos = () =>{
    
        console.log(nombre.value);
        console.log(apellido.value);
        console.log(email.value);
        console.log(edad.value);
        console.log(fecha.value);
        console.log(direccion.value);
        console.log(acuerdo.value);
        console.log(texto.value);
        
    
}

enviar.addEventListener('click', addDatos)

/* let personas =['#nombre','#apellido', '#email', '#nombre', '#edad','#acuerdo','#texto']

function nuevos(NuevoUser) {

    var personas = Lista();
    personas.push(NuevoUser)
    console.log(personas);
    localStorage.setItem('personas',JSON.stringify(personas));
}

function Lista() {
    var NuevasPersonas = JSON.parse(localStorage.getItem('NuevasPersonas'))
    if (personas == null) {
        NuevasPersonas = personas
    }

    return NuevasPersonas;
} */

